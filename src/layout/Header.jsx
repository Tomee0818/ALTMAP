import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import logoIcon from 'assets/logo-icon.png'

function Header() {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Box sx={{ width: { xs: '120px', sm: '180px' }, p: { xs: '5px', sm: '10px' } }}>
            <img src={logoIcon} alt='logo-icon' style={{ display: 'block', width: '100%' }} />
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;