import styled from 'styled-components';

import commentIcon from '../../assets/post/commentIcon.png';

export default function PostBox({ content, memberNickname, commentCount }) {
  return (
    <Layout>
      <HeaderBox>
        <p>{memberNickname}</p>
        <div>
          <img src={commentIcon} alt="commentIcon" className="commnetIcon" />
          <span className="commentCount">{commentCount}</span>
        </div>
      </HeaderBox>

      <ContentBox>
        <p>{content}</p>
      </ContentBox>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 150px;

  margin-top: 20px;

  background-color: white;

  border: 3px solid;
  border-color: #d9d9d9;
  border-radius: 15px;

  font-family: NanumSquareRound;
`;

const HeaderBox = styled.div`
  padding: 10px 15px;
  height: 30%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & .commnetIcon {
    width: 15px;
    height: 15px;
  }

  & .commentCount {
    color: ${({ theme }) => theme.color.main};
  }
`;

const ContentBox = styled.div`
  padding: 10px 15px;
  height: 70%;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;
