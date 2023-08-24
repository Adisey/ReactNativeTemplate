import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Permission, RESULTS } from 'react-native-permissions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { useColorThemeStyles, useIsActiveScreen } from '../../hooks';
import {
  CheckPermissionStatus,
  IPermission,
  checkPermissionStatus,
  devicePermissions,
} from '../../middleware';
import { Section } from '../index';
import { PermissionsStyles } from './Permissions.styles';

export const Permissions: React.FC = () => {
  const Styles = useColorThemeStyles();

  const [permissions, setPermissions] =
    useState<IPermission[]>(devicePermissions);

  const { name } = useRoute();
  const isActiveScreen = useIsActiveScreen(name);

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

  useEffect(() => {
    if (isActiveScreen) {
      permissions.forEach(i =>
        checkPermissionStatus(
          i.permission,
          CheckPermissionStatus.CHECK,
          setPermissionStatus,
          setPermissionLoading,
        ),
      );
    }
  }, [isActiveScreen]);

  // console.log(
  //   Platform.OS,
  //   '-(RENDER)->',
  //   new Date().toISOString(),
  //   `-permissions->`,
  //   permissions.length,
  //   // permissions,
  //   '*'.repeat(50),
  // );

  return (
    <View style={Styles}>
      <Section
        title="Permissions"
        materialCommunityIconsName={'cellphone-lock'}>
        {permissions.map((item: IPermission, index: number) => {
          const onPress = () => {
            checkPermissionStatus(
              item.permission,
              CheckPermissionStatus.REQUEST,
              setPermissionStatus,
              setPermissionLoading,
            );
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
