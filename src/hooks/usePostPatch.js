import { useState } from 'react';
import { authHttp } from '../api/auth/authHttp';

export function usePostPatch() {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  async function dataFatch(url, postId, content) {
    setIsLoading(true);
    try {
      const res = authHttp.patch(url, {
        id: postId,
        content,
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
