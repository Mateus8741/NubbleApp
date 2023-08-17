import { MutationOptions, QueryKeys } from '@infra';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCommentService } from '../postCommentService';
import { PostComment } from '../postCommentTypes';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const QueryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation<
    PostComment,
    unknown,
    { message: string }
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      QueryClient.invalidateQueries([QueryKeys.PostList, postId]);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },

    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao criar comentário');
      }
    },
  });

  async function createComment(message: string) {
    mutate({ message });
  }

  return {
    createComment,
    isLoading,
    isError,
  };
}
