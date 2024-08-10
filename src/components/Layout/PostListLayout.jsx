import { Navigate, Outlet } from 'react-router-dom';

import PostListHeader from '../header/PostListHeader';
import Container from './Container';
import Main from './Main';

import { getToken } from '../../utils';
import { MAIN_PAGE } from '../../data/constants';

export function PostListLayout() {
  const token = getToken();

  return (
    <Container>
      <PostListHeader />
      <Main>{token ? <Outlet /> : <Navigate to={MAIN_PAGE} />}</Main>
    </Container>
  );
}
