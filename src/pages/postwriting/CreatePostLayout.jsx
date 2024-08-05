import styled from 'styled-components';

export function CreatePostLayout({ children }) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  width: 100%;
  height: 40%;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: NanumSquareRound;
`;
