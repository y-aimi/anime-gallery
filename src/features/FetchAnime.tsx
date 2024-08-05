'use server';

import { ApiPaths } from '@/api/ApiPaths';
import { RandomAnimeResponse } from '@/api/response/RandomAnimeResponse';
import { SearchNameResponse } from '@/api/response/SearchNameResponse';
import { SearchSeasonAnimeResponse } from '@/api/response/SearchSeasonAnimeResponse';
import { SeasonAnimeResponse } from '@/api/response/SeasonAnimeResponse';
import { SeasonsResponse } from '@/api/response/SeasonsResponse';
import { TopAnimeResponse } from '@/api/response/TopAnimeResponse';

/**
 * ランダムアニメ取得処理
 *
 * @returns RandomAnimeResponse
 */
export const FetchRandomAnime = async () => {
  const res = await fetch(ApiPaths.randomAnime, { cache: 'no-store' });
  const resJson: RandomAnimeResponse = await res.json();

  return resJson;
};

/**
 * トップアニメ取得処理
 *
 * @returns TopAnimeResponse
 */
export const FetchTopAnime = async () => {
  const res = await fetch(ApiPaths.topAnime, { cache: 'no-store' });
  const resJson: TopAnimeResponse = await res.json();

  return resJson;
};

/**
 * シーズンアニメ取得処理
 *
 * @returns SeasonAnimeResponse
 */
export const FetchSeasonAnime = async () => {
  const res = await fetch(ApiPaths.SeasonAnime, { cache: 'no-store' });
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

/**
 * シーズン取得処理
 *
 * @returns SeasonsResponse
 */
export const FetchSeasons = async () => {
  const res = await fetch(ApiPaths.Seasons);
  const resJson: SeasonsResponse = await res.json();

  return resJson;
};

/**
 * シーズン毎アニメ取得処理
 *
 * @returns SearchSeasonAnimeResponse
 */
export const FetchSearchSeasonsAnime = async (year: string, season: string) => {
  const res = await fetch(ApiPaths.SearchSeasonsAnime + year + '/' + season);
  const resJson: SearchSeasonAnimeResponse = await res.json();

  return resJson;
};
