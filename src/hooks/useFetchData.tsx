import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import fetchTargetType from "../types/fetchTargetType";
import { useSession } from "next-auth/react";
import fetchDataType from "../types/fetchDataType";

export function useFetchData(initialState: fetchTargetType): [fetchDataType,Dispatch<SetStateAction<fetchTargetType>>] {
  const {data: session, status} = useSession() 
  const [fetchTarget, setFetchTarget] = useState(initialState);
  const info = fetchTarget;
  const [error, setError] = useState(undefined);
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get(fetchTarget.serverUrl, {
        headers: {
          Authorization:
            `Bearer ${(session!=null && session.accessToken)?session.accessToken:""}`,
        },
        params: fetchTarget.params,
      })
      .then(function (response) {
        // handle success
        setResponse(response.data);
      })
      .catch(function (error) {
        // handle error
        setError(error);
      })
      .finally(function () {
        // always executed
        setLoading(false);
      });
  }, [fetchTarget.params, fetchTarget.serverUrl]);

  return [{ info, error, response, loading }, setFetchTarget];
}
