import React from 'react';

import { usePostCommentList } from 'src/domain/Post/PostComment/useCases/usePostCommentList';

import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const { list } = usePostCommentList(postId);

  return (
    <Screen canGoBack title="Cometários">
      <Box>
        <Text preset="headingMedium">PostCommentScreen</Text>
      </Box>
    </Screen>
  );
}
