import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';

import { Box, Screen, TextMessage } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom, PostCommentItem } from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const { list, fetchNextPage, hasNextPage } = usePostCommentList(postId);

  const [message, setMessage] = React.useState('');

  const { bottom } = useAppSafeArea();

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} canGoBack title="Cometários">
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={
            <PostCommentBottom
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          }
          showsVerticalScrollIndicator={false}
        />
        <TextMessage
          value={message}
          onChangeText={setMessage}
          onPressSend={() => {}}
          placeholder="Escreva um comentário..."
        />
      </Box>
    </Screen>
  );
}
