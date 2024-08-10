import styled from 'styled-components';

export default function Main({ children }) {
  return <MainLayout>{children}</MainLayout>;
}

const MainLayout = styled.main`
  width: 100%;
  height: 90%;

  margin-top: 5%;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
