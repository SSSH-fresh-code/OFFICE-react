import { useMutation } from "@tanstack/react-query";
import useApi from "../api/useApi.hook";
import usePopSotre from "../store/pop.store";

export default function usePostUserCertMutation(idList: string[]) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApi("/users/cert", "POST", JSON.stringify({ idList: idList })),
    onSuccess() {
      pop("승인되었습니다!", "info", () => location.reload())
    },
  });
}