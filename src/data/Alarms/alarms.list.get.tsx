import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Page, TAlarms } from "types-sssh";
import useApiRetry from "../api/useApiRetry.hook";


export default function useGetAlarmListQuery(page: number): UseQueryResult<Page<TAlarms>> {
  return useQuery<Page<TAlarms>>({
    queryKey: ['alarms', page],
    queryFn: useApiRetry(`/auths/alarms?readOnly=true&page=${page}`, "GET"),
    staleTime: 60000
  });
}