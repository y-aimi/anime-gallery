'use client';

import { ConfirmDialog } from '@/app/confirmDialog';
import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();

  return (
    <Container sx={{ padding: '50px' }}>
      <Button variant="contained" color="primary" sx={{ width: '150px' }} onClick={() => router.push('/point_card')}>
        ページ遷移
      </Button>
      <Typography variant="h2" sx={{ margin: '20px 0' }}>
        登録カード情報
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Button variant="contained" color="primary" sx={{ width: '100px' }}>
          変更する
        </Button>
        <ConfirmDialog />
      </Box>
    </Container>
  );
}
