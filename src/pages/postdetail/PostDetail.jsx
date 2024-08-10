import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// atoms
import { postsAtom, postIdAtomHandler } from '../../atoms';

// components
import PostDetailContentBox from './PostDetailContentBox';
import PostDetailInput from './PostDetailInput';
import PostDetailCommentBox from './PostDetialCommentBox';
import { ThreeDots } from 'react-loader-spinner';

export function PostDetail() {
  const param = useParams();
  const [{ data: postData, isPending: isPostPending, isError: isPostError }] = useAtom(postsAtom);
  const postIdHandler = useSetAtom(postIdAtomHandler);

  useEffect(() => {
    postIdHandler(parseInt(param.id));
  }, [param.id, postIdHandler]);

  if (isPostPending) {
    return (
      <Layout>
        <ThreeDots ariaLabel="three-dots-loading" color="#4A90E2" />
      </Layout>
    );
  }

  if (isPostError) return <p>Error</p>;

  return (
    <>
      <PostDetailContentBox
        nickName={postData.memberNickname}
        content={postData.content}
        commentCount={postData.commentCount}
      />
      <PostDividingLine />
      <PostDetailInput />
      <PostDetailCommentBox />
    </>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostDividingLine = styled.hr`
  width: 100%;
  display: block;
`;
