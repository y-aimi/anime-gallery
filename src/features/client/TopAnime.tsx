'use client';

import { TopAnimeResponse } from '@/api/response/TopAnimeResponse';
import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import { FetchTopAnime } from '@/features/FetchAnime';
import theme from '@/theme';
import { Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext, useEffect, useState } from 'react';

/**
 * トップアニメ
 */
export const TopAnime = () => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  // トップアニメ取得データ
  const [topAnime, setTopAnime] = useState<TopAnimeResponse>();
  // ローディング判定：トップアニメ取得データ
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 必要データ取得フック
  useEffect(() => {
    const fetch = async () => {
      const res = await FetchTopAnime();
      setTopAnime(res);
      setIsLoading(false);
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
        人気アニメランキング
      </Typography>
      {isLoading ? (
        <Box sx={{ display: 'flex', gap: '1.6rem' }}>
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '6.4rem', height: '9.6rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '6.4rem', height: '9.6rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '6.4rem', height: '9.6rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '6.4rem', height: '9.6rem' }} />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: '1.6rem', overflowX: 'auto' }}>
          {topAnime?.data?.map((anime) => (
            <Box key={anime.mal_id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box component="a" href={anime.url} target="_blank" sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  alt={anime.title}
                  src={anime.images.jpg.image_url}
                  sx={{ width: '6.4rem', height: '8.0rem', objectFit: 'cover' }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingRight: '0.1rem',
                  backgroundColor: Colors.white,
                  width: '6.4rem',
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
    </>
  );
};
