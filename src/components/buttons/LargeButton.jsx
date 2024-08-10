import React from 'react';
import styled from 'styled-components';

export const LargeButton = React.memo(({ text, onClick }) => {
  return (
    <StyledLargeButton onClick={onClick}>
      <p>{text}</p>
    </StyledLargeButton>
  );
});

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
