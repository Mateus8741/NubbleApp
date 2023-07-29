import React from 'react';

import { ActivityIndicator, Box, Button, Text } from '@components';

interface Props {
  loading: boolean;
  errorState: unknown;
  refatch?: () => void;
}

export function HomeEmpty({ loading, errorState, refatch }: Props) {
  let component = (
    <Text preset="paragraphMedium">Não há publicaões no seu feed 😢</Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (errorState) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          Não foi possivel carregar o feed 😢
        </Text>
        <Button title="Recarregar" preset="outline" onPress={refatch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
