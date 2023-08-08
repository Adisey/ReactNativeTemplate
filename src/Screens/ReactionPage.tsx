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
  console.log(
    new Date().toISOString(),
    '-(RENDER)-ReactionPage->',
    Platform.OS,
  );

  const goBack = () => {
    console.log(
      new Date().toISOString(),
      '-(Button goBack ReactionPage)->',
      `<--`,
    );
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles}>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
        <View style={Styles}>
          <Section title="Section 1">
            <Text>text</Text>
          </Section>
        </View>
        <Button title={'goBack'} onPress={goBack} />
      </ScrollView>
    </SafeAreaView>
  );
};
