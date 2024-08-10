import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAtomValue, useSetAtom } from 'jotai';

import { useInput } from '../../hooks';
import { isNotEmpty } from '../../utils/validation';
import { authHttp } from '../../api/auth/authHttp';
import { readUserId, readUserNickName, readUserToday, successModalOpenHandler, writeUserToday } from '../../atoms';
import { CREATEPOST_SUCCESS_MESSAGE, MAIN_PAGE_TRUE } from '../../data/constants';

import { LargeButton } from '../../components/buttons';
import { LargeLoadingButton } from '../../components/buttons';

export default function CreatePostInput() {
  const [isLoading, setIsLoadging] = useState(null);
  const { value: postValue, blurHandler, inputHandler, hasError } = useInput('', isNotEmpty);

  const userTodayHandler = useSetAtom(writeUserToday);
  const successModalHandler = useSetAtom(successModalOpenHandler);
  const userNicKName = useAtomValue(readUserNickName);
  const userId = useAtomValue(readUserId);
  const userToday = useAtomValue(readUserToday);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToday === true) {
      navigate(MAIN_PAGE_TRUE);
    }
  }, [userToday, navigate]);

  async function submitHandler(e) {
    e.preventDefault();

    if (!isNotEmpty(postValue)) return;

    setIsLoadging(true);
    try {
      const createPostResponse = await authHttp.post('/posts', {
        id: userId,
        content: postValue,
        memberNickname: userNicKName,
        commentCount: 0,
      });

      const userUpdateResponse = await authHttp.patch('/members/update', {
        today: true,
      });

      userTodayHandler(true);
      successModalHandler({
        text: CREATEPOST_SUCCESS_MESSAGE,
        path: MAIN_PAGE_TRUE,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadging(false);
    }
  }
  return (
    <>
      <Layout>
        <TextInput
          maxLength={300}
          onBlur={blurHandler}
          onChange={inputHandler}
          value={postValue}
          placeholder="오늘은 어땠나요? 글을 작성해주세요 (300글자)"
        />
        <p className="text-length">{postValue.length} / 300</p>
        {hasError && <p className="warning-message">입력창에 글을 입력해주세요</p>}
      </Layout>
      <ButtonBox>
        {!isLoading ? <LargeButton text="글쓰기" onClick={submitHandler} /> : <LargeLoadingButton />}
      </ButtonBox>
    </>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 40%;

  background-color: white;
  font-family: NanumSquareRound;

  & .text-length {
    text-align: right;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  & .warning-message {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextInput = styled.textarea`
  width: 80%;
  border: 2px solid ${({ theme }) => theme.color.main};
  border-radius: 5px;

  height: 100px;
  resize: none;
  margin: 10% auto;

  outline-color: ${({ theme }) => theme.color.main};
  font-family: NanumSquareRound;
`;

const ButtonBox = styled.div`
  width: 100%;

  margin-top: 20%;
  font-family: NanumSquareRound;
`;
