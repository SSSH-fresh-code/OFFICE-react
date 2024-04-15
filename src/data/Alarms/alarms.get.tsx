import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TAlarms } from "types-sssh";
import useApiRetry from "../api/useApiRetry.hook";


export default function useGetAlarmsQuery(): UseQueryResult<TAlarms[]> {
  return useQuery<TAlarms[]>({
    queryKey: ['alarms'],
    queryFn: useApiRetry(`/alarms`, "GET"),
  });
}