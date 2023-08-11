import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useColorThemeStyles } from '../../hooks';
import { LoaderStyles } from './Loader.style';

export const Loader: React.FC = () => {
  const { backgroundColor, color } = useColorThemeStyles();
  return (
    <View
      style={[
        LoaderStyles.container,
        LoaderStyles.horizontal,
        { backgroundColor },
      ]}>
      <Text style={{ color }}>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
