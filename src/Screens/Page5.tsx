import React from 'react';
import { CustomStatusBar, Section } from '../Components';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useColorThemeStyles } from '../hooks';
import { useNavigation } from '@react-navigation/native';

export const Page5: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();

  const goBack = () => {
    console.log(new Date().toISOString(), '-(Button goBack Page5)->', `<--`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Page 5">
            <Text>Page 5</Text>
          </Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
