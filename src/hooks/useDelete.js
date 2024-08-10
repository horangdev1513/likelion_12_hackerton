import { useEffect, useState } from 'react';
import { authHttp } from '../api/auth/authHttp';
import { FAILED_DATA_FETCHING } from '../data/constants';

export function useDelete(url, onSuccess) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function deleteData() {
    setIsLoading(true);
    try {
      const res = await authHttp.delete(`${url}`);

      if (onSuccess) onSuccess();
      setFethedData(res.data);
    } catch (err) {
      setError({
        message: err.response || FAILED_DATA_FETCHING,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    deleteData,
    error,
  };
}
