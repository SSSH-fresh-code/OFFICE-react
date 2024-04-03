import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePatchWorkMutation(off: boolean, workDetail: string, callback?: () => void) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry(
      `/work?off=${off || false}`,
      "PATCH",
      JSON.stringify({ workDetail })
    ),
    onSuccess() {
      const msg = off ? "정상적으로 퇴근이 기록되었습니다. 수고하셨습니다." : "업무가 기록되었습니다."
      pop(msg, "info", callback)
    },
  });
}