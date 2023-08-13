import React from 'react';

import { Post } from '@domain';

import { Box } from '@components';

import { PostActions } from './components/PostActions';
import { PostBottom } from './components/PostBottom';
import { PostHeader } from './components/PostHeader';
import { PostImage } from './components/PostImage';

interface Props {
  post: Post;
}

export function PostItem({ post }: Props) {
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        id={post.id}
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
      />
    </Box>
  );
}
