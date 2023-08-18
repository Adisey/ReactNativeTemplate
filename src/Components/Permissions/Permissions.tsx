import React, { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import RNPermissions, {
  PERMISSIONS,
  Permission,
} from 'react-native-permissions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '@rneui/themed';
import { useColorThemeStyles } from '../../hooks';
import { Section } from '../index';
import { PermissionsStyles } from './Permissions.styles';

type IPermission = {
  icon: string;
  permission: Permission;
  status: string;
  title: string;
  isLoading?: boolean;
};
const appNeedPermission = [
  { name: 'CAMERA', icon: 'camera-enhance' },
  { name: 'MICROPHONE', icon: 'microphone' },
];
const { SIRI, ...PERMISSIONS_IOS } = PERMISSIONS.IOS; // remove siri (certificate required)
const PLATFORM_PERMISSIONS = Platform.select<
  | typeof PERMISSIONS.ANDROID
  | typeof PERMISSIONS_IOS
  | typeof PERMISSIONS.WINDOWS
  | {}
>({
  android: PERMISSIONS.ANDROID,
  ios: PERMISSIONS_IOS,
  windows: PERMISSIONS.WINDOWS,
  default: {},
});
const devicePermissions: IPermission[] = Object.values(PLATFORM_PERMISSIONS)
  .filter(item => {
    const parts = item.split('.');
    const os = parts[0];
    const permissionName = parts[parts.length - 1];
    return (
      os === Platform.OS &&
      appNeedPermission.map(i => i.name).includes(permissionName)
    );
  })
  .map(item => {
    const parts = item.split('.');
    const permissionName = parts[parts.length - 1];
    const { icon, name } = appNeedPermission.find(
      i => i.name === permissionName,
    ) || {
      name: '',
      icon: '',
    };
    console.log(Date.now(), `--()-  ->`, name, permissionName);
    return {
      permission: item as Permission,
      icon,
      status: 'xxx',
      title: permissionName,
    };
  });

export const Permissions: React.FC = () => {
  const Styles = useColorThemeStyles();

  const [permissions, setPermissions] =
    useState<IPermission[]>(devicePermissions);

  const setPermissionLoading = (permission: Permission, isLoading: boolean) => {
    const newP = permissions.map((i: IPermission): IPermission => {
      return i.permission === permission ? { ...i, isLoading } : { ...i };
    });
    setPermissions(newP);
  };
  const setPermissionStatus = (permission: Permission, status: string) => {
    const newP = permissions.map((i: IPermission): IPermission => {
      return i.permission === permission
        ? { ...i, status, isLoading: false }
        : { ...i };
    });
    setPermissions(newP);
  };

  const checkStatus = (permission: Permission) => {
    setPermissionLoading(permission, true);
    RNPermissions.check(permission)
      .then(status => {
        setPermissionStatus(permission, status);
      })
      .catch(error => {
        console.error(Date.now(), `--(checkStatus)-  ->`, permission, error);
        setPermissionLoading(permission, false);
      });
  };

  const getPermission = (permission: Permission) => {
    setPermissionLoading(permission, true);
    RNPermissions.request(permission)
      .then(status => {
        setPermissionStatus(permission, status);
      })
      .catch(error => {
        console.error(Date.now(), `--(getPermission)-  ->`, permission, error);
        setPermissionLoading(permission, false);
      });
  };

  useEffect(() => {
    permissions.forEach(i => checkStatus(i.permission));
  }, []);

  console.log(
    Platform.OS,
    '-(RENDER)->',
    new Date().toISOString(),
    `-permissions->`,
    permissions,
  );

  return (
    <View style={Styles}>
      <Section
        title="Permissions"
        materialCommunityIconsName={'cellphone-lock'}>
        {permissions.map((item: IPermission, index: number) => {
          console.log(Date.now(), `->`, index, item);

          const onPress = () => {
            getPermission(item.permission);
          };

          return (
            <View key={index} style={PermissionsStyles.permissionsItemWrap}>
              <View style={PermissionsStyles.permissionsItem}>
                <View style={PermissionsStyles.permissionsIconWrap}>
                  <MaterialCommunityIcons
                    style={[
                      Styles,
                      PermissionsStyles.permissionsIcon,
                      item.status === 'granted'
                        ? PermissionsStyles.permissionsIconStatusOk
                        : PermissionsStyles.permissionsIconStatusNot,
                    ]}
                    name={item.status === 'granted' ? 'check' : 'close'}
                  />
                </View>
                <View style={PermissionsStyles.permissionsIconWrap}>
                  {!!item.icon ? (
                    <MaterialCommunityIcons
                      style={[Styles, PermissionsStyles.permissionsIcon]}
                      name={item.icon}
                    />
                  ) : null}
                </View>
                <Text style={[Styles, PermissionsStyles.permissionsTitle]}>
                  {item.title}
                </Text>
                <Text style={[Styles, PermissionsStyles.permissionsStatus]}>
                  {item.status}
                </Text>
              </View>
              <Button
                style={[PermissionsStyles.permissionsButton]}
                type={'outline'}
                title={'Get'}
                loading={item.isLoading}
                disabled={item.isLoading || item.status === 'granted'}
                onPress={onPress}
              />
            </View>
          );
        })}
      </Section>
    </View>
  );
};
