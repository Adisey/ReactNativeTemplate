import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useColorThemeStyles } from '../hooks';
import { useNavigatorTheme } from '../hooks/useNavigatorTheme';
import {
  CameraScreen,
  QRScanScreen,
  ReactionPage,
  SettingScreen,
} from '../Screens';

export type BottomTabsStackParamList = {
  Setting: undefined;
  QRScanScreen: undefined;
  CameraScreen: undefined;
  ReactionPage: undefined;
};

const MainBottomNavigatorStack =
  createBottomTabNavigator<BottomTabsStackParamList>();

export function MainBottomNavigator() {
  const { backgroundColor, color } = useColorThemeStyles();
  const navigationTheme = useNavigatorTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <MainBottomNavigatorStack.Navigator
        initialRouteName="ReactionPage"
        screenOptions={{
          tabBarActiveBackgroundColor: backgroundColor,
          tabBarActiveTintColor: 'rgb(0, 122, 255)',
          tabBarInactiveBackgroundColor: backgroundColor,
          tabBarInactiveTintColor: color,
        }}>
        <MainBottomNavigatorStack.Screen
          name="ReactionPage"
          component={ReactionPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="dashboard" color={color} size={size} />
            ),
          }}
        />
        <MainBottomNavigatorStack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="camera" color={color} size={size} />
            ),
          }}
        />
        <MainBottomNavigatorStack.Screen
          name="QRScanScreen"
          component={QRScanScreen}
          options={{
            tabBarLabel: 'QR-Scan',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <MainBottomNavigatorStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: 'setting',
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="setting" color={color} size={size} />
            ),
          }}
        />
      </MainBottomNavigatorStack.Navigator>
    </NavigationContainer>
  );
}
