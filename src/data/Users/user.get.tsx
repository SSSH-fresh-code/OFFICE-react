import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TUsers } from "types-sssh";
import useApi from "../api/useApi.hook";
import { useRouter } from "@tanstack/react-router";


export default function useGetUserQuery(id: string): UseQueryResult<TUsers> {
  const router = useRouter();

  return useQuery<TUsers>({
    queryKey: ['user', id],
    queryFn: useApi(`/users/${id}`, "GET", undefined, false, router.history.back),
    staleTime: 60000
  });
}