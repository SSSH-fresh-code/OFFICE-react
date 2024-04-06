import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TWork } from "types-sssh";
import useApiRetry from "../api/useApiRetry.hook";

export default function useGetWorksQuery(
  startDate: string,
  endDate: string,
  id?: string
): UseQueryResult<TWork[]> {
  return useQuery<TWork[]>({
    queryKey: ['works', startDate, endDate, id],
    queryFn: useApiRetry(
      `/work?startDate=${startDate}&endDate=${endDate}${id ? '&id=' + id : ''}`
      , "GET"
    ),
  });
}