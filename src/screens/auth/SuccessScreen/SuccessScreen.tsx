import { Button, Icon, Screen, Text } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({ navigation, route }: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack()
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />

      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>

      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>

      <Button title="Voltar ao início" mt="s40" onPress={goBackToBegin} />
    </Screen>
  )
}
