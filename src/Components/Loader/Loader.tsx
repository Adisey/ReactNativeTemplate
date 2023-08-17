import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useColorThemeStyles } from '../../hooks';
import { LoaderStyles } from './Loader.style';

export const Loader: React.FC = () => {
  const { backgroundColor, color } = useColorThemeStyles();
  return (
    <View style={[LoaderStyles.container, { backgroundColor }]}>
      <Text style={[LoaderStyles.text, { color }]}>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
