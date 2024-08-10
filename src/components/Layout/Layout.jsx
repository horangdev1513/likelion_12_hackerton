import styled from 'styled-components';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAtomValue } from 'jotai';

import Container from './Container';
import Header from '../header/Header';
import { readUserToday } from '../../atoms';
import { MAIN_PAGE } from '../../data/constants';
import { getToken } from '../../utils';

export function Layout() {
  const token = getToken();
  const todayUser = useAtomValue(readUserToday);
  const findPath = useLocation();
  const startPage = findPath.pathname === '/';

  if (token && todayUser !== null) {
    return <Navigate to={`${MAIN_PAGE}?today=${todayUser}`} />;
  }

  return (
    <Container>
      {startPage ? null : <Header />}
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Container>
  );
}

const MainLayout = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
