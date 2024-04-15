import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";
import { TAlarms } from "types-sssh";
import { useNavigate } from "@tanstack/react-router";

export default function usePostAlarmsMutation(body: Partial<TAlarms>) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      "/alarms",
      "POST",
      JSON.stringify(body)
    ),
    onSuccess() {
      pop("알람이 생성되었습니다!", "info", async () => await navigate({ to: "/" }))
    },
  });
}