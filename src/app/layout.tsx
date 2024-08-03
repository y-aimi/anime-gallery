import ClientLayout from '@/common/ClientSideLayout';
import { Header } from '@/features/client/Header';
import { Box } from '@mui/material';
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
          <Header />
          {children}
        </Box>
      </ClientLayout>
    </html>
  );
}
