import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Screen } from '../../../Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { FormTextInput } from '../../../components/Form/FormTextInput'
import { Text } from '../../../components/Text/Text'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

type SignUpFormType = {
  username: string
  fullname: string
  email: string
  password: string
}

export function SignUpScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit } = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
  })

  const { reset } = useResetNavigationSuccess()

  function submitForm(formValues: SignUpFormType) {
    console.log(formValues)
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // })
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        rules={{ required: true }}
        boxProps={{ mb: 's10' }}
        label="Seu username"
        placeholder="@"
      />

      <FormTextInput
        control={control}
        name="fullname"
        rules={{ required: true }}
        boxProps={{ mb: 's10' }}
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />

      <FormTextInput
        control={control}
        name="email"
        rules={{ required: true }}
        boxProps={{ mb: 's10' }}
        label="E-mail"
        placeholder="Digite seu E-mail"
      />

      <FormTextInput
        control={control}
        name="password"
        rules={{ required: true }}
        boxProps={{ mb: 's48' }}
        label="Senha"
        placeholder="Digite sua Senha"
      />

      <Button title="Criar uma conta" onPress={handleSubmit(submitForm)} />
    </Screen>
  )
}
