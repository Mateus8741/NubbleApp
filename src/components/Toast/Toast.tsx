import React from 'react';
import { Dimensions } from 'react-native';

import { $shadowProps } from '@theme';

import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

export function Toast() {
  return (
    <Box top={100} {...$boxStyles}>
      <Icon color="success" name="checkRound" />
      <Text ml="s16" preset="paragraphMedium" bold style={{ flexShrink: 1 }}>
        Comentário deletado
      </Text>
    </Box>
  );
}

const $boxStyles: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: { ...$shadowProps },
};
