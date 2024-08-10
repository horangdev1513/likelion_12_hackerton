import { RouterProvider } from 'react-router-dom';
import { router } from './data/routes/index';
import { GlobalStyle } from './data/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './data/styles/theme';
import { Provider } from 'jotai';

function App() {
  return (
    <>
      <Provider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
