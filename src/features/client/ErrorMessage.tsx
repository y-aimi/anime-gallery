'use client';

import theme from '@/theme';
import { Typography } from '@mui/material';

/**
 * エラー
 */
export const ErrorMessage = () => {
  return (
    <Typography
      sx={{
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginTop: '3.2rem',
        [theme.breakpoints.up('md')]: {
          fontSize: '2.4rem',
        },
      }}
    >
      データ取得に失敗しました。
      <br />
      他画面をご利用ください。
    </Typography>
  );
};
