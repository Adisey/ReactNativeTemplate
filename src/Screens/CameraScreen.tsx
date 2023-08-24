import React from 'react';
import { useScreenPermission } from '../hooks/useScreenPermission';
import { devicePermissions } from '../middleware';
import { AppCamera, CheckAppPermissions, Loader } from '../Components';

const cameraPermissions = devicePermissions.filter(i =>
  ['CAMERA', 'MICROPHONE', 'RECORD_AUDIO'].includes(i.name),
);

export const CameraScreen: React.FC = () => {
  const { isRight, isLoading } = useScreenPermission(cameraPermissions, true);

  if (isLoading) {
    return <Loader />;
  } else {
    if (isRight) {
      return <AppCamera />;
    }
  }

  return <CheckAppPermissions />;
};
