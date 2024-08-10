import { Navigate, Outlet } from 'react-router-dom';

import Container from './Container';
import Main from './Main';
import CreatePostHeader from '../header/CreatePostsHeader';

import { getToken } from '../../utils';

import { LOGIN_PAGE } from '../../data/constants';

export function CreatePostLayout() {
  const token = getToken();

  return (
    <Container>
      <CreatePostHeader />
      <Main> {token ? <Outlet /> : <Navigate to={LOGIN_PAGE} />}</Main>
    </Container>
  );
}
