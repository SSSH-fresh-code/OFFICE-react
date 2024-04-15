import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePatchUserAuthMutation(id: string, auths: string[]) {
  const { pop } = usePopSotre();
  return useMutation({
    mutationFn: useApiRetry("/users/auth", "PATCH", JSON.stringify({
      id, auths
    })),
    onSuccess() {
      pop("사용자 정보가 정상적으로 수정되었습니다!", "info", () => location.reload())
    },
  });
}