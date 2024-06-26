import { useMutation } from "@tanstack/react-query";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";
import { ParentMenuListItem } from "../../shared/types/menus";

export default function usePostMenuMutation(
  menu: TMenu,
  callback: (data?: ParentMenuListItem) => void,
) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry("/menus", "POST", JSON.stringify(menu)),
    onSuccess(data) {
      pop("메뉴를 생성했습니다.", "info", () => callback(data));
    },
  });
}
