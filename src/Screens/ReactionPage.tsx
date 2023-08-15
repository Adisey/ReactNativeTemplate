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
          <Section
            title="FIRST Counter"
            materialCommunityIconsName={'numeric-1-circle-outline'}>
            <Text style={Styles}>count: {count}</Text>
            <Text style={Styles}>countCalc: {countCalc}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: 20,
                padding: 10,
              }}>
              <Button title={'(+) Increment'} onPress={setInc} />
              <Button title={'(-) Decrement'} onPress={setDec} />
            </View>
          </Section>
          <Section
            title="Second Counter"
            materialCommunityIconsName={'numeric-2-circle-outline'}>
            <Text style={Styles}>countCalc: {countCalc}</Text>
            <Text style={Styles}>count2: {count2}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: 20,
                padding: 10,
              }}>
              <Button
                title={'(+) Increment'}
                onPress={testCalcMiddleWare().setInc2}
              />
              <Text> </Text>
              <Button
                title={'(-) Decrement'}
                onPress={testCalcMiddleWare().setDec2}
              />
            </View>
          </Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
