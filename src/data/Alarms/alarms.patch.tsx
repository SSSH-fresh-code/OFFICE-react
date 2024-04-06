import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";
import { TAlarms } from "types-sssh";

export default function usePatchAlarmsMutation(body: Partial<TAlarms>) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry(
      "/auths/alarms",
      "PATCH",
      JSON.stringify(body)
    ),
    onSuccess() {
      pop("알람을 수정했습니다!", "info", () => location.reload())
    },
  });
}