import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function HeaderElement({ text, route }) {
  return (
    <StyledNavLink to={route}>
      <Layout>
        <p className="text">{text}</p>
      </Layout>
    </StyledNavLink>
  );
}

const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 3px solid;

  & .text {
    margin-bottom: 10px;
    font-family: NanumSquareRound;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;

  display: flex;
  &.active {
    color: ${({ theme }) => theme.color.main};
  }
`;
