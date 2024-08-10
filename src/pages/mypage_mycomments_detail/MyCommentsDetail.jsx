import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDataFetch } from '../../hooks/useDataFetch';
import { useCommentPatch } from '../../hooks/useCommentPatch';

import { PageLoading } from '../../components/loading';
import MyCommentsDetailEditBox from './MyCommentsDetailEditBox';

export function MyCommentsDetail() {
  const param = useParams();
  const navigate = useNavigate();
  const { isLoading, fetchedData, error: getError } = useDataFetch(`comments/${param.id}`);
  const { isLoading: patchLoading, dataFatch, error: patchError } = useCommentPatch();
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (fetchedData) {
      setComment(fetchedData.comment);
    }
  }, [fetchedData]);

  const handleSave = async () => {
    try {
      await dataFatch(`comments/update/${param.id}`, param.id, comment, fetchedData?.nickname);
      navigate(-1);
    } catch (error) {
      
    }
  };

  return (
    <>
      {isLoading && <PageLoading />}
      {!isLoading && (
        <MyCommentsDetailEditBox
          comment={comment}
          onClick={handleSave}
          onChange={e => setComment(e.target.value)}
          isLoading={patchLoading}
        />
      )}
    </>
  );
}
