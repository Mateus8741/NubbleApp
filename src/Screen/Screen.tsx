import { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Box } from '../components/Box/Box'
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
            <Box mb="s24" flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text ml="s8" preset="paragraphSmall" semiBold>
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
