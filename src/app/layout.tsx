import ClientLayout from '@/common/ClientSideLayout';
import { AppBar, Box } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アニメギャラリー',
  description: 'アニメのギャラリーサイト',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <ClientLayout>
        <Box
          sx={{
            minHeight: '100dvh',
            background: 'linear-gradient(#E8F1FE, #FBF5E0)',
            paddingTop: '3.2rem',
          }}
        >
          <AppBar
            position="fixed"
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '3.2rem',
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: 'none',
              paddingRight: '1.6rem',
            }}
          >
            <Box component="img" alt="menu" src="/burger_menu.svg" sx={{ width: '2.7rem', height: '1.8rem' }} />
          </AppBar>
          {children}
        </Box>
      </ClientLayout>
    </html>
  );
}
