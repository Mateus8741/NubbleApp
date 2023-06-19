import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../routes/Routes'

export function useResetNavigationSuccess() {
  const { reset } = useNavigation()

  function resetNavigation(params: RootStackParamList['SuccessScreen']) {
    reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    })
  }

  return { reset: resetNavigation }
}
