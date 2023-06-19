import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Screen } from '../../../Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    })
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

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  )
}
