import { useEffect, useState } from 'react';
import { authHttp } from '../api/auth/authHttp';
import { FAILED_DATA_FETCHING } from '../data/constants';

export function useDataFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFethedData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await authHttp.get(`${url}`);
      setFethedData(res.data);
    } catch (err) {
      setError({
        message: err.response.data || FAILED_DATA_FETCHING,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    isLoading,
    fetchedData,
    error,
    refetch: fetchData,
  };
}
