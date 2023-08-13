import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Post, usePostList } from '@domain';
import { useScrollToTop } from '@react-navigation/native';

import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {
    errorState,
    loading,
    refresh,
    list: postList,
    fetchNextPage,
  } = usePostList();

  const flastListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flastListRef);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flastListRef}
        data={postList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty
            refatch={refresh}
            loading={loading}
            errorState={errorState}
          />
        }
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
