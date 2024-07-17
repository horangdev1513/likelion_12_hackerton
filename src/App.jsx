import { RouterProvider } from 'react-router-dom';
import { router } from './data/routes/index';
import { GlobalStyle } from './data/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './data/styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
