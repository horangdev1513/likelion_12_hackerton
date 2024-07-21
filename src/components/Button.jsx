import { StyledLargeButton, StyledSmallButton } from './styles';

export function LargeButton({ text, ...props }) {
  return (
    <StyledLargeButton {...props}>
      <p>{text}</p>
    </StyledLargeButton>
  );
}

export function SmallButton({ text, ...props }) {
  return (
    <StyledSmallButton {...props}>
      <p>{text}</p>
    </StyledSmallButton>
  );
}
