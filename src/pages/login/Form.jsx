import { useState } from 'react';

import Input from '../../components/Input';
import { LargeButton } from '../../components/Button';
import { FormLayout } from './styles';
export default function Form() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  function inputValueHandler(indetifier, e) {
    setValues(prev => ({
      ...prev,
      [indetifier]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    console.log(values);
  }
  return (
    <FormLayout>
      <form onSubmit={submitHandler}>
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
        <div className="buttonbox">
          <LargeButton text="로그인" onClick={submitHandler} />
        </div>
      </form>
    </FormLayout>
  );
}
