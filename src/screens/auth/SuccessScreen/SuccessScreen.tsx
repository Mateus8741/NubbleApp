import React from 'react'
import { Screen } from '../../../Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { Text } from '../../../components/Text/Text'
import { Icon } from '../../../components/icon/Icon'

export function SuccessScreen() {
  function goBackToBegin() {}

  return (
    <Screen>
      <Icon name="check" />

      <Text preset="headingLarge" mt="s24">
        Sua conta foi criada com sucesso!
      </Text>

      <Text preset="paragraphLarge" mt="s16">
        Agora é só fazer login na nossa plataforma
      </Text>

      <Button title="Voltar ao início" mt="s40" onPress={goBackToBegin} />
    </Screen>
  )
}
