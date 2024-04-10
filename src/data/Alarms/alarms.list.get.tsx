import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Page, TAlarms } from "types-sssh";
import useApiRetry from "../api/useApiRetry.hook";


export default function useGetAlarmListQuery(page: number): UseQueryResult<Page<TAlarms>> {
  return useQuery<Page<TAlarms>>({
    queryKey: ['alarms', page],
    queryFn: useApiRetry(`/alarms?readOnly=true&take=6&page=${page}`, "GET"),
    staleTime: 60000
  });
}