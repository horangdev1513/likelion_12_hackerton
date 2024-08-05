import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { CiCircleCheck } from 'react-icons/ci';
import {
  readSuccessModalIsOpen,
  readSuccessModalRedirection,
  readSuccessModalText,
  successModalCloseHandler,
} from '../../atoms/modalAtoms';
import { useAtomValue, useSetAtom } from 'jotai';
import { ModalButton } from '../buttons';
import { useNavigate } from 'react-router-dom';

export function SuccessModal() {
  const dialog = useRef(null);

  const navigate = useNavigate();

  const isOpend = useAtomValue(readSuccessModalIsOpen);
  const modalText = useAtomValue(readSuccessModalText);
  const redirectionPath = useAtomValue(readSuccessModalRedirection);
  const modalClose = useSetAtom(successModalCloseHandler);

  useEffect(() => {
    if (isOpend) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpend]);

  function modalCloseHandler() {
    navigate(redirectionPath);
    modalClose();
  }
  return (
    <LoginDialog ref={dialog}>
      <div className="warning-info">
        <CiCircleCheck size={50} color="green" className="warning-icon" />
        <p>{modalText}</p>
      </div>
      <div className="button-box">
        <ModalButton text="완료" onClick={modalCloseHandler}></ModalButton>
      </div>
    </LoginDialog>
  );
}

const LoginDialog = styled.dialog`
  max-width: 320px;
  width: 100%;
  height: 30%;

  border: 3px solid rgba(74, 144, 226, 1);
  border-radius: 10px;

  & .warning-info {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .button-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.::backdrop {
    background: rgba(0, 0, 0, 0.9);
  }
`;
