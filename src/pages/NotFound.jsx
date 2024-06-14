import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Container,
  Box,
  Button,
  Typography,
} from '@mui/material';
import NotFoundIcon from 'assets/notfound-icon.png'

function NotFound() {
  return (
    <Container maxWidth='md'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '40px' }}>
          <img src={NotFoundIcon} alt='notfound-icon' style={{ width: '50%' }}/>
        </Box>
        <Typography variant='h6' color='text.secondary' sx={{ mt: '40px' }}>
          指定したページが見つかりませんでした．
        </Typography>
        <Button component={Link} to='/' variant='outlined' sx={{ mt: '20px' }}>
          トップページに戻る
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;