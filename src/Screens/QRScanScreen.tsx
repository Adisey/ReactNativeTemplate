import React from 'react';
import { Button, SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../stores';
import { useColorThemeStyles } from '../hooks';
import { Section } from '../Components';

export const QRScanScreen: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();
  const { isAuth } = useAuthStore();

  const goBack = () => {
    console.log(new Date().toISOString(), '-(Button goBack InfoPage)->', `<--`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="InfoPage">{`isAuth: ${isAuth}`}</Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
