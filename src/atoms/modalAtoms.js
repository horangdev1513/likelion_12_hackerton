import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

const modalAtom = atomWithImmer({ isOpen: false, modaltext: null });

const successModalAtom = atomWithImmer({ isOpen: false, modaltext: null, redirection: null });

export const readModalIsOpen = atom(get => get(modalAtom).isOpen);

export const readModalText = atom(get => get(modalAtom).modaltext);

export const readSuccessModalIsOpen = atom(get => get(successModalAtom).isOpen);

export const readSuccessModalText = atom(get => get(successModalAtom).modaltext);

export const readSuccessModalRedirection = atom(get => get(successModalAtom).redirection);

export const modalOpenHandler = atom(null, (get, set, update) => {
  set(modalAtom, draft => {
    draft.isOpen = true;
    draft.modaltext = update;
  });
});

export const modalCloseHandler = atom(null, (get, set, update) => {
  set(modalAtom, draft => {
    draft.isOpen = false;
    draft.modaltext = null;
  });
});

export const successModalOpenHandler = atom(null, (get, set, update) => {
  set(successModalAtom, modal => {
    modal.isOpen = true;
    modal.modaltext = update.text;
    modal.redirection = update.path;
  });
});

export const successModalCloseHandler = atom(null, (get, set, update) => {
  set(successModalAtom, modal => {
    modal.isOpen = false;
    modal.modaltext = null;
    modal.redirection = null;
  });
});
