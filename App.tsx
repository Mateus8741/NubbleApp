/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView } from 'react-native'

import { ThemeProvider } from '@shopify/restyle'
import { Text } from './src/components/Text'
import { theme } from './src/theme/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text italic preset="headingLarge" color="error">
          Coffstack
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  )
}
