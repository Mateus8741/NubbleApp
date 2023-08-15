import { useContext } from 'react';

import { ToastContext, ToastService } from '@services';

export function useToastContext(): ToastService {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToastContext must be used within an ToastProvider');
  }

  return context;
}
