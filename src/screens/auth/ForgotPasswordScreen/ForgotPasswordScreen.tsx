import { Button, FormTextInput, Screen, Text } from '@components'
import { zodResolver } from '@hookform/resolvers/zod'
import { useResetNavigationSuccess } from '@hooks'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes'
import { useForm } from 'react-hook-form'
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordScheema'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()

  const { control, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  })

  function submitForm(formValues: ForgotPasswordSchema) {
    console.log(formValues)

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

      <FormTextInput
        control={control}
        name="email"
        boxProps={{ mb: 's40' }}
        label="E-mail"
        placeholder="Digite seu E-mail"
      />

      <Button
        title="Recuperar senha"
        preset="primary"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  )
}
