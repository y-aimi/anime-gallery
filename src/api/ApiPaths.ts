export const ApiPaths = {
  /** トップアニメ取得API */
  topAnime: 'https://api.jikan.moe/v4/top/anime',

  /** シーズンアニメ取得API */
  SeasonAnime: 'https://api.jikan.moe/v4/seasons/2024/summer',

  /** 名前検索API */
  SearchName: 'https://api.jikan.moe/v4/anime?q=',
} as const;
