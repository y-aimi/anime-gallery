'use client';

import { TopAnimeResponse } from '@/api/response/TopAnimeResponse';
import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import theme from '@/theme';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';

/**
 * トップアニメ
 */
export const TopAnime = (topAnimeData: TopAnimeResponse) => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  return (
    <>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          margin: '1.6rem 0 0.2rem 0',
          [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
          },
        }}
      >
        人気アニメランキング
      </Typography>

      <Box sx={{ display: 'flex', gap: '1.6rem', overflowX: 'auto' }}>
        {topAnimeData?.data?.map((anime) => (
          <Box key={anime.mal_id} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box component="a" href={anime.url} target="_blank" sx={{ display: 'flex' }}>
              <Box
                component="img"
                alt={anime.title}
                src={anime.images.jpg.image_url}
                sx={{ width: '11.2rem', height: '12.8rem', objectFit: 'cover' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: '0.1rem',
                backgroundColor: Colors.white,
                width: '11.2rem',
                height: '2.4rem',
              }}
            >
              <Typography
                sx={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  fontSize: '1rem',
                  paddingLeft: '0.1rem',
                  color: Colors.gray900,
                }}
              >
                {anime.title_japanese}
              </Typography>
              <Box
                component="img"
                alt="fav"
                src="/icons/favorite.svg"
                sx={{
                  width: '2.4rem',
                  height: '2.4rem',
                  cursor: 'pointer',
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
    </>
  );
};
