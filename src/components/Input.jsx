import { InputLayout, StyledInput } from './styles';

export default function Input({ text, id, ...props }) {
  return (
    <InputLayout>
      <div className="label-box">
        <label htmlFor={id} className="label-text">
          {text && text}
        </label>
      </div>
      <StyledInput id={id} {...props} />
    </InputLayout>
  );
}
