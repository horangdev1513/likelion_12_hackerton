import styled from 'styled-components';
import HeaderElement from './HeaderElement';
import { MY_PAGE_MYCOMMNETS, MY_PAGE_MYPOSTS } from '../../data/constants';

export default function Header() {
  return (
    <Layout>
      <HeaderElement text="글" route={MY_PAGE_MYPOSTS} />
      <HeaderElement text="댓글" route={MY_PAGE_MYCOMMNETS} />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NanumSquareRound;
`;
