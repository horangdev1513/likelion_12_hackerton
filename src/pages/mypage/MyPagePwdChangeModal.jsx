import { forwardRef } from 'react';
import styled from 'styled-components';

import Input from '../../components/Input';
import { useInput } from '../../hooks';
import { isNotEmpty, isEqualsToOtherValue, hasMaxLength, hasMinLength } from '../../utils';

const MyPagePwdChangeModal = forwardRef(function MyPagePwdChangeModal(props, ref) {
  const {
    value: passwordValue,
    inputHandler: passwordInputHandler,
    blurHandler: passwordBlurHandler,
    hasError: passwordHasError,
  } = useInput('', value => hasMinLength(value, 6) && isNotEmpty(value));

  const {
    value: passwordConfirmValue,
    inputHandler: passwordConfirmInputHandler,
    blurHandler: passwordConfirmBlurHandler,
    hasError: passwordConfirmHasError,
  } = useInput('', value => hasMinLength(value, 6) && isNotEmpty(value));

  return (
    <StyledModal ref={ref}>
      <p>테스트</p>
      <Input
        text="새로운 비밀번호"
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={passwordInputHandler}
        onBlur={passwordBlurHandler}
        value={passwordValue}
        error={passwordHasError && '잘못된 비밀번호 형식입니다.'}
      />

      <Input
        text="비밀번호 확인"
        id="confirm-password"
        type="password"
        name="confirm-password"
        placeholder="비밀번호를 다시 입력해주세요"
        onChange={passwordConfirmInputHandler}
        onBlur={passwordConfirmBlurHandler}
        value={passwordConfirmValue}
        error={passwordConfirmHasError && '잘못된 비밀번호 형식입니다.'}
      />
      <div className="button-box">
        <StyledButton>취소</StyledButton>
        <StyledButton>변경</StyledButton>
      </div>
    </StyledModal>
  );
});

const StyledModal = styled.dialog`
  max-width: 320px;

  width: 100%;
  height: 50%;

  border-radius: 15px;
  border-color: #d9d9d9;
  font-family: NanumSquareRound;

  & .button-box {
    width: 100%;

    display: flex;
    justify-content: space-evenly;
  }
`;

const StyledButton = styled.button`
  width: 30%;
  height: 50px;

  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.color.main};
  font-family: NanumSquareRound;

  color: white;
`;

export default MyPagePwdChangeModal;
