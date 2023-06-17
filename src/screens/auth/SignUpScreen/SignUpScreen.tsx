import React from 'react'
import { Screen } from '../../../Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'

export function SignUpScreen() {
  // eslint-disable-next-line no-unused-vars
  function submitForm() {
    // TODO: implement
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        boxProps={{ mb: 's10' }}
        label="Seu username"
        placeholder="@"
      />

      <TextInput
        boxProps={{ mb: 's10' }}
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />

      <TextInput
        boxProps={{ mb: 's10' }}
        label="E-mail"
        placeholder="Digite seu E-mail"
      />

      <PasswordInput
        boxProps={{ mb: 's48' }}
        label="Senha"
        placeholder="Digite sua Senha"
      />

      <Button title="Criar uma conta" />
    </Screen>
  )
}
