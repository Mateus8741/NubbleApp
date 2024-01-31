import { apiAdapter } from '@api';
import { Page } from '@types';

import { postCommentAdapter } from './postCommentAdapter';
import { postCommentApi } from './postCommentApi';
import { PostComment } from './postCommentTypes';

const PER_PAGE = 10;

async function getList(
  post_id: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(post_id, {
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    postCommentPageAPI,
    postCommentAdapter.toPostComment,
  );
}

async function create(post_id: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(post_id, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);

  return response.message;
}

function isAllowToDelete(
  postComment: PostComment,
  userId: number,
  postAuthId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
