import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';
import { postsAllAtom } from '../../atoms';
import PostBox from './PostListPostBox';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function PostList() {
  const [{ data, isPending, isError }] = useAtom(postsAllAtom);

  if (isPending) {
    return (
      <Layout>
        <ThreeDots ariaLabel="three-dots-loading" color="#4A90E2" />
      </Layout>
    );
  }
  if (isError) return <p>에러...</p>;

  return (
    <>
      {data.map(prod => {
        return (
          <StyledLink to={`/app/posts/${prod.id}`} key={prod.id}>
            <PostBox content={prod.content} memberNickname={prod.memberNickname} commentCount={prod.commentCount} />
          </StyledLink>
        );
      })}
    </>
  );
}

const StyledLink = styled(Link)`
  width: 100%;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: NanumSquareRound;
`;
