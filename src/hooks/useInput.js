import { useState } from 'react';

export function useInput(value, validationFn) {
  const [enteredValue, setEnteredValue] = useState(value);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function inputHandler(e) {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  }

  function blurHandler() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    inputHandler,
    blurHandler,
    hasError: didEdit && !valueIsValid,
  };
}
