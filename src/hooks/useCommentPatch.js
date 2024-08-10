import { useState } from 'react';
import { authHttp } from '../api/auth/authHttp';

export function useCommentPatch() {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  async function dataFatch(url, commentId, comment, nickname) {
    setIsLoading(true);
    try {
      const res = authHttp.patch(url, {
        id: commentId,
        comment,
        nickname,
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    dataFatch,
    error,
  };
}
