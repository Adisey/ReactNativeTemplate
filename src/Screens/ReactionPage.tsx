import React from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { testCalcMiddleWare, useTestCalcHook } from '../stores';
import { useColorThemeStyles } from '../hooks';
import { BottomTabsStackParamList } from '../Navigation';
import { CustomStatusBar, Section } from '../Components';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsStackParamList, 'ReactionPage'>,
  StackNavigationProp<BottomTabsStackParamList>
>;

export const ReactionPage: React.FC = () => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { count, countCalc, count2 } = useTestCalcHook();

  const { setInc, setDec } = testCalcMiddleWare();

  console.log(
    new Date().toISOString(),
    '-(RENDER)-ReactionPage->',
    Platform.OS,
    'count->',
    count,
    'countCalc->',
    countCalc,
  );

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="count">
            <Text>{count}</Text>
          </Section>
          <Section title="countCalc">
            <Text>{countCalc}</Text>
          </Section>
          <Section title="Actions">
            <Button title={'(+)'} onPress={setInc} />
            <Text> </Text>
            <Button title={'(-)'} onPress={setDec} />
          </Section>
          <Section title="count2">
            <Text>{count2}</Text>
          </Section>
          <Section title="Actions2">
            <Button title={'(+)'} onPress={testCalcMiddleWare().setInc2} />
            <Text> </Text>
            <Button title={'(-)'} onPress={testCalcMiddleWare().setDec2} />
          </Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
