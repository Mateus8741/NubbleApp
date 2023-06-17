import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen'
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen'
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen'

export type RootStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: undefined
}

export function Router() {
  const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
      >
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SignUpScreen" component={SignUpScreen} />
        <Screen name="SuccessScreen" component={SuccessScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
