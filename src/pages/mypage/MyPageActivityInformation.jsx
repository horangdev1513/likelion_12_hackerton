import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAtom, useSetAtom } from 'jotai';
import { writeUserCommentCount, writeUserPostCount, userCommentCount, userPostCount } from '../../atoms';

// components
import MyPageActivityBox from './MyPageActivityBox';
import MyPageTitle from './MyPageTitle';

import { MY_PAGE_MYPOSTS } from '../../data/constants';

export default function ActivityInformation() {
  const [{ data: postCount, isPending: isPostPending, isError: isPostError }] = useAtom(userPostCount);
  const [{ data: commentCount, isPending: isCommentPending, isError: isCommentError }] = useAtom(userCommentCount);
  const [, setUserPostCount] = useAtom(writeUserPostCount);
  const [, setUserCommentCount] = useAtom(writeUserCommentCount);

  useEffect(() => {
    if (postCount !== undefined) {
      setUserPostCount(postCount);
    }
  }, [postCount, setUserPostCount]);

  useEffect(() => {
    if (commentCount !== undefined) {
      setUserCommentCount(commentCount);
    }
  }, [commentCount, setUserCommentCount]);

  return (
    <Layout>
      <div className="link-box">
        <MyPageTitle text="나의 활동 내역" />
        <Link to={MY_PAGE_MYPOSTS}>
          <p className="link-text">더보기</p>
        </Link>
      </div>

      <ActivityContainer>
        <MyPageActivityBox text="내가 쓴 글" number={postCount} isPending={isPostPending} isError={isPostError} />

        <MyPageActivityBox
          text="댓글단 글"
          number={commentCount}
          isPending={isCommentPending}
          isError={isCommentError}
        />
      </ActivityContainer>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  margin: 20px 0;

  & .link-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .link-text {
    width: 50px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }
`;

const ActivityContainer = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-evenly;
`;
