import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useAuthStore } from '../../stores';
import { useColorThemeStyles } from '../../hooks';
import { setLogOut } from '../../middleware';
import { Section } from '../index';

export const LogOut: React.FC = () => {
  const Styles = useColorThemeStyles();
  const { isAuth } = useAuthStore();

  const logOut = () => {
    setLogOut();
  };

  return (
    <View style={Styles}>
      <Section title="LogOut"></Section>
      <Section title="Status">
        <Text>{`isAuth: ${isAuth}`}</Text>
      </Section>
      <Button title={'LogOut'} onPress={logOut} />
    </View>
  );
};
