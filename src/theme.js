import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00E676',
      light: '#66FFA6',
      dark: '#00B248',
    },
    secondary: {
      main: '#FF3D00',
      light: '#FF7539',
      dark: '#C3000D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAFAFA',
    },
  },

  typography: {
    fontFamily: 'Inter',
  },
});

export default theme;
