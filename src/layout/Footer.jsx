import React from 'react';
import {
  Typography
} from '@mui/material';

function Footer() {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      sx={{
        p: '10px',
        textAlign: 'center',
      }}
    >
      © 2024 Tomee0818. All rights reserved.
    </Typography>
  );
}

export default Footer;