import React, { createContext } from 'react';

import { AuthCredentialsService } from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  removeCredentials: async () => {},
  saveCredentials: async () => {},
});

interface AuthCredentialsProviderProps {
  children: React.ReactNode;
}

export function AuthCredentialsProvider({
  children,
}: AuthCredentialsProviderProps) {
  const value = {
    authCredentials: null,
    isLoading: false,
    removeCredentials: async () => {},
    saveCredentials: async () => {},
  };

  <AuthCredentialsContext.Provider value={value}>
    {children}
  </AuthCredentialsContext.Provider>;
}
