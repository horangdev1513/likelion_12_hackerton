import styled from 'styled-components';

import sad from '../../assets/main/emotion_on/depression.png';

export default function MyPageMyPostsNonContent() {
  return (
    <Layout>
      <div className="content-box">
        <img src={sad} alt="sad" className="sad-image" />
        <p>글이 없어요... 첫 댓글을 남겨주세요</p>
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & .content-box {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .sad-image {
      width: 50px;
      height: 50px;

      margin-bottom: 20px;
    }
  }

  & p {
    font-family: NanumSquareRound;
  }
`;
