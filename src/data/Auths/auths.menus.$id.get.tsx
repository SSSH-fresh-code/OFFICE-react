import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";

export default function useGetAuthsByMenusQuery(
  id: string,
): UseQueryResult<string[]> {
  const getAuths = useApiRetry(`/auths/menus/${id}`, "GET");

  return useQuery<string[]>({
    queryKey: ["getAuthsByMenus", id],
    queryFn: getAuths,
  });
}

