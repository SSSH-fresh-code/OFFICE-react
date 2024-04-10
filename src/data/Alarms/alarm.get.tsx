import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TAlarms } from "types-sssh";
import useApiRetry from "../api/useApiRetry.hook";


export default function useGetAlarmQuery(id: string): UseQueryResult<TAlarms> {
  return useQuery<TAlarms>({
    queryKey: ['alarm', id],
    queryFn: useApiRetry(`/alarms/${id}`, "GET"),
  });
}