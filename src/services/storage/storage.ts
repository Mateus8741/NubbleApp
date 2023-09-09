import { MMKVStorage } from './implementation/MMKVStorage';

export interface Storage {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, vlaue: T) => Promise<void>;
  removeItem: (key: string) => void;
}

export const storage: Storage = MMKVStorage;
