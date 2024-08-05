'use client';

import { RandomAnimeResponse } from '@/api/response/RandomAnimeResponse';
import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import theme from '@/theme';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';

/**
 * ランダムアニメ
 */
export const RandomAnime = (randomAnimeData: RandomAnimeResponse) => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

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
        ランダムアニメ紹介
      </Typography>
      <Box sx={{ display: 'flex', gap: '1.6rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box component="a" href={randomAnimeData.data.url} target="_blank" sx={{ display: 'flex' }}>
            <Box
              component="img"
              alt={randomAnimeData.data.title}
              src={randomAnimeData.data.images.jpg.image_url}
              sx={{ width: '6.4rem', height: '8.0rem', objectFit: 'cover' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '6.4rem',
              height: '1.8rem',
            }}
          >
            <Typography
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontSize: '1rem',
                color: Colors.gray900,
              }}
            >
              {randomAnimeData.data.title_japanese}
            </Typography>
            <Box
              component="img"
              alt="fav"
              src="/favorite.svg"
              sx={{
                width: '1.6rem',
                height: '1.6rem',
                filter: !favoriteAnimeList.some((item) => item.mal_id === randomAnimeData.data.mal_id)
                  ? 'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)'
                  : 'none',
              }}
              onClick={() =>
                setFavoriteAnimeList((preState) => {
                  const isDuplicate = preState.some((item) => item.mal_id === randomAnimeData.data.mal_id);

                  if (isDuplicate) {
                    return preState.filter((item) => item.mal_id !== randomAnimeData.data.mal_id);
                  }
                  return [
                    ...preState,
                    {
                      mal_id: randomAnimeData.data.mal_id,
                      title: randomAnimeData.data.title_japanese,
                      url: randomAnimeData.data.url,
                      image_url: randomAnimeData.data.images.jpg.image_url,
                      aired_from: randomAnimeData.data.aired.from,
                    },
                  ];
                })
              }
            />
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: '1.4rem',
            color: Colors.gray900,
          }}
        >
          {randomAnimeData.data.title_japanese}
        </Typography>
      </Box>
    </>
  );
};
