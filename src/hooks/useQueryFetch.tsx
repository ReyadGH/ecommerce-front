import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";

type useQueryFetchType = {
  url: string;
  key: string | readonly unknown[];
};

export function useQueryFetch(query: useQueryFetchType) {
  return useQuery({
    queryKey: [query.key],
    queryFn: async () =>
      axios
        .get(query.url, {
          headers: {
            Authorization:
              "Bearer " +
              (await getSession().then((session) => {
                return session?.accessToken;
              })),
          },
        })
        .then((res) => res.data),
  });
}
