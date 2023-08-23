import { Platform } from 'react-native';
import RNPermissions, {
  PERMISSIONS,
  Permission,
} from 'react-native-permissions';

export type IPermission = {
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

export const checkPermissionStatus = (
  permission: Permission,
  setPermissionStatus: (permission: Permission, status: string) => void,
  setPermissionLoading: (permission: Permission, isLoading: boolean) => void,
) => {
  setPermissionLoading(permission, true);
  RNPermissions.check(permission)
    .then(status => {
      setPermissionStatus(permission, status);
    })
    .catch(error => {
      console.error(
        new Date().toISOString(),
        Platform.OS,
        `--(checkPermissionStatus)-  ->`,
        permission,
        error,
      );
      setPermissionLoading(permission, false);
    });
};

export const getPermissionStatus = (
  permission: Permission,
  setPermissionStatus: (permission: Permission, status: string) => void,
  setPermissionLoading: (permission: Permission, isLoading: boolean) => void,
) => {
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
