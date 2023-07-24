import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore } from '../stores';
import { useColorThemeStyles } from '../hooks';
import { MainStackParamList } from '../Navigation';
import { CustomStatusBar, Section } from '../Components';
import { Login } from './Login';

type MainNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainStackParamList, 'Page2'>,
  StackNavigationProp<MainStackParamList>
>;

export const PageMain: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<MainNavigationProp>();
  const { isAuth } = useAuthStore();

  const goToPage1 = () => {
    console.log(new Date().toISOString(), '-(Button goToPage1)->', `<--`);
    navigation.navigate('Page1');
  };
  const goToPage2 = () => {
    console.log(new Date().toISOString(), '-(Button goToPage2)->', `<--`);
    navigation.navigate('Page2', { from: 'Page ^Main' });
  };
  const goToLogin = () => {
    console.log(new Date().toISOString(), '-(Button goToLogin)->', `<--`);
    navigation.navigate('Login');
  };
  const goToSettings = () => {
    console.log(new Date().toISOString(), '-(Button goToSettings)->', `<--`);
    navigation.navigate('Settings');
  };
  console.log(new Date().toISOString(), '-(RENDER)-Main->', `<--`);
  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Main Page">
            <Text>Hello ARTEM !</Text>
            <Text>{`isAuth: ${isAuth}`}</Text>
          </Section>
          <Button title={'Page #1'} onPress={goToPage1} />
          <Button title={'Page #2'} onPress={goToPage2} />
          <Button title={'Login'} onPress={goToLogin} />
          <Button title={'Settings'} onPress={goToSettings} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
