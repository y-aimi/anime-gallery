import { SeasonKey } from '@/types/enum/Season';

/**
 * シーズン取得APIレスポンス
 */
export type SeasonsResponse = {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
  data: {
    year: number;
    seasons: SeasonKey[];
  }[];
};
