export const ApiPaths = {
  /** ランダムアニメ取得API */
  randomAnime: 'https://api.jikan.moe/v4/random/anime',

  /** トップアニメ取得API */
  topAnime: 'https://api.jikan.moe/v4/top/anime',

  /** シーズンアニメ取得API */
  SeasonAnime: 'https://api.jikan.moe/v4/seasons/now',

  /** 名前検索API */
  SearchName: 'https://api.jikan.moe/v4/anime?q=',

  /** シーズン取得 */
  Seasons: 'https://api.jikan.moe/v4/seasons',

  /** シーズン毎アニメ取得API */
  SearchSeasonsAnime: 'https://api.jikan.moe/v4/seasons/',
} as const;
