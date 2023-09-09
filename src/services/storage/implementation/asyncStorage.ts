import AsyncStorage from '@react-native-async-storage/async-storage';

import { Storage } from '../storage';

export const asyncStorage: Storage = {
  getItem: async key => {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
  },
};
