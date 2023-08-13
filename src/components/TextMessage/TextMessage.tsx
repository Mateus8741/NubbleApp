/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from 'react-native';

import { $TextInputStyle, Box, Text } from '@components';
import { useAppTheme } from '@hooks';

interface TextInputProps extends RNTextInputProps {
  onPressSend: () => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const {colors} = useAppTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        bg="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12"
        >
        <RNTextInput
          ref={inputRef}
          value={value}
          style={[$TextInputStyle, {color: colors.gray1}]}
          placeholderTextColor={colors.gray2}
          {...rnTextInputProps}
        />
        <Pressable onPress={onPressSend} disabled={sendIsDisabled} >
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold >
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
