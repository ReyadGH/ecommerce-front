import axios from "axios";
import { useEffect, useState } from "react";
import fetchTargetType from "../types/fetchTargetType";

export function useFetchData(initialState: fetchTargetType) {


  const [fetchTarget, setFetchTarget] = useState(initialState);
  const info = fetchTarget;
  const [error, setError] = useState(undefined);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(fetchTarget.serverUrl, { params: fetchTarget.params })
      .then(function (response) {
        // handle success
        setResponse(response.data);
      })
      .catch(function (error) {
        // handle error
        setError(error)
      })
      .finally(function () {
        // always executed
        setLoading(false)
      });
  }, [fetchTarget.params,fetchTarget.serverUrl]);

  return [{info, error, response, loading}, setFetchTarget]
}
