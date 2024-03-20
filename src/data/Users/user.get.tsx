import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TUsers } from "types-sssh";
import { useRouter } from "@tanstack/react-router";
import useApiRetry from "../api/useApiRetry.hook";


export default function useGetUserQuery(id: string): UseQueryResult<TUsers> {
  const router = useRouter();

  return useQuery<TUsers>({
    queryKey: ['user', id],
    queryFn: useApiRetry(`/users/${id}`, "GET", undefined, router.history.back),
    staleTime: 60000
  });
}