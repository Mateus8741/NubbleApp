import { Screen } from '../../../Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'

export function LoginScreen() {
  return (
    <Screen>
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

      <PasswordInput
        boxProps={{ mb: 's10' }}
        label="Senha"
        placeholder="Digite sua Senha"
      />

      <Text color="primary" preset="paragraphSmall">
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button mt="s12" preset="outline" title="Criar uma conta" />
    </Screen>
  )
}
