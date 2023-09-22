import { QueryKeys } from '@infra';
import { useQuery } from '@tanstack/react-query';
import { authService } from '../authService';
import { useDebounce } from '../hooks';

 interface Param {
   username: string;
 }

 export function useAuthIsUsernameAvailable({username}: Param) {
   const debouncedUsername = useDebounce(username, 1500);

   const {data, isFetching} = useQuery({
     queryKey: [QueryKeys.IsUserNameAvailable, debouncedUsername],
     queryFn: () => authService.isUserNameAvailable(debouncedUsername),
     retry: false,
     staleTime: 20000,
   });

   return {
     isAvailable: !!data,
     isFetching,
   };
 }