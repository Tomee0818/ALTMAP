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
});

export default theme;