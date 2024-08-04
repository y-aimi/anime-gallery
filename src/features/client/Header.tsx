'use client';

import { Colors } from '@/common/Colors';
import { Routes } from '@/common/Routes';
import { AppBar, Box, Drawer, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

/**
 * ヘッダー
 */
export const Header = () => {
  // メニューが開いているか
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0.7rem 2.5rem' }}>
          <Box
            component="img"
            alt="close"
            src="/close.svg"
            sx={{ width: '1.8rem', height: '1.8rem' }}
            onClick={() => setIsOpen(false)}
          />
        </Box>
        <List disablePadding>
          <ListItem sx={{ padding: '1.2rem 1.6rem' }}>
            <Link href={Routes.index} onClick={() => setIsOpen(false)}>
              <Box
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  color: Colors.gray900,
                  textDecorationColor: Colors.gray900,
                  textDecoration: 'underline',
                }}
              >
                ホーム画面
              </Box>
            </Link>
          </ListItem>
          <ListItem sx={{ padding: '1.2rem 1.6rem' }}>
            <Link href={Routes.searchName} onClick={() => setIsOpen(false)}>
              <Box
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  color: Colors.gray900,
                  textDecorationColor: Colors.gray900,
                  textDecoration: 'underline',
                }}
              >
                名前検索
              </Box>
            </Link>
          </ListItem>
          <ListItem sx={{ padding: '1.2rem 1.6rem' }}>
            <Link href={Routes.searchSeasons} onClick={() => setIsOpen(false)}>
              <Box
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  color: Colors.gray900,
                  textDecorationColor: Colors.gray900,
                  textDecoration: 'underline',
                }}
              >
                シーズン毎アニメ一覧
              </Box>
            </Link>
          </ListItem>
          <ListItem sx={{ padding: '1.2rem 1.6rem' }}>
            <Link href={Routes.index} onClick={() => setIsOpen(false)}>
              <Box
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  color: Colors.gray900,
                  textDecorationColor: Colors.gray900,
                  textDecoration: 'underline',
                }}
              >
                マイページ_
              </Box>
            </Link>
          </ListItem>
        </List>
      </Drawer>
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
          paddingRight: '2rem',
        }}
      >
        <Box
          component="img"
          alt="menu"
          src="/burger_menu.svg"
          sx={{ width: '2.7rem', height: '1.8rem' }}
          onClick={() => setIsOpen(true)}
        />
      </AppBar>
    </>
  );
};
