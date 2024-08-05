import { RandomAnime } from '@/features/client/RandomAnime';
import { SeasonAnime } from '@/features/client/SeasonAnime';
import { TopAnime } from '@/features/client/TopAnime';
import { FetchRandomAnime, FetchSeasonAnime, FetchTopAnime } from '@/features/FetchAnime';
import { Container } from '@mui/material';

/**
 * ホーム画面
 */
export default async function Index() {
  // リクエストごとにデータを取得
  const randomAnimeData = await FetchRandomAnime();
  const topAnimeData = await FetchTopAnime();
  const seasonAnimeData = await FetchSeasonAnime();

  return (
    <Container>
      <RandomAnime {...randomAnimeData} />
      <TopAnime {...topAnimeData} />
      <SeasonAnime {...seasonAnimeData} />
    </Container>
  );
}
