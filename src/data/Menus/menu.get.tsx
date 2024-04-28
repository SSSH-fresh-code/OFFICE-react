import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import useApiRetry from "../api/useApiRetry.hook";


export default function useGetMenuQuery(id: number): UseQueryResult<TMenu> {
  return useQuery<TMenu>({
    queryKey: ['menu', id],
    queryFn: useApiRetry(`/menus/${id}`, "GET"),
  });
}