'use server';

import { ApiPaths } from '@/api/ApiPaths';
import { SearchNameResponse } from '@/api/response/SearchNameResponse';
import { SeasonAnimeResponse } from '@/api/response/SeasonAnimeResponse';
import { TopAnimeResponse } from '@/api/response/TopAnimeResponse';

/**
 * トップアニメ取得処理
 *
 * @returns TopAnimeResponse
 */
export const FetchTopAnime = async () => {
  const res = await fetch(ApiPaths.topAnime);
  const resJson: TopAnimeResponse = await res.json();

  return resJson;
};

/**
 * シーズンアニメ取得処理
 *
 * @returns SeasonAnimeResponse
 */
export const FetchSeasonAnime = async () => {
  const res = await fetch(ApiPaths.SeasonAnime);
  const resJson: SeasonAnimeResponse = await res.json();

  return resJson;
};

/**
 * 名前検索処理
 *
 * @returns SearchNameResponse
 */
export const FetchSearchNameAnime = async (name: string) => {
  const res = await fetch(ApiPaths.SearchName + name);
  const resJson: SearchNameResponse = await res.json();

  return resJson;
};
