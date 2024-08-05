import { useInput, useLogin } from '../../hooks';

// components
import Input from '../../components/Input';
import { LargeButton, LargeLoadingButton } from '../../components/buttons';
import { FormLayout } from './styles';
import { hasMaxLength, isNotEmpty, hasMinLength } from '../../utils/validation';

export default function Form() {
  const {
    value: emailValue,
    blurHandler: emailBlurHandler,
    inputHandler: emailInputHanlder,
    hasError: emailHasError,
  } = useInput('', value => hasMinLength(value, 3) && isNotEmpty(value) && hasMaxLength(value, 10));

  const {
    value: passwordValue,
    blurHandler: pwdBlurHandler,
    inputHandler: pwdInputHanlder,
    hasError: pwdHasError,
  } = useInput('', value => hasMinLength(value, 6) && isNotEmpty(value));

  const blankValidation = !isNotEmpty(emailValue) || !isNotEmpty(passwordValue);
  const hasErorValidation = emailHasError || pwdHasError;

  const { isSubmitting, loginHandler } = useLogin(blankValidation, hasErorValidation, {
    loginId: emailValue,
    password: passwordValue,
  });

  return (
    <>
      <FormLayout>
        <form>
          <Input
            text="이메일"
            id="email"
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={emailInputHanlder}
            onBlur={emailBlurHandler}
            value={emailValue}
            error={emailHasError && '잘못된 이메일 형식입니다.'}
          />

          <Input
            text="비밀번호"
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요(6자리이상)"
            onChange={pwdInputHanlder}
            onBlur={pwdBlurHandler}
            value={passwordValue}
            autoComplete="off"
            error={pwdHasError && '잘못된 비밀번호 형식입니다.'}
          />

          <div className="buttonbox">
            {!isSubmitting ? <LargeButton text="로그인" onClick={e => loginHandler(e)} /> : <LargeLoadingButton />}
          </div>
        </form>
      </FormLayout>
    </>
  );
}
