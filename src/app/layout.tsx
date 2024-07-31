import ClientLayout from '@/common/ClientSideLayout';
import { AppBar, Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アニメギャラリー',
  description: 'アニメのギャラリーサイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <ClientLayout>
        <Container
          sx={{
            height: '100dvh',
            background: 'linear-gradient(#E8F1FE, #FBF5E0)',
            padding: { xs: '0', sm: '0' },
          }}
        >
          <AppBar
            position="sticky"
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
            <img src="/burger_menu.svg" alt="menu" width={18} height={12} />
          </AppBar>
          {children}
        </Container>
      </ClientLayout>
    </html>
  );
}
