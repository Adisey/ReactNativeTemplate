import React from 'react';
import { Text } from 'react-native';
import { useScreenPermission } from '../hooks/useScreenPermission';
import { devicePermissions } from '../middleware';
import { CheckAppPermissions, Loader } from '../Components';

const cameraPermissions = devicePermissions.filter(i =>
  ['CAMERA', 'MICROPHONE', 'RECORD_AUDIO'].includes(i.name),
);

export const CameraScreen: React.FC = () => {
  const { isRight, isLoading } = useScreenPermission(cameraPermissions, true);

  if (isLoading) {
    return <Loader />;
  } else {
    if (isRight) {
      return <Text>XXX: {isRight.toString()}</Text>;
    }
  }

  return <CheckAppPermissions />;
};
// <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
