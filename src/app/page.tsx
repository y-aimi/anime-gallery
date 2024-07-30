'use client';

import { Colors } from '@/common/Colors';
import { Button } from '@mui/base/Button';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();

  return (
    <Container>
      <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', margin: '1.4rem 0 0.8rem 0' }}>
        人気アニメランキング
      </Typography>
      <Box sx={{ display: 'flex', gap: '1.6rem', overflowX: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={64} height={80} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '64px',
              height: '1.8rem',
            }}
          >
            <Image src="/favorite.svg" alt="anime" width={16} height={16} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={64} height={80} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '64px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={64} height={80} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '64px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={64} height={80} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '64px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={64} height={80} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '64px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', margin: '1.4rem 0 0.8rem 0' }}>
        2024夏アニメ一覧
      </Typography>
      <Box sx={{ display: 'flex', gap: '1rem 1.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/sample_anime.jpg" alt="anime" width={88} height={110} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '0.1rem',
              backgroundColor: Colors.white,
              width: '88px',
              height: '1.8rem',
            }}
          >
            <Image
              src="/favorite.svg"
              alt="anime"
              width={16}
              height={16}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(53%) hue-rotate(332deg) brightness(114%) contrast(80%)',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0.7rem 0 1rem 0',
        }}
      >
        <NextContentsButton>
          <Typography sx={{ fontSize: '1.4rem', color: Colors.gray50 }}>続きを見る</Typography>
          <Image src="/next_contents.svg" alt="next" width={10} height={8} style={{ marginTop: '0.1rem' }} />
        </NextContentsButton>
      </Box>
    </Container>
  );
}

const NextContentsButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.gray700,
  width: '9.9rem',
  gap: '0.3rem',
  padding: '0.2rem 0',
  borderRadius: '0.3rem',
});
