import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = '';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
      };

    const fetchData = async () => {
      setIsLoading(true);

      try {
          const { data } = await axios.request(options);
          setData(data.data);
          setIsLoading(false);
          setError(null)
      } catch (error) {
        setError(error);
        alert("There is an error");
      } finally {
        setIsLoading(false);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };

    return {
      data,
      isLoading,
      error,
      refetch
    }
}

export default useFetch;