import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { a } from '../interfaces';
import { useColorThemeStyles } from '../hooks';
import { MainStackParamList } from '../Navigation';
import { CustomStatusBar, Section } from '../Components';

type MainNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainStackParamList, 'Page2'>,
  StackNavigationProp<MainStackParamList>
>;

export const PageMain: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<MainNavigationProp>();

  console.log(Date.now(), '-()->', typeof a, `-a->`, a);
  const goToPage1 = () => {
    console.log(new Date().toISOString(), '-(Button goToPage1)->', `<--`);
    navigation.navigate('Page1');
  };
  const goToPage2 = () => {
    console.log(new Date().toISOString(), '-(Button goToPage2)->', `<--`);
    navigation.navigate('Page2', { from: 'Page ^Main' });
  };
  const goToSettings = () => {
    console.log(new Date().toISOString(), '-(Button goToPage3)->', `<--`);
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
          </Section>
          <Button title={'Page #1'} onPress={goToPage1} />
          <Button title={'Page #2'} onPress={goToPage2} />
          <Button title={'Settings'} onPress={goToSettings} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
