import styled from 'styled-components';
import { useAtomValue } from 'jotai';

// assets
import firstbadge from '../../assets/mypage/firstcommentbadge.png';
import secondbadge from '../../assets/mypage/firstwritebadge.png';
import thirdbadge from '../../assets/mypage/thirdwritebadge.png';
import badge4 from '../../assets/mypage/4badge.png';
import badge5 from '../../assets/mypage/5badge.png';
import badge6 from '../../assets/mypage/6badge.png';
import lock from '../../assets/mypage/lockbadge.png';

import { readUserCommentCount, readUserPostCount } from '../../atoms';

//components
import MyPageTitle from './MyPageTitle';

export default function BagesInformation() {
  const postCount = useAtomValue(readUserPostCount);
  const commentCount = useAtomValue(readUserCommentCount);

  return (
    <Layout>
      <MyPageTitle text="활동 뱃지" />

      <BadgesBox>
        <div className="box">
          <img src={postCount >= 1 ? firstbadge : lock} alt="1st badge" className="badge-image" />
          <p className="badge-name">글쓰기의 시작</p>
          <p className="mission">첫 글 쓰기</p>
        </div>
        <div className="box">
          <img src={postCount >= 3 ? secondbadge : lock} alt="2nd badge" className="badge-image" />
          <p className="badge-name">글쓰는 습관</p>
          <p className="mission">3일 연속 글쓰기</p>
        </div>
        <div className="box">
          <img src={postCount >= 7 ? thirdbadge : lock} alt="3rd badge" className="badge-image" />
          <p className="badge-name">글쓰는 열정</p>
          <p className="mission">7일 연속 글쓰기</p>
        </div>
        <div className="box">
          <img src={commentCount >= 1 ? badge4 : lock} alt="4th badge" className="badge-image" />
          <p className="badge-name">위로의 시작</p>
          <p className="mission">첫 댓글 달기</p>
        </div>
        <div className="box">
          <img src={commentCount >= 10 ? badge5 : lock} alt="5th badge" className="badge-image" />
          <p className="badge-name">댓글의 힘</p>
          <p className="mission">댓글 10개 달기</p>
        </div>
        <div className="box">
          <img src={commentCount >= 100 ? badge6 : lock} alt="6th badge" className="badge-image" />
          <p className="badge-name">공감의 왕</p>
          <p className="mission">댓글 100개 쓰기</p>
        </div>
      </BadgesBox>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;

  margin: 20px 0;
`;

const BadgesBox = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  row-gap: 10px;
  place-items: center;

  background-color: white;
  border-radius: 15px;

  & .box {
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .badge-name {
      margin-top: 5px;
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-family: NanumSquareRound;
    }

    & .mission {
      margin-top: 5px;
      color: rgba(118, 118, 118, 1);
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-family: NanumSquareRound;
    }

    & .badge-image {
      width: 40px;
      height: 40px;
    }
  }
`;
