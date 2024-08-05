import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export function PageLoading() {
  return (
    <Layout>
      <ThreeDots ariaLabel="three-dots-loading" color="#4A90E2" />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
