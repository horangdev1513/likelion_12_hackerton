import { useState } from 'react';

import Input from '../../components/Input';
import { LargeButton } from '../../components/Button';
import { FormLayout } from './styles';

export default function Form() {
  const [eneterdValues, setEnteredValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    profileName: '',
  });
  const [notEqualPassword, setNotEqualPassword] = useState(false);

  function inputValueHandler(indetifier, e) {
    setEnteredValues(prev => ({
      ...prev,
      [indetifier]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    if (eneterdValues.password !== eneterdValues.confirmPassword) {
      setNotEqualPassword(true);
      return;
    }

    setNotEqualPassword(false);
    console.log(eneterdValues);
  }

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
            onChange={e => inputValueHandler('email', e)}
          />
          <Input
            text="비밀번호"
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={e => inputValueHandler('password', e)}
          />
          <Input
            text="비밀번호 확인"
            id="confirm-password"
            type="password"
            name="confirm-password"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={e => inputValueHandler('confirmPassword', e)}
          />
          {notEqualPassword && <p className="waring-message">비밀번호가 동일하지 않습니다 다시입력해주세요</p>}
          <Input
            text="프로필 이름"
            id="profile"
            type="text"
            name="profile"
            placeholder="사용할 이름을 입력해주세요"
            onChange={e => inputValueHandler('profileName', e)}
          />

          <div className="buttonbox">
            <LargeButton text="로그인" onClick={submitHandler} />
          </div>
        </form>
      </FormLayout>
    </>
  );
}
