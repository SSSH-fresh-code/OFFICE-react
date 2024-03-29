import { useMutation } from "@tanstack/react-query";
import { TUsers } from "types-sssh";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePatchUserMutation(user: Pick<TUsers, "id" | "userName" | "userRole"> & { isPwReset: boolean | undefined }) {
  const { pop } = usePopSotre();
  return useMutation({
    mutationFn: useApiRetry("/users", "PATCH", JSON.stringify(user)),
    onSuccess() {
      pop("사용자 정보가 정상적으로 수정되었습니다!", "info", () => location.reload())
    },
  });
}