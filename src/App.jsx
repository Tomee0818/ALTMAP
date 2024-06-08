import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {
  Box,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import theme from 'theme';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100vw',
              height: '100vh',
            }}
          >
            {/* ヘッダー */}
            <Header />

            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* メイン */}
              <Main />

              {/* フッター */}
              <Box sx={{ mt: 'auto' }}>
                <Footer />
              </Box>
            </Box>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </Router>
  );
}

export default App;