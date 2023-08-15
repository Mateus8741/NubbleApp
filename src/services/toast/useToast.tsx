import React, { createContext, useContext, useState } from 'react';

interface Toast {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hiddenToast: () => void;
}

const ToastContext = createContext<ToastService>({} as ToastService);

export function ToastProvider({ children }: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hiddenToast() {
    setToast(null);
  }

  const value = {
    toast,
    showToast,
    hiddenToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const { toast, showToast, hiddenToast } = useContext(ToastContext);

  return {
    toast,
    showToast,
    hiddenToast,
  };
}
