import { Outlet, useLocation } from 'react-router-dom';
import { MainLayout } from './styles';

import Header from './Header';
import Container from './Container';

export default function Layout() {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <Container>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Container>
    );
  }

  return (
    <Container>
      <Header title="임시" />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Container>
  );
}
