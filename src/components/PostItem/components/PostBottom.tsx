import React from 'react';

import { Post } from '@domain';

import { Box, Text } from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({ author, text, commentCount }: Props) {
  const commentText = getCommentText(commentCount);

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return 'Nenhum comentário';
  } else if (commentCount === 1) {
    return '1 comentário';
  } else {
    return `${commentCount} comentários`;
  }
}
