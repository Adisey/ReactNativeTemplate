import React, { useEffect } from 'react';
// import { Platform, StyleSheet } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
// import { checkPermission } from '../middleware';
import { Loader } from '../Components';

export const CameraScreen: React.FC = () => {
  // const devices = useCameraDevices();
  // console.log(
  //   new Date().toISOString(),
  //   Platform.OS,
  //   '-(RENDER CameraScreen)->',
  //   typeof devices,
  //   `-devices->`,
  //   devices,
  // );
  // const device = devices.back;
  // console.log(
  //   new Date().toISOString(),
  //   Platform.OS,
  //   '-(RENDER CameraScreen)->',
  //   typeof device,
  //   `-device->`,
  //   device,
  // );
  // const getPermissions = async () => {
  //   const cameraPermission = await Camera.getCameraPermissionStatus();
  //   console.log(
  //     Date.now(),
  //     '-(getPermissions)->',
  //     typeof cameraPermission,
  //     `-cameraPermission->`,
  //     cameraPermission,
  //   );
  //   const microphonePermission = await Camera.getMicrophonePermissionStatus();
  //   console.log(
  //     Date.now(),
  //     '-(getPermissions)->',
  //     typeof microphonePermission,
  //     `-microphonePermission->`,
  //     microphonePermission,
  //   );
  // };

  useEffect(() => {
    // checkPermission();
    // getPermissions();
  }, []);

  // if (device == null) {
  // if (true) {
  return <Loader />;
  // } else {
  //   return (
  //     <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  //   );
  // }
};
