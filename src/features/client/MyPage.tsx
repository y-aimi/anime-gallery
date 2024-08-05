'use client';

import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import theme from '@/theme';
import { Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useContext, useState } from 'react';

/**
 * マイページ
 */
export const MyPage = () => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  // 削除ダイアログのが表示されているかどうか
  const [open, setOpen] = useState<boolean>(false);

  // 削除処理
  const handleRemove = () => {
    setOpen(false);
    setFavoriteAnimeList([]);
  };

  // 削除キャンセル処理
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.6rem',
          }}
        >
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
          <Box component="img" alt="sort" src="/sort_button.svg" sx={{ width: '3.2rem', height: '3.2rem' }} />
        </Box>
        <Box
          component="img"
          alt="trash"
          src="/trash.svg"
          sx={{ width: '1.8rem', height: '1.8rem' }}
          onClick={() => setOpen(true)}
        />
      </Box>
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
      <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="dialog-title">
        <DialogTitle
          id="dialog-title"
          sx={{
            fontSize: '1.2rem',
            color: Colors.gray700,
            textAlign: 'center',
            padding: '2.4rem 2.6rem 5.6rem 2.6rem',
          }}
        >
          お気に入りを
          <br />
          全て削除しますか？
        </DialogTitle>
        <DialogActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.6rem',
            paddingBottom: '2.4rem',
            '& > *:not(:first-of-type)': {
              margin: 0,
            },
          }}
        >
          <Button
            onClick={handleRemove}
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              backgroundColor: Colors.red900,
              color: Colors.white,
              width: '12.8rem',
              borderRadius: '1rem',
            }}
            autoFocus
          >
            削除
          </Button>
          <Button onClick={handleCloseDialog} sx={{ fontSize: '1.2rem', color: Colors.gray400 }}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
