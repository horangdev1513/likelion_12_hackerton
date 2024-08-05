import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { POST_LISTS_PAGE } from '../../../data/constants';

import Title from './TodayTitle';

export default function TodayHotPostLayout({ children }) {
  return (
    <Layout>
      <div className="link-box">
        <Title text="오늘의 최신글" />
        <Link to={POST_LISTS_PAGE} className="link">
          다른 글 모아보기 <span>{'>'}</span>
        </Link>
      </div>
      {children}
    </Layout>
  );
}

const Layout = styled.section`
  width: 100%;
  height: 50%;

  margin-top: 20px;

  & .link-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .link {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-family: NanumSquareRound;

      color: rgba(118, 118, 118, 1);
    }
  }
`;
