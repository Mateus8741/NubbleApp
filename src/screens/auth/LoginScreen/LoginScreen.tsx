import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Controller, useForm } from 'react-hook-form'
import { Screen } from '../../../Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

type LoginFormType = {
  email: string
  password: string
}

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: LoginFormType) {
    console.log(data)
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen')
  }

  function navigateToForgotoPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen')
  }

  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState }) => (
          <TextInput
            boxProps={{ mb: 's20' }}
            label="E-mail"
            placeholder="Digite seu E-mail"
            value={value}
            onChangeText={onChange}
            // error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value }, fieldState }) => (
          <PasswordInput
            boxProps={{ mb: 's10' }}
            label="Senha"
            placeholder="Digite sua Senha"
            value={value}
            onChangeText={onChange}
            // error={fieldState.error?.message}
          />
        )}
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        onPress={navigateToForgotoPasswordScreen}
      >
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" onPress={handleSubmit(onSubmit)} />
      <Button
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  )
}
