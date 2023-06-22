import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';

interface ScreenContainersProps {
  children: ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  children,
  backgroundColor,
}: ScreenContainersProps) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{
        backgroundColor,
        flex: 1,
      }}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({
  children,
  backgroundColor,
}: ScreenContainersProps) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
      }}>
      {children}
    </View>
  );
}
