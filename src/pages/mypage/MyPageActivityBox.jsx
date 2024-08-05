import styled from 'styled-components';

import { RotatingLines } from 'react-loader-spinner';

export default function MyPageActivityBox({ text, isPending, number, isError }) {
  return (
    <Layout>
      <p className="info-text">{text}</p>
      {isPending ? (
        <RotatingLines visible={true} height="20" width="20" color="white" strokeColor="#4A90E2" />
      ) : (
        <p className="info-number">{number}</p>
      )}
      {isError && <p>에러가 발생했습니다</p>}
    </Layout>
  );
}

const Layout = styled.div`
  width: 45%;
  height: 70px;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & .info-text {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }

  & .info-number {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;

    color: ${({ theme }) => theme.color.main};
  }
`;
