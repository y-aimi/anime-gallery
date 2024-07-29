'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import * as React from 'react';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default ClientLayout;
