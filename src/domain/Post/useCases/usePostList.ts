import { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState<Error | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setErrorState(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (error) {
      console.log(error);
      setErrorState(error as unknown as Error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    errorState,
    postList,
    refatch: fetchData,
  };
}
