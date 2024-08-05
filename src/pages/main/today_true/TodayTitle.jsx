import styled from 'styled-components';

export default function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

const StyledTitle = styled.h1`
  height: 10%;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.xl};
  font-family: NanumSquareRound;
`;
