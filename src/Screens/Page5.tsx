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
import { CustomStatusBar, Section } from '../Components';

export const Page5: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();
  const { isAuth } = useAuthStore();

  const goBack = () => {
    console.log(new Date().toISOString(), '-(Button goBack Page5)->', `<--`);
    navigation.goBack();
  };

  console.log(
    new Date().toISOString(),
    '-(RENDER)-Page5->',
    Platform.OS,
    isAuth,
    `<-isAuth-`,
  );

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Page 5">
            <Text>{`isAuth: ${isAuth}`}</Text>
          </Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
