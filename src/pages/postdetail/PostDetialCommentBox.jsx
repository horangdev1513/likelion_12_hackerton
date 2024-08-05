import { useSetAtom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { commentAllAtom, commentIdAtomHandler } from '../../atoms/commentAtoms';
import PostDetailNonContent from './PostDetailNonContent';
import { PageLoading } from '../../components/loading';

export default function PostDetailCommentBox() {
  const param = useParams();
  const [{ data: commentData, isPending: isCommentPending, isError: isCommnetError }] = useAtom(commentAllAtom);
  const commentIdHandler = useSetAtom(commentIdAtomHandler);

  useEffect(() => {
    commentIdHandler(parseInt(param.id));
  }, [param.id, commentIdHandler]);

  if (isCommentPending) return <PageLoading />;
  if (isCommnetError) return <p>에러</p>;
  return (
    <>
      {commentData.length === 0 && <PostDetailNonContent />}
      {commentData.map(prod => {
        return (
          <CommentBox key={prod.id}>
            <div className="nickname-box">
              <p className="nickname">{prod.nickname}</p>
            </div>
            <div className="comment-box">
              <p className="comment">{prod.comment}</p>
            </div>
          </CommentBox>
        );
      })}
    </>
  );
}

const CommentBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px 0;
  border-bottom: 2px solid;
  border-radius: 5px;
  border-color: #d9d9d9;
  & .nickname-box {
    width: 100%;

    padding: 5px 10px;

    & .nickname {
      font-weight: ${({ theme }) => theme.fontWeight.xl};
      font-size: ${({ theme }) => theme.fontSize.m};
      font-family: NanumSquareRound;
    }
  }

  & .comment-box {
    width: 100%;
    margin-top: 10px;
    font-family: NanumSquareRound;

    & .comment {
      width: 100%;
      padding: 5px 10px;
    }
  }
`;
