import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box, BoxProps } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import { ScreenHeader, ScrollViewContainer, ViewContainer } from './components';

export interface ScreenProps extends BoxProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();

  const { colors } = useAppTheme();

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
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
            style,
          ]}
          {...boxProps}>
          <ScreenHeader title={title} canGoBack={canGoBack} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
