import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components'
import { zodResolver } from '@hookform/resolvers/zod'
import { useResetNavigationSuccess } from '@hooks'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes'
import { useForm } from 'react-hook-form'
import { SignUpSchema, signUpSchema } from './signUpScheema'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

export function SignUpScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const { reset } = useResetNavigationSuccess()

  function submitForm(formValues: SignUpSchema) {
    console.log(formValues)
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

      <FormTextInput
        control={control}
        name="username"
        boxProps={{ mb: 's10' }}
        label="Seu username"
        placeholder="@"
      />

      <FormTextInput
        control={control}
        name="fullName"
        boxProps={{ mb: 's10' }}
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />

      <FormTextInput
        control={control}
        name="email"
        boxProps={{ mb: 's10' }}
        label="E-mail"
        placeholder="Digite seu E-mail"
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{ mb: 's48' }}
        label="Senha"
        placeholder="Digite sua Senha"
      />

      <Button title="Criar uma conta" onPress={handleSubmit(submitForm)} />
    </Screen>
  )
}
