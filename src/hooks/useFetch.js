import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMesange, setErrorMesange] = useState("");
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => setErrorMesange(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, isLoading, errorMesange];
};

export default useFetch;
