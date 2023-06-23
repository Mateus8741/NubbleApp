import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, SettingsScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
    </Navigator>
  );
}
