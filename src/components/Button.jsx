import { StyleLink, StyledButton } from './styles';

export default function Button({ text, link, width, height }) {
  return (
    <StyleLink to={link} $height={height} $width={width}>
      <StyledButton>
        <p>{text}</p>
      </StyledButton>
    </StyleLink>
  );
}
