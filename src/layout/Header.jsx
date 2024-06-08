import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  AppBar,
  Toolbar
} from '@mui/material';

function Header() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          ロゴ（仮）
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;