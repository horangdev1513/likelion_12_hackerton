import styled from 'styled-components';

import happy from '../../assets/main/emotion_on/happy.png';

export default function CreatePostInformation() {
  return (
    <Layout className="info">
      {/* <img src={happy} />
      <p className="info-text">새싹</p> */}
    </Layout>
  );
}

const Layout = styled.div`
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: NanumSquareRound;

  & .info-text {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }
`;
