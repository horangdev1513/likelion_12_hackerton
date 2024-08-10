import styled from 'styled-components';

export default function Input({ text, id, error, ...props }) {
  return (
    <InputLayout>
      <div className="label-box">
        <label htmlFor={id} className="label-text">
          {text && text}
        </label>
      </div>
      <StyledInput id={id} {...props} />
      <p className="error-message">{error && error}</p>
    </InputLayout>
  );
}

const InputLayout = styled.div`
  width: 100%;
  height: 75px;
  margin-bottom: 30px;

  & .label-box {
    margin: 3px;
  }

  & .label-text {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.l};
    font-family: NanumSquareRound;
  }

  & .error-box {
    margin: 10px 0;
  }

  & .error-message {
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.l};
    font-family: NanumSquareRound;
    color: red;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
`;
