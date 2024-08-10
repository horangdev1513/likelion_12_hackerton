import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import Header from './Header';
import MyPageMyPostsPostBox from './MyPageMyPostsPostBox';
import styled from 'styled-components';
import { MY_PAGE_MYPOSTS } from '../../data/constants';
import { readUserNickName, userPosts } from '../../atoms';
import { useDataFetch } from '../../hooks';
import { PageLoading } from '../../components/loading';
import MyPageMyPostsNonContent from './MyPageMyPostsNonContent';

export function MyPageMyPosts() {
  const userNickName = useAtomValue(readUserNickName);
  const { isLoading, fetchedData, error, refetch } = useDataFetch(`posts/user/${userNickName}`);
  // const [{ data, isPending, isError }] = useAtom(userPosts);

  // if (isPending) return <p>로딩중</p>;

  function handleDeleteSuccess() {
    refetch();
  }

  return (
    <>
      <Header />
      {isLoading && <PageLoading />}
      {!isLoading && fetchedData.length === 0 && <MyPageMyPostsNonContent />}
      {!isLoading &&
        fetchedData.length > 0 &&
        fetchedData.map((prod, index) => (
          <MyPageMyPostsPostBox
            key={prod.id}
            text={prod.content}
            id={prod.id}
            onDeleteSuccess={handleDeleteSuccess}
            hideButton={index === 0}
          />
        ))}
    </>
  );
}

const StyledLink = styled(Link)`
  width: 100%;
`;
