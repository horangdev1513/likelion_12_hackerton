import styled from 'styled-components';

import commentIcon from '../../assets/post/commentIcon.png';

export default function PostDetailContentBox({ nickName, content, commentCount }) {
  return (
    <Layout>
      <NickNameBox>
        <p>{nickName}</p>
        <div>
          <img src={commentIcon} />
          <span className="commentConut">{commentCount}</span>
        </div>
      </NickNameBox>
      <ContentBox>{content}</ContentBox>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 220px;
  margin: 10px 0;

  background-color: white;
  border: 2px solid;
  border-radius: 10px;
  border-color: #d9d9d9;
`;

const NickNameBox = styled.div`
  width: 100%;

  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.xl};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: NanumSquareRound;

  & .commentConut {
    color: ${({ theme }) => theme.color.main};
    font-family: NanumSquareRound;
  }
`;

const ContentBox = styled.div`
  width: 100%;

  height: 200px;
  padding: 0 15px;
  margin-top: 10px;
  font-family: NanumSquareRound;
`;
