import { QueryObserverResult, useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePatchMenusAuthMutation(
  id: string,
  auths: string[],
  refetch: () => Promise<QueryObserverResult<string[], Error>>,
) {
  const { pop } = usePopSotre();
  return useMutation({
    mutationFn: useApiRetry(
      "/auths/menus",
      "PATCH",
      JSON.stringify({
        id,
        auths,
      }),
    ),
    onSuccess() {
      pop("메뉴 권한을 수정했습니다.", "info", refetch);
    },
  });
}

