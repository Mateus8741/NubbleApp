/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, View } from 'react-native'

import { ThemeProvider } from '@shopify/restyle'
import { Button } from './src/components/Button'
import { Text } from './src/components/Text'
import { theme } from './src/theme/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Primary" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />

          <Button
            disabled
            preset="outline"
            title="Loading"
            marginBottom="s12"
          />
          <Button loading preset="outline" title="Loading" marginBottom="s12" />
          <Button loading preset="primary" title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}
