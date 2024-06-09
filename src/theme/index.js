import { createTheme } from '@mui/material/styles';
import {
  deepPurple,
  grey,
} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: grey[500],
    },
    text: {
      primary: grey[900],
      secondary: grey[600],
    },
    background: {
      default: grey[50],
    },
  },
    typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '6rem',
      '@media (max-width:600px)': {
        fontSize: '4rem',
      },
      '@media (min-width:600px)': {
        fontSize: '5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '6rem',
      },
    },
    h2: {
      fontSize: '3.75rem',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.75rem',
      },
    },
    h3: {
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h4: {
      fontSize: '2.125rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.125rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.375rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      '@media (max-width:600px)': {
        fontSize: '0.7rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.875rem',
      },
      '@media (min-width:900px)': {
        fontSize: '0.875rem',
      },
    },
  },
});

export default theme;