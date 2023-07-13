import React from 'react';

import { SimpleLogo } from '@brand';

import { Box, BoxProps, Icon } from '@components';
import { useAppSafeArea } from '@hooks';

export function HomeHeader() {
  const { top } = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      {/* <Box backgroundColor="carrotSecondary" width={70} height={16} /> */}
      <SimpleLogo width={70} />

      <Box flexDirection="row">
        <Box mr="s24">
          <Icon name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
