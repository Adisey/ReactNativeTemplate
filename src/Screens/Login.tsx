import React from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../stores';
import { useColorThemeStyles } from '../hooks';
import { setAuth } from '../middleware';
import { CustomStatusBar, Section } from '../Components';

export const Login: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();
  const { isAuth } = useAuthStore();

  const goBack = () => {
    console.log(new Date().toISOString(), '-(Button goBack Login)->', `<--`);
    navigation.goBack();
  };

  const logIn = () => {
    console.log(new Date().toISOString(), '-(Button logIn Login)->', `<--`);
    setAuth(true);
  };
  const logOut = () => {
    console.log(new Date().toISOString(), '-(Button logOut Login)->', `<--`);
    setAuth(false);
  };
  console.log(
    new Date().toISOString(),
    '-(RENDER)-Login->',
    Platform.OS,
    isAuth,
    `<-isAuth-`,
  );

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Login">
            <Button title={'Login'} onPress={logIn} />
          </Section>
          <Section title="LogOut">
            <Button title={'LogOut'} onPress={logOut} />
          </Section>
          <Section title="Status">
            <Text>{`isAuth: ${isAuth}`}</Text>
          </Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
