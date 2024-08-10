import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { todayUserPost } from '../../../atoms';

export default function TodayPost() {
  const [{ data, isPending, isError }] = useAtom(todayUserPost);

  if (isError) return <p>에러...</p>;

  const todayPost = data && data.length > 0 ? data[0] : null;

  return (
    <>
      {isPending && (
        <LoadingBox>
          <RotatingLines visible={true} width="30" height="30" color="white" strokeColor="rgba(74, 144, 226, 1)" />
        </LoadingBox>
      )}
      {!isPending && todayPost && (
        <Layout>
          <UserData>
            <img src="" />
            <p>{todayPost.memberNickname}</p>
          </UserData>
          <UserPost>
            <p className="text">{todayPost.content}</p>
          </UserPost>
        </Layout>
      )}
      {!isPending && !todayPost && <p>게시물이 없습니다.</p>}
    </>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 90%;

  margin-top: 10px;
  background-color: white;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
`;

const UserData = styled.div`
  width: 100%;
  height: 10%;

  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserPost = styled.section`
  width: 100%;
  height: 90%;

  border-radius: 15px;
  margin-top: 10px;
  padding: 0 15px;

  overflow: scroll;

  background-color: white;

  & .text {
    height: 100%;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.xs};
    font-family: NanumSquareRound;

    line-height: 24px;
  }
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
