/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, View } from 'react-native'

import { ThemeProvider } from '@shopify/restyle'
import { Button } from './src/components/Button/Button'
import { Text } from './src/components/Text/Text'
import { TextInput } from './src/components/TextInput/TextInput'
import { Icon } from './src/components/icon/Icon'
import { theme } from './src/theme/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ padding: 24 }}>
          <Text mb="s8" preset="headingLarge">
            Olá
          </Text>
          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            boxProps={{ mb: 's20' }}
            label="E-mail"
            placeholder="Digite seu E-mail"
            errorMessage="erro"
          />

          <TextInput
            boxProps={{ mb: 's10' }}
            label="Senha"
            placeholder="Digite sua Senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
          />

          <Text color="primary" preset="paragraphSmall">
            Esqueci minha senha
          </Text>

          <Button mt="s48" title="Entrar" />
          <Button mt="s12" preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}
