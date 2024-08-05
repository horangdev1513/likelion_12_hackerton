import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';

import { modalOpenHandler, writeUserInfo } from '../atoms';
import { BLANK_INPUT_WARNING, MAIN_PAGE, FAILED_LOGIN } from '../data/constants';
import { instance } from '../api/non-auth';

export function useLogin(firstValidation, secondValidation, loginData) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const warningModalOpen = useSetAtom(modalOpenHandler);
  const userDataHandler = useSetAtom(writeUserInfo);

  const navigate = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();

    if (firstValidation) {
      warningModalOpen(BLANK_INPUT_WARNING);
      return;
    }

    if (secondValidation) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await instance.post('/members/login', loginData);
      sessionStorage.setItem('token', data.token);
      userDataHandler({
        today: data.member.today,
        nickname: data.member.nickname,
        id: data.member.id,
      });
      navigate(MAIN_PAGE + `?today=${data.member.today}`);
    } catch (err) {
      warningModalOpen(err.response.data.error || FAILED_LOGIN);
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    isSubmitting,
    loginHandler,
  };
}
