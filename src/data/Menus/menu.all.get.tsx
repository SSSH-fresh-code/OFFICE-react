import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";
import { ParentMenuListItem } from "../../shared/types/menus";


export default function useGetParentMenusQuery(): UseQueryResult<ParentMenuListItem[]> {
  return useQuery<ParentMenuListItem[]>({
    queryKey: ['menus/all'],
    queryFn: useApiRetry(`/menus/all`, "GET"),
  });
}