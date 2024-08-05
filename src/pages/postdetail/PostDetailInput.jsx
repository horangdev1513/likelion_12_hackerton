import styled from 'styled-components';

// components
import Input from '../../components/Input';
import { useAtom, useAtomValue } from 'jotai';
import { commentMutationAtom } from '../../atoms/commentAtoms';
import { useRef } from 'react';
import { readUserNickName } from '../../atoms';

export default function PostDetailInput() {
  const userInput = useRef(null);
  const userNickName = useAtomValue(readUserNickName);
  const [{ mutate, status }] = useAtom(commentMutationAtom);

  function submitHandler() {
    const userInputValue = userInput.current.value;

    if (userInputValue) {
      mutate({
        comment: userInputValue,
        nickname: userNickName,
      });
      userInput.current.value = '';
    } else {
      userInput.current.focus();
    }
  }

  return (
    <Layout>
      <div className="input-box">
        <StyledInput ref={userInput} />
        <SubmitButton onClick={submitHandler}>등록</SubmitButton>
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;

  display: flex;

  & .input-box {
    width: 100%;
    margin: 0 auto;
  }
`;

const SubmitButton = styled.button`
  width: 50px;
  height: 30px;

  background-color: ${({ theme }) => theme.color.main};
  border: none;
  border-radius: 15px;
  font-family: NanumSquareRound;

  margin-left: 10px;

  color: white;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 30px;

  border: none;
  border-radius: 15px;
`;
