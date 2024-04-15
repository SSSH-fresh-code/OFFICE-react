import { Page, TAuths } from "types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";

export default function useGetAuthsQuery(page: string): UseQueryResult<Page<TAuths>> {
  const getAuths = useApiRetry(`/auths?page=${page}&take=10`, "GET");

  return useQuery<Page<TAuths>>({ queryKey: ['getAuths', page], queryFn: getAuths, staleTime: 3000 });
}