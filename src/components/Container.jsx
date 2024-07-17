import styled from 'styled-components';

export default function Container({ children }) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  max-width: 480px;
  margin: 0 auto;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  background-color: rgba(242, 242, 242, 1);
`;
