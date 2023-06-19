/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
import { RootStackParamList } from './Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
