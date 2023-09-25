import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(initialState: any) {


  const [fetchTarget, setFetchTarget] = useState(initialState);
  const info = fetchTarget;
  const [error, setError] = useState(undefined);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(fetchTarget.serverUrl, { params: fetchTarget.params })
      .then(function (response:any) {
        // handle success
        setResponse(response.data);
      })
      .catch(function (error:any) {
        // handle error
        setError(error)
      })
      .finally(function () {
        // always executed
        setLoading(false)
      });
  }, [fetchTarget.params]);

  return [{info, error, response, loading}, setFetchTarget]
}
