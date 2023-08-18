import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { checkPermission } from '../middleware';
import { Loader } from '../Components';

export const CameraScreen: React.FC = () => {
  const devices = useCameraDevices();
  // console.log(
  //   new Date().toISOString(),
  //   Platform.OS,
  //   '-(RENDER CameraScreen)->',
  //   typeof devices,
  //   `-devices->`,
  //   devices,
  // );
  const device = devices.back;
  // console.log(
  //   new Date().toISOString(),
  //   Platform.OS,
  //   '-(RENDER CameraScreen)->',
  //   typeof device,
  //   `-device->`,
  //   device,
  // );

  useEffect(() => {
    checkPermission();
  }, []);

  if (device == null) {
    return <Loader />;
  } else {
    return (
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    );
  }
};
