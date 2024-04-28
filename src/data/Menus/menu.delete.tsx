import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function useDeleteMenuMutation(id: string, callback: () => void) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry(`/menus/${id}`, "DELETE"),
    onSuccess() {
      pop("해당 메뉴를 삭제했습니다!", "info", callback)
    },
  });
}
