import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  MyProfileScreen: undefined;
  FavoriteScreen: undefined;
};

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabBottomTabParamList>();

function renderTabBar(props: BottomTabBarProps) {
  return <AppTabBar {...props} />;
}

export function AppTabNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="NewPostScreen" component={NewPostScreen} />
      <Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Navigator>
  );
}
