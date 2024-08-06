'use client';

import { SearchNameResponse } from '@/api/response/SearchNameResponse';
import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import { FetchSearchNameAnime } from '@/features/FetchAnime';
import theme from '@/theme';
import { IconButton, InputAdornment, Skeleton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, KeyboardEvent, MouseEvent, useContext, useState } from 'react';

/**
 * 名前検索
 */
export const SearchNameAnime = () => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  // 名前検索取得データ
  const [searchResults, setSearchResults] = useState<SearchNameResponse>();
  // ローディング判定：名前検索取得データ
  const [isLoadingSearchName, setIsLoadingSearchName] = useState<boolean>(false);
  // 検索テキスト
  const [searchText, setSearchText] = useState<string>('');

  /**
   * 名前検索処理
   */
  const handleSearch = () => {
    // 空文字を拒否
    if (!searchText.trim()) return;

    setIsLoadingSearchName(true);

    const fetch = async () => {
      const res = await FetchSearchNameAnime(searchText);
      setSearchResults(res);
      setIsLoadingSearchName(false);
    };

    fetch();
  };

  /**
   * テキストフィールドの値変更イベント処理
   * @param event ChangeEvent<HTMLInputElement>
   */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  /**
   * テキストフィールドのキーボードイベント処理
   * @param event KeyboardEvent<HTMLDivElement>
   */
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  /**
   * ボタンクリックのイベント処理
   * @param event MouseEvent<HTMLButtonElement>
   */
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    handleSearch();
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          margin: '1.4rem 0 1.8rem 0',
          [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
          },
        }}
      >
        名前検索
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          label="アニメ名"
          variant="outlined"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleButtonClick}
                  sx={{ fontSize: '1.6rem', padding: '0', color: Colors.gray700 }}
                >
                  検索
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            flexGrow: 1,
            [theme.breakpoints.up('md')]: {
              flexGrow: 0,
            },
            '& .MuiInputBase-input': {
              fontSize: '1.6rem',
              padding: '0.8rem 1.2rem 0.8rem 0.8rem',
            },
            '& .MuiInputLabel-root': {
              fontSize: '1.6rem',
              color: Colors.gray300,
              top: '-0.8rem',
              left: '-0.6rem',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: Colors.gray400,
              },
            },
          }}
        />
      </Box>
      {isLoadingSearchName ? (
        <Box
          sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center', margin: '1.6rem 0' }}
        >
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
          <Skeleton variant="rectangular" animation="wave" sx={{ width: '9.6rem', height: '11.2rem' }} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            gap: '1rem 1.6rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '1.6rem 0 3.2rem 0',
          }}
        >
          {searchResults?.data?.map((anime) => (
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
