import { useNavigation } from '@react-navigation/native'
import { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Box, TouchableOpacityBox } from '../components/Box/Box'
import { Text } from '../components/Text/Text'
import { Icon } from '../components/icon/Icon'
import { useAppSafeArea } from '../hooks/useAppSafeArea'
import { useAppTheme } from '../hooks/useAppTheme'
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainers'

interface ScreenProps {
  children: ReactNode
  canGoBack?: boolean
  scrollable?: boolean
}

export function Screen({
  children,
  canGoBack,
  scrollable = false,
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea()

  const { colors } = useAppTheme()

  const { goBack } = useNavigation()

  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          px="s24"
          pb="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}
        >
          {canGoBack && (
            <TouchableOpacityBox mb="s24" flexDirection="row" onPress={goBack}>
              <Icon name="arrowLeft" color="primary" />
              <Text ml="s8" preset="paragraphSmall" semiBold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
