import { SearchSeasonsAnime } from '@/features/client/SearchSeasonsAnime';
import { Container } from '@mui/material';

/**
 * シーズン毎アニメ一覧画面
 */
export default function Index() {
  return (
    <Container>
      <SearchSeasonsAnime />
    </Container>
  );
}
