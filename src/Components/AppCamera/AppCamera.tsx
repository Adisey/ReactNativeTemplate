import React, { useCallback, useEffect, useRef } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import {
  Camera,
  CameraRuntimeError,
  useCameraDevices,
} from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import { useIsForeground } from '../../hooks';
import { CheckAppPermissions } from '../CheckAppPermissions/CheckAppPermissions';
import { SectionStyles } from '../Section/Section.styles';

export const AppCamera: React.FC = () => {
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  // console.log(
  //   new Date().toISOString(),
  //   Platform.OS,
  //   '-(RENDER Camera)->',
  //   `-devices->`,
  //   devices,
  // );
  const device = devices.back;
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();

  console.log(
    new Date().toISOString(),
    Platform.OS,
    '-(RENDER Camera)->',
    `-isFocussed->`,
    isFocussed,
    `-isForeground->`,
    isForeground,
  );

  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(
      new Date().toISOString(),
      Platform.OS,
      'Camera ERROR:',
      error,
    );
  }, []);

  const testInit = async () => {
    const availableCameras = await Camera.getAvailableCameraDevices();
    // console.log(
    //   new Date().toISOString(),
    //   Platform.OS,
    //   '-(INIT)->',
    //   typeof availableCameras,
    //   `-availableCameras->`,
    //   availableCameras,
    // );
  };

  useEffect(() => {
    testInit();
  }, []);

  return device ? (
    <Camera
      device={device}
      isActive={isFocussed && isForeground}
      onError={onError}
      ref={camera}
      style={StyleSheet.absoluteFill}
    />
  ) : (
    <CheckAppPermissions>
      <Text
        style={[SectionStyles.sectionDescription, SectionStyles.marginBottom]}>
        Your device don't have Back Camera 😒
      </Text>
    </CheckAppPermissions>
  );
};
