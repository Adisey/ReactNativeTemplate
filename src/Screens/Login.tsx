import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../stores';
import { useColorThemeStyles } from '../hooks';
import { CustomStatusBar, Section } from '../Components';

export const Login: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();
  const { isAuth, setAuth } = useAuthStore();

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

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Login">
            <Text>{`isAuth: ${isAuth}`}</Text>
            <Button title={'Login'} onPress={logIn} />
            <Button title={'LogOut'} onPress={logOut} />
          </Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
