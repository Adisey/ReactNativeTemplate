import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { CheckAppPermissions } from '../CheckAppPermissions/CheckAppPermissions';
import { SectionStyles } from '../Section/Section.styles';

export const AppCamera: React.FC = () => {
  const devices = useCameraDevices();
  // console.log(
  //   new Date().toISOString(),
  //   Platform.OS,
  //   '-(RENDER Camera)->',
  //   `-devices->`,
  //   devices,
  // );
  const device = devices.back;

  useEffect(() => {}, []);

  return device ? (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  ) : (
    <CheckAppPermissions>
      <Text
        style={[SectionStyles.sectionDescription, SectionStyles.marginBottom]}>
        Your device don't have Back Camera 😒
      </Text>
    </CheckAppPermissions>
  );
};
