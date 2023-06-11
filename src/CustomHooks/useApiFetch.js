import { useState } from 'react';

const useApiFetch = () => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = async (url,requestOptions = {}) => {
    console.log('requestOptions', requestOptions)
    setIsLoading(true);
    try {
      const response = await fetch(url, requestOptions);
      const json = await response.json();
      setResponseData(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, responseData, fetchData };
};

export default useApiFetch;
