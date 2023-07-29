import { PageAPI, api } from '@api';

import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;

  // let response = await fetch('http://localhost:3333/user/post', {
  //   method: 'GET',
  //   headers: {
  //     Authorization:
  //       'Bearer Mg.R5wy9_TgoQXaBCRrhnJhuOKaDZhvFqFnhSrnI0xYsOMHJfLC6lj45lCaC-7d',
  //   },
  // });

  // let data: PageAPI<PostAPI> = await response.json();
  // console.log('FETCH DATA:', data);
  // return data;

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  // return postListMock;
}

export const postApi = {
  getList,
};
