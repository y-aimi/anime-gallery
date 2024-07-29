'use client';

import { Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function PointCard() {
  const router = useRouter();
  return (
    <Container sx={{ padding: '50px' }}>
      <Button variant="contained" color="primary" sx={{ width: '150px' }} onClick={() => router.push('/')}>
        戻る
      </Button>
      <Typography variant="h2" sx={{ margin: '20px 0' }}>
        Sポイントカード
      </Typography>
    </Container>
  );
}
