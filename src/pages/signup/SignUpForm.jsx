import Input from '../../components/Input.jsx';
import { FormLayout } from './styles.js';
import { LargeButton } from '../../components/buttons/LargeButton.jsx';

import { hasMaxLength, hasMinLength, isEmail, isNotEmpty } from '../../utils/validation.js';

import { useInput } from '../../hooks/index.js';
import { useSignup } from '../../hooks/index.js';
import { LargeLoadingButton } from '../../components/buttons/LargeLoadingButton.jsx';

export default function Form() {
  const {
    value: emailValue,
    blurHandler: emailBlurHandler,
    inputHandler: emailInputHanlder,
    hasError: emailHasError,
  } = useInput('', value => hasMinLength(value, 3) && isNotEmpty(value) && hasMaxLength(value, 10));

  const {
    value: passwordValue,
    blurHandler: passwordBlurHandler,
    inputHandler: passwordInputHandler,
    hasError: passwordHasError,
  } = useInput('', value => hasMinLength(value, 6) && isNotEmpty(value));

  const {
    value: passwordConfirmValue,
    blurHandler: passwordConfirmBlurHandler,
    inputHandler: passwordConfirmInputHandler,
    hasError: passwordConfirmHasError,
  } = useInput('', value => hasMinLength(value, 6) && isNotEmpty(value));

  const {
    value: nickNameValue,
    blurHandler: nickNameValueBlurHandler,
    inputHandler: nickNameValueInputHandler,
    hasError: nickNameHasError,
  } = useInput('', value => hasMinLength(value, 3) && isNotEmpty(value) && hasMaxLength(value, 6));

  // 검증
  const blankValidation =
    !isNotEmpty(emailValue) ||
    !isNotEmpty(passwordValue) ||
    !isNotEmpty(passwordConfirmValue) ||
    !isNotEmpty(nickNameValue);
  const hasErrorValidation = emailHasError || passwordHasError || passwordConfirmHasError || nickNameHasError;

  const { submitHandler, notEqualPassword, isSubmitting } = useSignup(blankValidation, hasErrorValidation, {
    loginId: emailValue,
    password: passwordValue,
    passwordCheck: passwordConfirmValue,
    nickname: nickNameValue,
  });

  return (
    <>
      <FormLayout>
        <form>
          <Input
            text="아이디"
            id="id"
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요(3-10글자)"
            onChange={emailInputHanlder}
            onBlur={emailBlurHandler}
            value={emailValue}
            error={emailHasError && '잘못된 아이디 형식입니다.'}
          />
          <Input
            text="비밀번호"
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
          {notEqualPassword && <p className="waring-message">비밀번호가 동일하지 않습니다 다시입력해주세요</p>}
          <Input
            text="프로필 이름"
            id="profile"
            type="text"
            name="profile"
            placeholder="사용할 이름을 입력해주세요(3-6글자)"
            onChange={nickNameValueInputHandler}
            onBlur={nickNameValueBlurHandler}
            value={nickNameValue}
            error={nickNameHasError && '잘못된 닉네임 형식입니다.'}
          />

          <div className="buttonbox">
            {!isSubmitting ? <LargeButton text="회원가입" onClick={e => submitHandler(e)} /> : <LargeLoadingButton />}
          </div>
        </form>
      </FormLayout>
    </>
  );
}
