import { useState } from 'react';
import { successModalOpenHandler, readSuccessModalIsOpen, modalOpenHandler } from '../atoms';
import { useAtomValue, useSetAtom } from 'jotai';
import { BLANK_INPUT_WARNING, SIGNUP_SUCESS_MESSAGE, FAILED_SIGNUP } from '../data/constants';
import { instance } from '../api/non-auth';

export function useSignup(firstValidation, secondValidation, inputData) {
  const [notEqualPassword, setNotEqualPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState();

  const successModalOpen = useSetAtom(successModalOpenHandler);
  const warningModelOpen = useSetAtom(modalOpenHandler);

  async function submitHandler(e) {
    e.preventDefault();

    if (firstValidation) {
      warningModelOpen(BLANK_INPUT_WARNING);
      return;
    }

    if (secondValidation) {
      return;
    }

    if (inputData.password !== inputData.passwordCheck) {
      setNotEqualPassword(true);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await instance.post('/members/join', inputData);
      successModalOpen({ text: res.data || SIGNUP_SUCESS_MESSAGE, path: '/login' });
    } catch (err) {
      warningModelOpen(err.response.data || FAILED_SIGNUP);
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    submitHandler,
    notEqualPassword,
    isSubmitting,
  };
}
