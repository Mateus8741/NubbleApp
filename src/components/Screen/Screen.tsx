import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainers';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack,
  scrollable = false,
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();

  const { colors } = useAppTheme();

  const { goBack } = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          px="s24"
          pb="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
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
  );
}
