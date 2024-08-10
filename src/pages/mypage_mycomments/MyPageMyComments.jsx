import { useAtom, useAtomValue } from 'jotai';

import { readUserNickName, userComments } from '../../atoms';

import { useDataFetch } from '../../hooks/useDataFetch';

// components
import Header from './Header';
import MyCommentsBox from './MyPageMyCommentsBox';
import { PageLoading } from '../../components/loading';
import MyPageMyCommentsNonContent from './MyPageMyCommentsNonContent';

export function MyPageMyComments() {
  // const [{ data, isPending, isError }] = useAtom(userComments);
  const userNickName = useAtomValue(readUserNickName);
  const { isLoading, fetchedData, error, refetch } = useDataFetch(`comments/user/${userNickName}`);

  function handleDeleteSuccess() {
    refetch();
  }

  return (
    <>
      <Header />
      {isLoading && <PageLoading />}
      {!isLoading && fetchedData.length === 0 && <MyPageMyCommentsNonContent />}
      {!isLoading &&
        fetchedData.length > 0 &&
        fetchedData.map(prod => {
          return (
            <MyCommentsBox key={prod.id} comment={prod.comment} id={prod.id} onDeleteSuccess={handleDeleteSuccess} />
          );
        })}
    </>
  );
}
