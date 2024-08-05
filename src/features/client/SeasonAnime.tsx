'use client';

import { SeasonAnimeResponse } from '@/api/response/SeasonAnimeResponse';
import { Colors } from '@/common/Colors';
import { Const } from '@/common/Const';
import { GlobalContext } from '@/contexts/GlobalContext';
import { FetchSeasonAnime } from '@/features/FetchAnime';
import theme from '@/theme';
import { Button, Skeleton, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useContext, useEffect, useMemo, useState } from 'react';

/**
 * シーズンアニメ
 */
export const SeasonAnime = () => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  // シーズンアニメ取得データ
  const [seasonAnime, setSeasonAnime] = useState<SeasonAnimeResponse>();
  // ローディング判定：シーズンアニメ取得データ
  const [isLoadingSeasonAnime, setIsLoadingSeasonAnime] = useState<boolean>(true);
  // 表示コンテンツ数（シーズンアニメ）
  const [dispSeasonAnimeCount, setDispSeasonAnimeCount] = useState<number>(Const.SEASON_ANIME_DISP_CHUNK);

  // コンテンツ数（シーズンアニメ）
  const seasonAnimeTotalCount: number = useMemo(() => {
    if (seasonAnime?.data === undefined) {
      return 0;
    }
    return seasonAnime.data.length;
  }, [seasonAnime]);

  // 必要データ取得フック
  useEffect(() => {
    const fetch = async () => {
      const res = await FetchSeasonAnime();
      setSeasonAnime(res);
      setIsLoadingSeasonAnime(false);
    };

    fetch();
  }, []);

  return (
    <>
      <Typography
        sx={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          margin: '1.4rem 0 0.8rem 0',
          [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
          },
        }}
      >
        今シーズンアニメ一覧
      </Typography>
      {isLoadingSeasonAnime ? (
        <Box sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '8.8rem', height: '12.8rem' }} />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {seasonAnime?.data?.slice(0, dispSeasonAnimeCount).map((anime) => (
            <Box key={anime.mal_id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box component="a" href={anime.url} target="_blank" sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  alt={anime.title}
                  src={anime.images.jpg.image_url}
                  sx={{ width: '8.8rem', height: '11rem', objectFit: 'cover' }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingRight: '0.1rem',
                  backgroundColor: Colors.white,
                  width: '88px',
                  height: '1.8rem',
                }}
              >
                <Box
                  component="img"
                  alt="fav"
                  src="/favorite.svg"
                  sx={{
                    width: '1.6rem',
                    height: '1.6rem',
                    filter: !favoriteAnimeList.some((item) => item.mal_id === anime.mal_id)
                      ? 'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)'
                      : 'none',
                  }}
                  onClick={() =>
                    setFavoriteAnimeList((preState) => {
                      const isDuplicate = preState.some((item) => item.mal_id === anime.mal_id);

                      if (isDuplicate) {
                        return preState.filter((item) => item.mal_id !== anime.mal_id);
                      }
                      return [
                        ...preState,
                        {
                          mal_id: anime.mal_id,
                          title: anime.title_japanese,
                          url: anime.url,
                          image_url: anime.images.jpg.image_url,
                          aired_from: anime.aired.from,
                        },
                      ];
                    })
                  }
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {dispSeasonAnimeCount < seasonAnimeTotalCount && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0.7rem 0 1rem 0',
          }}
        >
          <NextContentsButton
            onClick={() => setDispSeasonAnimeCount((preState) => preState + Const.SEASON_ANIME_DISP_CHUNK)}
          >
            <Typography sx={{ fontSize: '1.4rem', color: Colors.gray50 }}>続きを見る</Typography>
            <Box
              component="img"
              alt="next"
              src="/next_contents.svg"
              sx={{
                width: '1rem',
                height: '0.8rem',
                marginTop: '0.1rem',
              }}
            />
          </NextContentsButton>
        </Box>
      )}
    </>
  );
};

// -----------------------------------------------------------------------------
// styles
// -----------------------------------------------------------------------------

const NextContentsButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.gray700,
  width: '9.9rem',
  gap: '0.3rem',
  padding: '0.2rem 0',
  borderRadius: '0.3rem',
  [theme.breakpoints.up('xs')]: {
    ':focus': {
      backgroundColor: Colors.gray700,
    },
  },
});
