import { QueryObserverResult, useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePatchAlarmsAuthMutation(id: string, auths: string[], refetch?: () => Promise<QueryObserverResult<string[], Error>>) {
  const { pop } = usePopSotre();
  return useMutation({
    mutationFn: useApiRetry("/alarms/auths", "PATCH", JSON.stringify({
      id, auths
    })),
    onSuccess() {
      pop("알람 권한을 수정하였습니다.", "info", refetch)
    },
  });
}