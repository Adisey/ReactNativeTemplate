import React from 'react';
import { CustomStatusBar, Section } from '../Components';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useColorThemeStyles } from '../hooks';
import { useNavigation } from '@react-navigation/native';

export const Main: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();
  const goToPage1 = () => {
    console.log(new Date().toISOString(), '-(Button goToPage1)->', `<--`);
    navigation.navigate('Page1');
  };
  const goToPage2 = () => {
    console.log(new Date().toISOString(), '-(Button goToPage2)->', `<--`);
    navigation.navigate('Page2');
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
