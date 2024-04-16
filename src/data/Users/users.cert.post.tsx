import { QueryObserverResult, useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";
import { Page, TUsers } from "types-sssh";

export default function usePostUserCertMutation(idList: string[], refetch: () => Promise<QueryObserverResult<Page<TUsers>, Error>>) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry("/users/cert", "POST", JSON.stringify({ idList: idList })),
    onSuccess() {
      pop("승인되었습니다!", "info", refetch)
    },
  });
}