'use client';

import { PersistentDataKey } from '@/hooks/useLocalPersistentState';

/**
 * ローカルストレージ管理クラス
 * ※クラス名とimport名を同一にするためlintオプションでnamespaceの使用を許可する
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AppLocalStorage {
  /**
   * ローカルストレージに保存するデータのキー名
   *  - PersistentData：永続データ
   */
  const StorageKey = {
    PersistentData: 'persistent-data',
  } as const;

  type StorageKey = (typeof StorageKey)[keyof typeof StorageKey];

  /**
   * 全永続データをローカルストレージから取得
   *
   * @returns 全永続データ
   */
  const getAllPersistentData = (): { [key in PersistentDataKey]?: unknown } => {
    const str = localStorage.getItem(StorageKey.PersistentData);
    return str ? JSON.parse(str) : {};
  };

  /**
   * 指定したキーに対応する永続データをローカルストレージから取得
   *
   * @param key 永続データキー
   * @returns 永続データ
   */
  export const getPersistentData = <T, _>(key: PersistentDataKey): T | undefined => {
    return getAllPersistentData()[key] as T;
  };

  /**
   * 指定したキーの永続データをローカルストレージへ保存
   *
   * @param key 永続データキー
   */
  export const setPersistentData = <T, _>(key: PersistentDataKey, persistentData: T) => {
    const current = getAllPersistentData();
    localStorage.setItem(StorageKey.PersistentData, JSON.stringify({ ...current, [key]: persistentData }));
  };
}
