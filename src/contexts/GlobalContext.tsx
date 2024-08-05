'use client';

import { useLocalPersistentState } from '@/hooks/useLocalPersistentState';
import { FavoriteAnime } from '@/types/FavoriteAnime';
import { ReactNode, SetStateAction, createContext, useContext } from 'react';

/** アプリ共通データ管理用Context */
export const GlobalContext = createContext({
  /**
   * お気に入りアニメ一覧
   */
  favoriteAnimeList: [] as FavoriteAnime[],

  /**
   * お気に入りアニメ一覧をセット
   * @param favoriteAnimeList お気に入りアニメ一覧
   */
  setFavoriteAnimeList: (favoriteAnimeList: SetStateAction<FavoriteAnime[]>) => {
    // dummy
  },
});

/**
 * アプリ共通データ管理用ContextのProvider
 */
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(GlobalContext);

  const [favoriteAnimeList, setFavoriteAnimeList] = useLocalPersistentState<FavoriteAnime[]>(
    context.favoriteAnimeList,
    'favoriteAnimeList'
  );

  const value = {
    favoriteAnimeList,
    setFavoriteAnimeList,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
