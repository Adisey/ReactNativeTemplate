import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { Image } from '@rneui/base';
import { useColorThemeStyles } from '../hooks';
import { setLogin } from '../middleware';
import { Logo } from '../Components';

export const LogIn: React.FC = () => {
  const Styles = useColorThemeStyles();

  const logIn = () => {
    setLogin();
  };

  return (
    <SafeAreaView style={[Styles, { flex: 1 }]}>
      <View style={[Styles]}>
        <Logo />
        <Text
          style={[
            Styles,
            {
              marginTop: 50,
              marginBottom: 20,
              paddingHorizontal: 12,
              paddingVertical: 12,
              fontSize: 18,
              fontWeight: '400',
            },
          ]}>
          {' '}
          Press Login button
        </Text>
        <Button title={'Login'} onPress={logIn} />
      </View>
    </SafeAreaView>
  );
};
