import axios from "axios";
import { useEffect, useState } from "react";

type fetchInfo = {
  serverUrl: string;
  params?: object;
};

export async function useFetchData(fetchInfo: fetchInfo) {
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(fetchInfo.serverUrl , {params : fetchInfo.params})
      .then(function (response) {
        // handle success
        //console.log(response);
        setApiData(response.data);
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        setError(error);
      })
      .finally(function () {
        // always executed
        setLoaded(true);
      });
  }, [fetchInfo.params, fetchInfo.serverUrl]);

  return { error, apiData, loaded };
}
