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
      .get(fetchTarget.serverUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuQnBWQUNya3B5cmpUWS1jY0ZXSW5PMG5qOUhpM2U2ZzNHR0ZLVWRPWGxVIn0.eyJleHAiOjE2OTYwOTkyNjcsImlhdCI6MTY5NjA5ODk2NywianRpIjoiYWVmMzRiNDYtMzQyNC00ZWY3LThiNDEtOTliZDA5ODc3MDFkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9lY29tbWVyY2UiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYmFmNjZkOTYtOTYyYy00ZGIyLThlYzItZDVmNGM5MjY3ZGYwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibG9naW4tYXBwIiwic2Vzc2lvbl9zdGF0ZSI6ImQ4NTlhYzIwLTZiYmMtNDZiYy05NWZiLTY5ZTdmNTc0N2E3ZiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1lY29tbWVyY2UiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImQ4NTlhYzIwLTZiYmMtNDZiYy05NWZiLTY5ZTdmNTc0N2E3ZiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiVXdVIDY5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidXNlcjEiLCJnaXZlbl9uYW1lIjoiVXdVIiwiZmFtaWx5X25hbWUiOiI2OSIsImVtYWlsIjoibnVsbEBudWxsLm51bGwifQ.ARE2SkSHOc0RiKhK0fw82GR43Whk_nVAWT3eFWdBqhRwSE3NDweGhcUo0VR5rgoC3Jp3lCW1kbOcrGZ9DaPQ_aUk203N7osgzu_dDPAHGAt6NPfdik8MeRZAqFHVrYv5H_yMN1YwHxSMI91Sds1HB3cqSa3bN3jycrEsaPhLwcCcrBxPuU82C9OPmkVYOpM4-vdxHcCBcmUmvCZd3HZyfMisxNKj-Ra1UQCPCsQn9br9XJyaNOMtXgEYmBrWDeRpyHLEUydxs7VTnkSCTx05x9IivtXknUliiZoJRWYsWuFqRbWHKTaVJUouTj1LaxpTGmJYitq4rJR_w7IpjBWv7A",
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
