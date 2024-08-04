'use client';

import { SearchSeasonAnimeResponse } from '@/api/response/SearchSeasonAnimeResponse';
import { SeasonsResponse } from '@/api/response/SeasonsResponse';
import { Colors } from '@/common/Colors';
import { GlobalContext } from '@/contexts/GlobalContext';
import { FetchSearchSeasonsAnime, FetchSeasons } from '@/features/FetchAnime';
import theme from '@/theme';
import { Season } from '@/types/enum/Season';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import { MouseEvent, useContext, useEffect, useMemo, useState } from 'react';

/**
 * シーズン毎アニメ一覧
 */
export const SearchSeasonsAnime = () => {
  const { favoriteAnimeList, setFavoriteAnimeList } = useContext(GlobalContext);

  // シーズンデータ
  const [seasons, setSeasons] = useState<SeasonsResponse>();
  // シーズン毎アニメ検索取得データ
  const [searchResults, setSearchResults] = useState<SearchSeasonAnimeResponse>();
  // ローディング判定：シーズン毎アニメ検索検索取得データ
  const [loadingSearchName, setLoadingSearchName] = useState<boolean>(false);
  // 検索年
  const [searchYear, setSearchYear] = useState<string>('');
  // 検索シーズン
  const [searchSeason, setSearchSeason] = useState<string>('');

  /**
   * 選択可能な季節
   */
  const selectableSeasons = useMemo(() => {
    return seasons?.data.find((item) => item.year.toString() === searchYear);
  }, [seasons, searchYear]);

  // 必要データ取得フック
  useEffect(() => {
    const fetch = async () => {
      const res = await FetchSeasons();
      setSeasons(res);
    };

    fetch();
  }, []);

  /**
   * シーズン毎アニメ検索処理
   */
  const handleSearch = () => {
    // 空文字を拒否
    if (!searchYear.trim() || !searchSeason.trim()) return;

    setLoadingSearchName(true);

    const fetch = async () => {
      const res = await FetchSearchSeasonsAnime(searchYear, searchSeason);
      setSearchResults(res);
      setLoadingSearchName(false);
    };

    fetch();
  };

  /**
   * 年プルダウン変更イベント処理
   * @param event SelectChangeEvent
   */
  const handleYearInputChange = (event: SelectChangeEvent): void => {
    setSearchYear(event.target.value);
    setSearchSeason('');
  };

  /**
   * 季節プルダウン変更イベント処理
   * @param event SelectChangeEvent
   */
  const handleSeasonInputChange = (event: SelectChangeEvent): void => {
    setSearchSeason(event.target.value);
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
          fontSize: '1.6rem',
          fontWeight: 'bold',
          margin: '1.4rem 0 1.8rem 0',
          [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
          },
        }}
      >
        シーズン毎アニメ一覧
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1.6rem',
            alignItems: 'center',
          }}
        >
          <FormControl
            sx={{
              width: '9.6rem',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: Colors.gray400,
                },
              },
            }}
          >
            <InputLabel id="season-year-label" sx={{ fontSize: '1.6rem', color: Colors.gray400 }}>
              年
            </InputLabel>
            <Select
              labelId="season-year-label"
              id="season-year"
              value={searchYear}
              label="年"
              onChange={handleYearInputChange}
              sx={{ fontSize: '1.6rem' }}
            >
              {seasons?.data.map((season, index) => (
                <MenuItem key={index} value={season.year.toString()} sx={{ fontSize: '1.6rem' }}>
                  {season.year.toString()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: '9.6rem',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: Colors.gray400,
                },
              },
              '& .MuiInputBase-input.Mui-disabled': { backgroundColor: Colors.gray200 },
            }}
            disabled={searchYear === ''}
          >
            <InputLabel id="seasons-label" sx={{ fontSize: '1.6rem', color: Colors.gray400 }}>
              季節
            </InputLabel>
            <Select
              labelId="seasons-label"
              id="seasons"
              value={searchSeason}
              label="季節"
              onChange={handleSeasonInputChange}
              sx={{ fontSize: '1.6rem' }}
            >
              {selectableSeasons?.seasons.map((season, index) => (
                <MenuItem key={index} value={season} sx={{ fontSize: '1.6rem' }}>
                  {Season[season]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <SearchButton onClick={handleButtonClick} disabled={searchSeason === ''}>
          検索
        </SearchButton>
      </Box>
      {loadingSearchName ? (
        <Box
          sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center', margin: '1.6rem 0' }}
        >
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
        <Box
          sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center', margin: '1.6rem 0' }}
        >
          {searchResults?.data?.map((anime) => (
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
                          title: anime.title,
                          url: anime.url,
                          image_url: anime.images.jpg.image_url,
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

// -----------------------------------------------------------------------------
// styles
// -----------------------------------------------------------------------------

const SearchButton = styled(Button)({
  fontSize: '1.6rem',
  color: Colors.gray700,
  backgroundColor: Colors.yellow100,
  border: `0.1rem ${Colors.gray400} solid`,
  ':disabled': {
    backgroundColor: Colors.gray200,
  },
  [theme.breakpoints.up('xs')]: {
    ':focus': {
      backgroundColor: Colors.yellow100,
    },
  },
});
