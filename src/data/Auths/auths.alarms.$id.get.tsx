import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";

export default function useGetAuthsByAlarmsQuery(id: string): UseQueryResult<string[]> {
  const getAuths = useApiRetry(`/auths/alarms/${id}`, "GET");

  return useQuery<string[]>({ queryKey: ['getAuthsByAlarms', id], queryFn: getAuths });
}