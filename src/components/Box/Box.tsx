/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';

import { Theme } from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & SpacingProps<Theme> & SpacingShorthandProps<Theme> & TouchableOpacityProps;
export const TouchableOpacityBox = createRestyleComponent<
TouchableOpacityBoxProps,
  Theme
>([backgroundColor, spacing, layout, border, spacingShorthand], TouchableOpacity);
