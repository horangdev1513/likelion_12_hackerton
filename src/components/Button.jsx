import { StyledButton } from './styles';

export function LargeButton({ text, ...props }) {
  return (
    <StyledButton {...props}>
      <p>{text}</p>
    </StyledButton>
  );
}
