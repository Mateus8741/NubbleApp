import { Icon, TextInput, TextInputProps } from '@components'
import React, { useState } from 'react'

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput({ ...textInputProps }: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev)
  }

  return (
    <TextInput
      boxProps={{ mb: 's10' }}
      label="E-mail"
      placeholder="Digite sua Senha"
      secureTextEntry={isSecureTextEntry}
      {...textInputProps}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toggleSecureTextEntry}
        />
      }
    />
  )
}
