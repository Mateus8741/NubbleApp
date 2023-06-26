import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>

      <Button
        title="Settings"
        mt="s40"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
