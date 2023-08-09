import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LoaderStyles } from './Loader.style';

export const Loader: React.FC = () => {
  return (
    <View style={[LoaderStyles.container, LoaderStyles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
};
