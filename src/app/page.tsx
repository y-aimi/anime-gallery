import { SeasonAnime } from '@/features/client/SeasonAnime';
import { TopAnime } from '@/features/client/TopAnime';
import { Container } from '@mui/material';

/**
 * ホーム画面
 */
export default function Index() {
  return (
    <Container>
      <TopAnime />
      <SeasonAnime />
    </Container>
  );
}
