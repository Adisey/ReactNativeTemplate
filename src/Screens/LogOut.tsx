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
import { setLogOut, setLogin } from '../middleware';
import { Section } from '../Components';

export const LogOut: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<any>();
  const { isAuth } = useAuthStore();

  const goBack = () => {
    console.log(new Date().toISOString(), '-(Button goBack Login)->', `<--`);
    navigation.goBack();
  };

  const logOut = () => {
    console.log(new Date().toISOString(), '-(Button logOut Login)->', `<--`);
    setLogOut();
  };
  console.log(
    new Date().toISOString(),
    '-(RENDER)-LogOut->',
    Platform.OS,
    isAuth,
    `<-isAuth-`,
  );

  return (
    <SafeAreaView style={Styles}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
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
