/**
 * 季節一覧
 */
export const Season = {
  winter: '冬',
  spring: '春',
  summer: '夏',
  fall: '秋',
} as const;

/**
 * 季節一覧のkey
 */
export type SeasonKey = keyof typeof Season;

/**
 * 季節一覧のvalue
 */
export type SeasonValue = (typeof Season)[keyof typeof Season];
