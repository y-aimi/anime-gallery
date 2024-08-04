'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { AppLocalStorage } from '@/common/AppLocalStorage';

/**
 * 永続データのキー名
 *  - favoriteAnimeList お気に入りアニメ一覧
 */
export type PersistentDataKey = 'favoriteAnimeList';

/**
 * 永続データ管理用Hook
 *
 * @param defaultValue stateの初期値
 * @param key 永続データキー
 * @returns [永続化state,永続化state更新関数]
 */
export const useLocalPersistentState = <T>(
  defaultValue: T,
  key: PersistentDataKey
): [state: T, setState: Dispatch<SetStateAction<T>>] => {
  // 初期値をLocalStorageから取得
  const [state, setState] = useState<T>(() => {
    return AppLocalStorage.getPersistentData(key) ?? defaultValue;
  });

  // LocalStorage保存処理
  useEffect(() => {
    AppLocalStorage.setPersistentData(key, state);
  }, [key, state]);

  return [state, setState];
};
