'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import * as React from 'react';

const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <GlobalStyles styles={{ html: { fontSize: '62.5%' } }} /> */}
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  );
};

export default ClientSideLayout;
