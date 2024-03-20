import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePostUserCertMutation(idList: string[]) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry("/users/cert", "POST", JSON.stringify({ idList: idList })),
    onSuccess() {
      pop("승인되었습니다!", "info", () => location.reload())
    },
  });
}