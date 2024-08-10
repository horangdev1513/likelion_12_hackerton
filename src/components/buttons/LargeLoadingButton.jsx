import styled from 'styled-components';

import { RotatingLines } from 'react-loader-spinner';

export function LargeLoadingButton() {
  return (
    <StyledLargeButton disabled>
      <RotatingLines visible={true} height="40" width="40" color="white" strokeColor="white" />
    </StyledLargeButton>
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
  }
`;
