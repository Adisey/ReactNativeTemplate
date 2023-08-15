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
      <Section title="Status" materialCommunityIconsName={'logout-variant'}>
        <Text
          style={[Styles, { marginBottom: 10 }]}>{`isAuth: ${isAuth}`}</Text>
        <Button title={'LogOut'} onPress={logOut} />
      </Section>
    </View>
  );
};
