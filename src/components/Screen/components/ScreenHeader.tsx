import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';

import { ScreenProps } from '../Screen';

const ICON_SIZE = 20;

type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'title' | 'HeaderComponent'>;

export function ScreenHeader({ title, canGoBack, HeaderComponent }: Props) {
  const { goBack } = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          mr='s10'
          alignItems="center"
          onPress={goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="carrotSecondary" width={ICON_SIZE} />}
    </Box>
  );
}
