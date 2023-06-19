import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Screen } from '../../../Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()

  function submitForm() {
    reset({
      title: 'Redefinição enviada!',
      description:
        'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    })
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>

      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput
        boxProps={{ mb: 's40' }}
        label="E-mail"
        placeholder="Digite seu E-mail"
        errorMessage="erro"
      />

      <Button title="Voltar ao início" preset="primary" onPress={submitForm} />
    </Screen>
  )
}
