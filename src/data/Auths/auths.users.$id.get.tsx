import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";

export default function useGetAuthsByUserQuery(id: string): UseQueryResult<string[]> {
  const getAuths = useApiRetry(`/auths/users/${id}`, "GET");

  return useQuery<string[]>({ queryKey: ['getAuthsById', id], queryFn: getAuths });
}