import React from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';

import { TextMessage } from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({ postId }: Props) {
  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
    },
  });

  const [message, setMessage] = React.useState('');

  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={createComment}
      placeholder="Escreva um comentário..."
    />
  );
}
