import { asyncStorage } from './implementation/asyncStorage';

export interface Storage {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, vlaue: T) => Promise<void>;
  removeItem: (key: string) => void;
}

export const storage: Storage = asyncStorage;
