import styled from 'styled-components';
import Title from './TodayTitle';

export default function TodayPostLayout({ children }) {
  return (
    <Layout>
      <Title text="오늘 내가 쓴 글" />
      {children}
    </Layout>
  );
}

const Layout = styled.section`
  width: 100%;
  height: 30%;

  margin-bottom: 20px;
  font-family: NanumSquareRound;
`;
