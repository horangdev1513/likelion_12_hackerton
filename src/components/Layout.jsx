import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Container from './Container';

export default function Layout() {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <Container>
        <Outlet />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="임시" />
      <Outlet />
    </Container>
  );
}
