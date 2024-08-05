import { Outlet, Navigate, useLocation } from 'react-router-dom';

// components
import Container from './Container';
import Main from './Main';
import MyPageHeader from '../header/MyPageHeader';
import MyActivityHeader from '../header/MyActivityHeader';
//utils
import { getToken } from '../../utils';

import { LOGIN_PAGE } from '../../data/constants';

export function MyPageLayout() {
  const path = useLocation();

  const token = getToken();

  let header = <MyActivityHeader />;

  if (path.pathname === '/app/mypage') header = <MyPageHeader />;

  return (
    <Container>
      {header}
      <Main>{token ? <Outlet /> : <Navigate to={LOGIN_PAGE} />}</Main>
    </Container>
  );
}
