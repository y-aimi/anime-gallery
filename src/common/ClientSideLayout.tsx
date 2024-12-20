'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import * as React from 'react';
import { GlobalContextProvider } from '@/contexts/GlobalContext';

/**
 * ルートlayoutのクライアントサイド処理
 */
const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={{ html: { fontSize: '62.5%', background: 'linear-gradient(#E8F1FE, #FBF5E0)' } }} />
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  );
};

export default ClientSideLayout;
