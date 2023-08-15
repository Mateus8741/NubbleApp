import { ToastService } from '@services';

import { useToastContext } from './usetToastContext';

export function useToast(): ToastService {
  return useToastContext();
}
