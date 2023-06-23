/* eslint-disable prettier/prettier */
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IconProps } from '@components';
import {
    ForgotPasswordScreen,
    LoginScreen,
    SignUpScreen,
    SuccessScreen,
} from '@screens';

export type AuthStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SuccessScreen: {
      title: string;
      description: string;
      icon: Pick<IconProps, 'name' | 'color'>;
    };
    ForgotPasswordScreen: undefined;
  };

export function AuthStack() {
  const { Navigator, Screen } =
    createNativeStackNavigator<AuthStackParamList>();

  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
      <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    </Navigator>
  );
}
