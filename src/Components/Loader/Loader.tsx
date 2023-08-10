import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { LoaderStyles } from './Loader.style';

export const Loader: React.FC = () => {
  return (
    <View style={[LoaderStyles.container, LoaderStyles.horizontal]}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
