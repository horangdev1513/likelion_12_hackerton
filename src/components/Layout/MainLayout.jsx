import { Outlet, Navigate } from 'react-router-dom';

// components
import Container from './Container';
import Main from './Main';
import MainHeader from '../header/MainHeader';
//utils
import { getToken } from '../../utils';

import { LOGIN_PAGE } from '../../data/constants';

export function MainLayout() {
  const token = getToken();

  return (
    <Container>
      <MainHeader />
      <Main>{token ? <Outlet /> : <Navigate to={LOGIN_PAGE} />}</Main>
    </Container>
  );
}
