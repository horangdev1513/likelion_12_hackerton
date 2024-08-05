import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDataFetch } from '../../hooks/useDataFetch';
import { usePostPatch } from '../../hooks/usePostPatch';

import { PageLoading } from '../../components/loading';
import MyPostsDetailEditBox from './MyPostsDetailEditBox';

export function MyPostsDetail() {
  const param = useParams();
  const navigate = useNavigate();
  const { isLoading, fetchedData, error: getError } = useDataFetch(`posts/${param.id}`);
  const { isLoading: patchLoading, dataFatch, error: patchError } = usePostPatch();
  const [post, setPost] = useState('');

  useEffect(() => {
    if (fetchedData) {
      setPost(fetchedData.content);
    }
  }, [fetchedData]);

  const handleSave = async () => {
    try {
      await dataFatch(`posts/update/${param.id}`, param.id, post);
      navigate(-1);
    } catch (error) {}
  };

  return (
    <>
      {isLoading && <PageLoading />}
      {!isLoading && <MyPostsDetailEditBox text={post} onClick={handleSave} onChange={e => setPost(e.target.value)} />}
    </>
  );
}
