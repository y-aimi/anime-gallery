'use client';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { AppLocalStorage } from '@/util/AppLocalStorage';

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
  const [state, setState] = useState<T>(defaultValue);

  // 初期化完了判定フラグ（true：初期化完了）
  const isInitialized = useRef(false);

  // 永続化処理
  useEffect(() => {
    if (isInitialized.current) {
      AppLocalStorage.setPersistentData(key, state);
    } else {
      setState(AppLocalStorage.getPersistentData(key) ?? defaultValue);
      isInitialized.current = true;
    }
  }, [state]);

  return [state, setState];
};
