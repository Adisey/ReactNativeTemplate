import { Platform } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import {
  CameraPermissionRequestResult,
  CameraPermissionStatus,
} from 'react-native-vision-camera/src/Camera';

export const getCameraPermission =
  async (): Promise<CameraPermissionStatus> => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    console.log(
      new Date().toISOString(),
      Platform.OS,
      '-(getPermission)->',
      typeof cameraPermission,
      `-cameraPermission->`,
      cameraPermission,
    );
    return cameraPermission;
  };
export const getMicrophonePermission =
  async (): Promise<CameraPermissionStatus> => {
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    console.log(
      new Date().toISOString(),
      Platform.OS,
      '-(getPermission)->',
      typeof microphonePermission,
      `-microphonePermission->`,
      microphonePermission,
    );
    return microphonePermission;
  };

export const requestCameraPermission =
  async (): Promise<CameraPermissionRequestResult> => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(
      new Date().toISOString(),
      Platform.OS,
      '-(getPermission)->',
      typeof newCameraPermission,
      `-cameraPermission->`,
      newCameraPermission,
    );
    return newCameraPermission;
  };
export const requestMicrophonePermission =
  async (): Promise<CameraPermissionRequestResult> => {
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(
      new Date().toISOString(),
      Platform.OS,
      '-(getPermission)->',
      typeof newMicrophonePermission,
      `-microphonePermission->`,
      newMicrophonePermission,
    );
    return newMicrophonePermission;
  };

export const checkCameraPermission =
  async (): Promise<CameraPermissionStatus> => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    console.log(
      new Date().toISOString(),
      Platform.OS,
      '-(checkPermission)->',
      typeof cameraPermission,
      `-cameraPermission->`,
      cameraPermission,
    );
    return cameraPermission;
  };
export const checkMicrophonePermission =
  async (): Promise<CameraPermissionStatus> => {
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    console.log(
      new Date().toISOString(),
      Platform.OS,
      '-(checkPermission)->',
      typeof microphonePermission,
      `-microphonePermission->`,
      microphonePermission,
    );
    return microphonePermission;
  };
export const checkPermission = async (): Promise<void> => {
  console.log(
    new Date().toISOString(),
    Platform.OS,
    `--(START checkPermission)-  ->`,
  );
  const cameraPermission = await getCameraPermission();
  console.log(
    new Date().toISOString(),
    Platform.OS,
    '-(checkPermission)->',
    typeof cameraPermission,
    `-cameraPermission->`,
    cameraPermission,
  );

  if (cameraPermission === 'not-determined') {
    const cameraPermission2 = await getCameraPermission();
    console.log(
      new Date().toISOString(),
      Platform.OS,
      '-(checkPermission 2 )->',
      typeof cameraPermission2,
      `-cameraPermission2->`,
      cameraPermission2,
    );
  }

  console.log(
    new Date().toISOString(),
    Platform.OS,
    `--(END checkPermission)-  ->`,
  );
};
