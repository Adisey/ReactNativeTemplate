import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorThemeStyles } from '../hooks';
import { CustomStatusBar, Section } from '../Components';

export const Page1: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();

  const goToPage2 = () => {
    console.log(new Date().toISOString(), '-(Button goToPage2)->', `<--`);
    navigation.navigate('Page2', { from: 'Page ^1' });
  };

  const goBack = () => {
    console.log(new Date().toISOString(), '-(Button goToPage2)->', `<--`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Page 1">
            <Text>Page 1</Text>
          </Section>
        </View>
        <Button title={'Page #2'} onPress={goToPage2} />
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
