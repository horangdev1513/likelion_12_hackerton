import styled from 'styled-components';

export function SmallButton({ text, ...props }) {
  return (
    <StyledSmallButton {...props}>
      <p>{text}</p>
    </StyledSmallButton>
  );
}

const StyledLargeButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.main};
  color: white;

  & p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.xl};
    font-family: NanumSquareRound;
  }
`;

const StyledSmallButton = styled(StyledLargeButton)`
  width: 30%;
  height: 40px;

  & p {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: NanumSquareRound;
  }
`;
