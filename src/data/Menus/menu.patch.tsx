import { QueryObserverResult, useMutation } from "@tanstack/react-query";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePatchMenuMutation(menu: TMenu, callback: () => void) {
  const { pop } = usePopSotre();
  return useMutation({
    mutationFn: useApiRetry("/menus", "PATCH", JSON.stringify(menu)),
    onSuccess() {
      pop("메뉴 정보를 수정했습니다.", "info", callback)
    },
  });
}
