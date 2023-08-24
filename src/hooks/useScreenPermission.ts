import { useEffect, useState } from 'react';
import { Permission } from 'react-native-permissions';
import { useRoute } from '@react-navigation/native';
import {
  CheckPermissionStatus,
  IPermission,
  checkPermissionStatus,
} from '../middleware';
import { useIsActiveScreen } from './useIsActiveScreen';

type IUseGetPermission = {
  isLoading: boolean;
  isRight: boolean;
  permissions: IPermission[];
  setPermissionLoading: (permission: Permission, isLoading: boolean) => void;
  setPermissionStatus: (permission: Permission, status: string) => void;
};

export const useScreenPermission = (
  screenPermissions: IPermission[],
  isGetPermissionsOnStart = false,
): IUseGetPermission => {
  const [permissions, setPermissions] =
    useState<IPermission[]>(screenPermissions);

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

  const getPermissionsOnStart = async () => {
    if (isGetPermissionsOnStart) {
      for (const i of permissions) {
        await checkPermissionStatus(
          i.permission,
          CheckPermissionStatus.REQUEST,
        );
      }
    }
  };

  const checkAllPermissions = async () => {
    permissions.forEach(i =>
      checkPermissionStatus(
        i.permission,
        CheckPermissionStatus.CHECK,
        setPermissionStatus,
        setPermissionLoading,
      ),
    );
  };

  const initHook = async () => {
    await getPermissionsOnStart();
    await checkAllPermissions();
  };

  useEffect(() => {
    if (isActiveScreen) {
      initHook();
    }
  }, [isActiveScreen]);

  const isRight = permissions
    .map(i => i.status === 'granted')
    .reduce((res: boolean, item: boolean) => res && item);

  const isLoading = permissions
    .map(i => !!i.isLoading)
    .reduce((res: boolean, item: boolean) => res && item);

  return {
    isLoading,
    isRight,
    permissions,
    setPermissionLoading,
    setPermissionStatus,
  };
};
