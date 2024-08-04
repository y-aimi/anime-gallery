'use client';

import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import theme from '@/theme';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';

/**
 * マイページ
 */
export const MyPage = () => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  return (
    <>
      <Typography
        sx={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          margin: '1.4rem 0 1.8rem 0',
          [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
          },
        }}
      >
        お気に入りアニメ一覧
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center', margin: '1.6rem 0' }}
        >
          {favoriteAnimeList?.map((anime) => (
            <Box key={anime.mal_id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box component="a" href={anime.url} target="_blank" sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  alt={anime.title}
                  src={anime.image_url}
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
                          title: anime.title,
                          url: anime.url,
                          image_url: anime.image_url,
                        },
                      ];
                    })
                  }
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
