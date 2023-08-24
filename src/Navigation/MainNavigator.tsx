import React from 'react';

// import {
//   Button,
//   Platform,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   View,
// } from 'react-native';
// import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
// import {
//   CompositeNavigationProp,
//   NavigationContainer,
//   RouteProp,
//   useNavigation,
//   useRoute,
// } from '@react-navigation/native';
// import {
//   NativeStackScreenProps,
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useColorThemeStyles } from '../hooks';
// import { useNavigatorTheme } from '../hooks/useNavigatorTheme';
// import { MainScreen } from '../Screens';
// import { CustomStatusBar, Section } from '../Components';
// import { MainBottomNavigator } from './MainBottomNavigator';
//
export type MainStackParamList = {
  MainScreen: undefined;
  Page1: undefined;
  Page2: { from: string } | undefined;
  Settings: undefined;
};
//
// const MainStack = createNativeStackNavigator<MainStackParamList>();
//
// // ToDo: 14.08.2023 - Left only for example ;)
//
// export function MainNavigator() {
//   const navigationTheme = useNavigatorTheme();
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <MainStack.Navigator initialRouteName="MainScreen">
//         <MainStack.Screen
//           name="MainScreen"
//           component={MainScreen}
//           options={{ title: 'Main Page' }}
//         />
//         <MainStack.Screen name="Page1" component={Page1} />
//         <MainStack.Screen
//           name="Page2"
//           component={Page2}
//           initialParams={{ from: 'App ^^^' }}
//         />
//         <MainStack.Screen name="Settings" component={MainBottomNavigator} />
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// }
//
// export const Page1: React.FC = () => {
//   const Styles = useColorThemeStyles();
//   const navigation = useNavigation<any>();
//
//   const goToPage2 = () => {
//     console.log(new Date().toISOString(), '-(Button goToPage2)->', `<--`);
//     navigation.navigate('Page2', { from: 'Page ^1' });
//   };
//
//   const goBack = () => {
//     console.log(new Date().toISOString(), '-(Button goToPage2)->', `<--`);
//     navigation.goBack();
//   };
//
//   return (
//     <SafeAreaView style={Styles}>
//       <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
//         <View style={Styles}>
//           <Section title="Page 1">
//             <Text>Page 1</Text>
//           </Section>
//         </View>
//         <Button title={'Page #2'} onPress={goToPage2} />
//         <Button title={'goBack'} onPress={goBack} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
//
// type Page2ComponentProps = NativeStackScreenProps<MainStackParamList, 'Page2'>;
// type Page2RouteProp = RouteProp<MainStackParamList, 'Page2'>;
// type Page2NavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<MainStackParamList, 'Page2'>,
//   StackNavigationProp<MainStackParamList>
// >;
//
// export const Page2: React.FC<Page2ComponentProps> = ({
//   route,
// }: Page2ComponentProps) => {
//   const Styles = useColorThemeStyles();
//   const navigation = useNavigation<Page2NavigationProp>();
//   const hooksRoute = useRoute<Page2RouteProp>();
//   const { params } = hooksRoute;
//
//   const goBack = () => {
//     console.log(new Date().toISOString(), '-(Button goBack Page2)->', `<--`);
//     navigation.goBack();
//   };
//
//   console.log(
//     new Date().toISOString(),
//     '-(RENDER)-Page2->',
//     Platform.OS,
//     { ...route },
//     `<-route-`,
//   );
//   console.log(
//     new Date().toISOString(),
//     '-(RENDER)-Page2->',
//     Platform.OS,
//     { ...hooksRoute },
//     `<-hooksRoute-`,
//   );
//   console.log(
//     new Date().toISOString(),
//     '-(RENDER)-Page2->',
//     Platform.OS,
//     { ...params },
//     `<-params-`,
//   );
//   return (
//     <>
//       <SafeAreaView style={Styles}>
//         <CustomStatusBar />
//         <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles}>
//           <View style={Styles}>
//             <Section title="Page 2">
//               <Text>Page 2</Text>
//             </Section>
//           </View>
//           <Button title={'goBack'} onPress={goBack} />
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
