'use client';

import { SeasonAnimeResponse } from '@/api/response/SeasonAnimeResponse';
import { Colors } from '@/common/Colors';
import { Const } from '@/common/Const';
import { GlobalContext } from '@/contexts/GlobalContext';
import theme from '@/theme';
import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useContext, useMemo, useState } from 'react';

/**
 * シーズンアニメ
 */
export const SeasonAnime = (seasonAnimeData: SeasonAnimeResponse) => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  // 表示コンテンツ数（シーズンアニメ）
  const [dispSeasonAnimeCount, setDispSeasonAnimeCount] = useState<number>(Const.SEASON_ANIME_DISP_CHUNK);

  // コンテンツ数（シーズンアニメ）
  const seasonAnimeTotalCount: number = useMemo(() => {
    if (seasonAnimeData?.data === undefined) {
      return 0;
    }
    return seasonAnimeData.data.length;
  }, [seasonAnimeData]);

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
        今シーズンアニメ一覧
      </Typography>
      <Box sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {seasonAnimeData?.data?.slice(0, dispSeasonAnimeCount).map((anime) => (
          <Box key={anime.mal_id} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box component="a" href={anime.url} target="_blank" sx={{ display: 'flex' }}>
              <Box
                component="img"
                alt={anime.title}
                src={anime.images.jpg.image_url}
                sx={{ width: '9.6rem', height: '11.2rem', objectFit: 'cover' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: '0.1rem',
                backgroundColor: Colors.white,
                width: '9.6rem',
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
      {dispSeasonAnimeCount < seasonAnimeTotalCount ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1rem 0 3.2rem 0',
          }}
        >
          <NextContentsButton
            onClick={() => setDispSeasonAnimeCount((preState) => preState + Const.SEASON_ANIME_DISP_CHUNK)}
          >
            <Typography sx={{ fontSize: '1.6rem', color: Colors.gray50 }}>続きを見る</Typography>
            <Box
              component="img"
              alt="next"
              src="/icons/next_contents.svg"
              sx={{
                width: '1rem',
                height: '0.8rem',
                marginTop: '0.1rem',
              }}
            />
          </NextContentsButton>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: '3.2rem',
          }}
        />
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
  width: '12rem',
  gap: '0.3rem',
  padding: '0.4rem 0',
  borderRadius: '0.5rem',
  [theme.breakpoints.up('xs')]: {
    ':focus': {
      backgroundColor: Colors.gray700,
    },
    ':hover': {
      backgroundColor: Colors.gray500,
    },
  },
});
