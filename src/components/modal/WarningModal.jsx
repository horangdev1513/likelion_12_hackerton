import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { CiWarning } from 'react-icons/ci';
import { modalCloseHandler, readModalIsOpen, readModalText } from '../../atoms/modalAtoms';
import { useAtomValue, useSetAtom } from 'jotai';
import { ModalButton } from '../buttons';

export function WarningModal() {
  const dialog = useRef(null);

  const isOpend = useAtomValue(readModalIsOpen);
  const modalText = useAtomValue(readModalText);
  const modalClose = useSetAtom(modalCloseHandler);

  useEffect(() => {
    if (isOpend) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpend]);

  return (
    <LoginDialog ref={dialog}>
      <div className="warning-info">
        <CiWarning size={50} color="red" className="warning-icon" />
        <p>{modalText}</p>
      </div>
      <div className="button-box">
        <ModalButton text="닫기" onClick={modalClose}></ModalButton>
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
