import { ErrorMessage } from '@/features/client/ErrorMessage';
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
  try {
    const [randomAnimeData, topAnimeData, seasonAnimeData] = await Promise.all([
      FetchRandomAnime(),
      FetchTopAnime(),
      FetchSeasonAnime(),
    ]);

    return (
      <Container>
        <RandomAnime {...randomAnimeData} />
        <TopAnime {...topAnimeData} />
        <SeasonAnime {...seasonAnimeData} />
      </Container>
    );
  } catch (error) {
    console.error(error);
    return (
      <Container>
        <ErrorMessage />
      </Container>
    );
  }
}
