'use client';

import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useState } from 'react';

export const ConfirmDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ width: '200px' }}>
        メインカードに設定
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ width: '400px', paddingTop: '30px' }}>
          [カード番号]をメインカードとして設定してよろしいでしょうか?
        </DialogTitle>
        <DialogActions sx={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '30px' }}>
          <Button
            onClick={handleClose}
            sx={{ backgroundColor: '#ddd', color: '#333', padding: '6px 30px', borderRadius: '30px' }}
            autoFocus
          >
            設定する
          </Button>
          <Button onClick={handleClose} sx={{ color: '#333', padding: '6px 30px', borderRadius: '30px' }}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
