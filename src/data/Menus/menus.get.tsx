import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";
import { Page, TMenu } from "@sssh-fresh-code/types-sssh";

export default function useGetMenusQuery(
  page: string,
): UseQueryResult<Page<TMenu>> {
  return useQuery<Page<TMenu>>({
    queryKey: ["menus"],
    queryFn: useApiRetry(`/menus?page=${page}`, "GET"),
  });
}
