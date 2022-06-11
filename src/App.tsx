import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import './App.css';
import { RouteComponent } from './routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
