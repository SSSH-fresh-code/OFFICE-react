import { TAuths } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";

export default function useGetAuthsAllQuery(): UseQueryResult<TAuths[]> {
  const getAuths = useApiRetry(`/auths/all`, "GET")

  return useQuery<TAuths[]>({ queryKey: ['getAuthsAll'], queryFn: getAuths, staleTime: 3000 });
}