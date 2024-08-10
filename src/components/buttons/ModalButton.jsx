import styled from 'styled-components';

export function ModalButton({ text, onClick }) {
  return (
    <StyledModalButton onClick={onClick}>
      <p>{text}</p>
    </StyledModalButton>
  );
}

const StyledModalButton = styled.button`
  width: 30%;
  height: 30px;
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
