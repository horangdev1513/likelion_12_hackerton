import { StyleLink, StyledButton } from './styles';

export default function Button() {
  return (
    <StyleLink to="/login">
      <StyledButton>
        <p>시작하기</p>
      </StyledButton>
    </StyleLink>
  );
}
