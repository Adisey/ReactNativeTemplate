import React from 'react';
import { CustomStatusBar, Section } from '../Components';
import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useColorThemeStyles } from '../hooks';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../Navigation/MainNavigator';

type Page2ComponentProps = NativeStackScreenProps<MainStackParamList, 'Page2'>;
type Page2RouteProp = RouteProp<MainStackParamList, 'Page2'>;
type Page2NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainStackParamList, 'Page2'>,
  StackNavigationProp<MainStackParamList>
>;

export const Page2: React.FC<Page2ComponentProps> = ({
  route,
}: Page2ComponentProps) => {
  const Styles = useColorThemeStyles();
  const navigation = useNavigation<Page2NavigationProp>();
  const hooksRoute = useRoute<Page2RouteProp>();
  const { params } = hooksRoute;

  const goBack = () => {
    console.log(new Date().toISOString(), '-(Button goBack Page2)->', `<--`);
    navigation.goBack();
  };

  console.log(
    new Date().toISOString(),
    '-(RENDER)-Page2->',
    Platform.OS,
    { ...route },
    `<-route-`,
  );
  console.log(
    new Date().toISOString(),
    '-(RENDER)-Page2->',
    Platform.OS,
    { ...hooksRoute },
    `<-hooksRoute-`,
  );
  console.log(
    new Date().toISOString(),
    '-(RENDER)-Page2->',
    Platform.OS,
    { ...params },
    `<-params-`,
  );
  return (
    <>
      <SafeAreaView style={Styles}>
        <CustomStatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
          <View style={Styles}>
            <Section title="Page 2">
              <Text>Page 2</Text>
            </Section>
          </View>
          <Button title={'goBack'} onPress={goBack} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
