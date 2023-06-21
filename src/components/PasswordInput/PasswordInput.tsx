import React, { useState } from 'react'
import { Icon } from '../Icon/Icon'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

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
