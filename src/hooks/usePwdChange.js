import { useState } from 'react';

import { autHttp } from '../api/auth';

export function usePwdChage() {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function changePwd() {
    setIsLoading(true);
    try {
      const res = await autHttp.patch('/members/update', {
        
      });

      console.log(res);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    success,
  };
}
