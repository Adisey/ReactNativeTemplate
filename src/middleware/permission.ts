import { Platform } from 'react-native';
import {
  PERMISSIONS,
  Permission,
  check,
  request,
} from 'react-native-permissions';
import { PermissionStatus } from 'react-native-permissions/src/types';

export type IPermission = {
  icon: string;
  isLoading?: boolean;
  name: string;
  permission: Permission;
  status: string;
  title: string;
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

export const devicePermissions: IPermission[] = Object.values(
  PLATFORM_PERMISSIONS,
)
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
    const { icon, title, name } = appNeedPermission.find(
      i => i.name === permissionName,
    ) || {
      icon: '',
      name: '',
      title: '',
    };
    return {
      icon,
      name,
      permission: item as Permission,
      status: '',
      title,
    };
  });

export enum CheckPermissionStatus {
  CHECK = 'check',
  REQUEST = 'request',
}
export const checkPermissionStatus = async (
  permission: Permission,
  type = CheckPermissionStatus.CHECK,
  setPermissionStatus?: (permission: Permission, status: string) => void,
  setPermissionLoading?: (permission: Permission, isLoading: boolean) => void,
): Promise<PermissionStatus> => {
  setPermissionLoading && setPermissionLoading(permission, true);
  const status =
    type === CheckPermissionStatus.REQUEST
      ? await request(permission)
      : await check(permission);
  setPermissionStatus && setPermissionStatus(permission, status);
  setPermissionLoading && setPermissionLoading(permission, false);
  return status;
};
