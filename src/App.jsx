import { RouterProvider } from 'react-router-dom';
import { router } from './data/routes/index';
import { GlobalStyle } from './data/styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
