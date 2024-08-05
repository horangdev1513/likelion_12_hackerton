import styled from 'styled-components';

export default function MyPageTitle({ text }) {
  return <TitleLayout>{text}</TitleLayout>;
}

const TitleLayout = styled.h1`
  width: 100%;

  margin-bottom: 10px;

  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.xl};
  font-family: NanumSquareRound;
`;
