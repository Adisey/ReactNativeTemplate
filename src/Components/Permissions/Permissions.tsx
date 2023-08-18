import React, { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import RNPermissions, {
  PERMISSIONS,
  Permission,
  RESULTS,
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
  { name: 'CAMERA', title: 'Camera', icon: 'camera-enhance' },
  { name: 'MICROPHONE', title: 'Microphone', icon: 'microphone' },
  { name: 'RECORD_AUDIO', title: 'Microphone', icon: 'microphone' },
  {
    name: 'ACCESS_BACKGROUND_LOCATION',
    title: 'Background Location',
    icon: 'map-marker',
  },
  {
    name: 'ACCESS_COARSE_LOCATION',
    title: 'Coarse location',
    icon: 'map-marker-outline',
  },
  {
    name: 'ACCESS_FINE_LOCATION',
    title: 'Fine location',
    icon: 'map-marker-outline',
  },
  { name: 'LOCATION_ALWAYS', title: 'Location Always', icon: 'map-marker' },
  {
    name: 'LOCATION_WHEN_IN_USE',
    title: 'Location in use',
    icon: 'map-marker-outline',
  },
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
    const { icon, title } = appNeedPermission.find(
      i => i.name === permissionName,
    ) || {
      icon: '',
      title: '',
    };
    return {
      permission: item as Permission,
      icon,
      status: '',
      title,
    };
  });

export const Permissions: React.FC = () => {
  const Styles = useColorThemeStyles();

  const [permissions, setPermissions] =
    useState<IPermission[]>(devicePermissions);

  const setPermissionLoading = (permission: Permission, isLoading: boolean) => {
    setPermissions(prev =>
      prev.map((i: IPermission): IPermission => {
        return i.permission === permission ? { ...i, isLoading } : { ...i };
      }),
    );
  };
  const setPermissionStatus = (permission: Permission, status: string) => {
    setPermissions(prev =>
      prev.map((i: IPermission): IPermission => {
        return i.permission === permission
          ? { ...i, status, isLoading: false }
          : { ...i };
      }),
    );
  };

  const checkStatus = (permission: Permission) => {
    setPermissionLoading(permission, true);
    RNPermissions.check(permission)
      .then(status => {
        setPermissionStatus(permission, status);
        console.log(
          new Date().toISOString(),
          Platform.OS,
          `--(checkStatus)-  ->`,
          permission,
          status,
        );
      })
      .catch(error => {
        console.error(
          new Date().toISOString(),
          Platform.OS,
          `--(checkStatus)-  ->`,
          permission,
          error,
        );
        setPermissionLoading(permission, false);
      });
  };

  const getPermission = (permission: Permission) => {
    setPermissionLoading(permission, true);
    RNPermissions.request(permission)
      .then(status => {
        setPermissionStatus(permission, status);
        console.log(
          new Date().toISOString(),
          Platform.OS,
          `--(getPermission)-  ->`,
          permission,
          status,
        );
      })
      .catch(error => {
        console.error(
          new Date().toISOString(),
          Platform.OS,
          `--(getPermission)-  ->`,
          permission,
          error,
        );
        setPermissionLoading(permission, false);
      });
  };

  useEffect(() => {
    permissions.forEach(i => checkStatus(i.permission));
  }, []);

  // console.log(
  //   Platform.OS,
  //   '-(RENDER)->',
  //   new Date().toISOString(),
  //   `-permissions->`,
  //   permissions.length,
  //   '*'.repeat(50),
  // );

  return (
    <View style={Styles}>
      <Section
        title="Permissions"
        materialCommunityIconsName={'cellphone-lock'}>
        {permissions.map((item: IPermission, index: number) => {
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
                      item.status === RESULTS.GRANTED
                        ? PermissionsStyles.permissionsIconStatusOk
                        : PermissionsStyles.permissionsIconStatusNot,
                    ]}
                    name={item.status === RESULTS.GRANTED ? 'check' : 'close'}
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
                  {item.title}:
                </Text>
                <Text style={[Styles, PermissionsStyles.permissionsStatus]}>
                  {item.status}
                </Text>
              </View>
              <Button
                type={'clear'}
                title={'Get'}
                loading={item.isLoading}
                disabled={item.isLoading || item.status === RESULTS.GRANTED}
                onPress={onPress}
              />
            </View>
          );
        })}
      </Section>
    </View>
  );
};
