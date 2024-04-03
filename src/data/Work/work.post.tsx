import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePostWorkMutation(callback?: () => void) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry(
      "/work",
      "POST"
    ),
    onSuccess() {
      pop("출근이 완료되었습니다!", "info", callback)
    },
  });
}