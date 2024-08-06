'use client';

import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import theme from '@/theme';
import { FavoriteAnime } from '@/types/FavoriteAnime';
import { Button, Dialog, DialogActions, DialogTitle, Menu, MenuItem, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MouseEvent, useContext, useState } from 'react';

/**
 * マイページ
 */
export const MyPage = () => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  // スナックバーが表示されているかどうか
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);

  // 削除ダイアログのが表示されているかどうか
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  // ぶら下げる元のElement
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // ソートメニューが開いているかどうか
  const isOpenSort = Boolean(anchorEl);

  /**
   * ソートボタンクリック処理
   * @param event MouseEvent<HTMLImageElement>
   */
  const handleClickSort = (event: MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * ソートメニューを閉じる処理
   */
  const handleCloseSort = () => {
    setAnchorEl(null);
  };

  /**
   * 削除処理
   */
  const handleRemove = () => {
    setIsOpenDialog(false);
    setFavoriteAnimeList([]);
    setIsOpenSnackbar(true);
  };

  /**
   * 削除キャンセル処理
   */
  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  /**
   * お気に入りアニメ一覧ソート処理
   *
   * @param sortMethod (animeList: FavoriteAnime[]) => FavoriteAnime[]
   */
  const sortFavoriteAnimeList = (sortMethod: (animeList: FavoriteAnime[]) => FavoriteAnime[]) => {
    setFavoriteAnimeList(sortMethod(favoriteAnimeList));
    setAnchorEl(null);
  };

  return (
    <>
      <Menu id="sort-menu" anchorEl={anchorEl} open={isOpenSort} onClose={handleCloseSort} aria-hidden={false}>
        <MenuItem onClick={() => sortFavoriteAnimeList(sortByTitleAsc)} sx={{ fontSize: '1.4rem' }}>
          タイトル昇順
        </MenuItem>
        <MenuItem onClick={() => sortFavoriteAnimeList(sortByTitleDesc)} sx={{ fontSize: '1.4rem' }}>
          タイトル降順
        </MenuItem>
        <MenuItem onClick={() => sortFavoriteAnimeList(sortByAiredAsc)} sx={{ fontSize: '1.4rem' }}>
          放送開始日昇順
        </MenuItem>
        <MenuItem onClick={() => sortFavoriteAnimeList(sortByAiredDesc)} sx={{ fontSize: '1.4rem' }}>
          放送開始日降順
        </MenuItem>
      </Menu>
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
              fontSize: '1.8rem',
              fontWeight: 'bold',
              margin: '1.6rem 0',
              [theme.breakpoints.up('md')]: {
                fontSize: '2.4rem',
              },
            }}
          >
            お気に入りアニメ一覧
          </Typography>
          <Box
            component="img"
            alt="sort"
            src="/icons/sort_button.svg"
            sx={{ width: '3.2rem', height: '3.2rem' }}
            onClick={handleClickSort}
          />
        </Box>
        <Box
          component="img"
          alt="trash"
          src="/icons/trash.svg"
          sx={{ width: '2.2rem', height: '2.2rem' }}
          onClick={() => setIsOpenDialog(true)}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1rem 1.6rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3.2rem',
          }}
        >
          {favoriteAnimeList?.map((anime) => (
            <Box key={anime.mal_id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box component="a" href={anime.url} target="_blank" sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  alt={anime.title ?? 'title'}
                  src={anime.image_url}
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
                    color: Colors.gray900,
                    paddingLeft: '0.1rem',
                  }}
                >
                  {anime.title}
                </Typography>
                <Box
                  component="img"
                  alt="fav"
                  src="/icons/favorite.svg"
                  sx={{
                    width: '2.4rem',
                    height: '2.4rem',
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
                          aired_from: anime.aired_from,
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
      <Dialog open={isOpenDialog} onClose={handleCloseDialog} aria-labelledby="dialog-title">
        <DialogTitle
          id="dialog-title"
          sx={{
            fontSize: '1.6rem',
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
              fontSize: '1.6rem',
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
          <Button onClick={handleCloseDialog} sx={{ fontSize: '1.6rem', color: Colors.gray400 }}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={2000}
        onClose={() => setIsOpenSnackbar(false)}
        message="お気に入りを全て削除しました"
        ContentProps={{
          sx: {
            fontSize: '1.4rem',
            color: Colors.gray700,
            backgroundColor: Colors.purple200,
            padding: '0.4rem 1rem',
            [theme.breakpoints.up('sm')]: {
              minWidth: '18.8rem',
            },
          },
        }}
      />
    </>
  );
};

/**
 * タイトル昇順にソートして返却
 * @param animeList FavoriteAnime[]
 * @returns タイトル昇順にソートされたanimeList
 */
const sortByTitleAsc = (animeList: FavoriteAnime[]): FavoriteAnime[] => {
  return animeList.slice().sort((a, b) => {
    if (a.title === null) return 1;
    if (b.title === null) return -1;

    return a.title.localeCompare(b.title);
  });
};

/**
 * タイトル降順にソートして返却
 * @param animeList FavoriteAnime[]
 * @returns タイトル降順にソートされたanimeList
 */
const sortByTitleDesc = (animeList: FavoriteAnime[]): FavoriteAnime[] => {
  return animeList.slice().sort((a, b) => {
    if (a.title === null) return 1;
    if (b.title === null) return -1;

    return b.title.localeCompare(a.title);
  });
};

/**
 * 放送日昇順にソートして返却
 * @param animeList FavoriteAnime[]
 * @returns 放送日昇順にソートされたanimeList
 */
const sortByAiredAsc = (animeList: FavoriteAnime[]): FavoriteAnime[] => {
  return animeList.slice().sort((a, b) => {
    if (a.aired_from === null) return 1;
    if (b.aired_from === null) return -1;
    return a.aired_from.localeCompare(b.aired_from);
  });
};

/**
 * 放送日降順にソートして返却
 * @param animeList FavoriteAnime[]
 * @returns 放送日降順にソートされたanimeList
 */
const sortByAiredDesc = (animeList: FavoriteAnime[]): FavoriteAnime[] => {
  return animeList.slice().sort((a, b) => {
    if (a.aired_from === null) return 1;
    if (b.aired_from === null) return -1;
    return b.aired_from.localeCompare(a.aired_from);
  });
};
