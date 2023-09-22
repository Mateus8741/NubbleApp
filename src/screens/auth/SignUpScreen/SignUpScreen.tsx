import React from 'react';

import { useAuthIsUsernameAvailable, useAuthSignUp } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import { SignUpSchema, signUpSchema } from './signUpScheema';

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  const {signUp, isLoading} = useAuthSignUp({onSuccess: () => {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }});

  const { control, handleSubmit, formState, watch } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { reset } = useResetNavigationSuccess();

  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }

  const username = watch('username');
  const usernameQuery = useAuthIsUsernameAvailable({username});

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        boxProps={{ mb: 's10' }}
        label="Seu username"
        placeholder="@"
        RightComponent={
          usernameQuery.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        boxProps={{ mb: 's10' }}
        label="Nome"
        placeholder="Digite seu nome"
      />
      
      <FormTextInput
        control={control}
        name="lastName"
        boxProps={{ mb: 's10' }}
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
      />

      <FormTextInput
        control={control}
        name="email"
        boxProps={{ mb: 's10' }}
        label="E-mail"
        placeholder="Digite seu E-mail"
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{ mb: 's48' }}
        label="Senha"
        placeholder="Digite sua Senha"
      />

      <Button title="Criar uma conta" loading={isLoading} onPress={handleSubmit(submitForm)} />
    </Screen>
  );
}
