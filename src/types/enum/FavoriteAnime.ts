/**
 * お気に入りアニメ
 */
export type FavoriteAnime = {
  mal_id: number;
  title: string;
  url: string;
  image_url: string;
  aired_from: string | null;
};
