import { QueryObserverResult, useMutation } from "@tanstack/react-query";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";
import { Page, TopicListItem } from "@sssh-fresh-code/types-sssh";

export default function useDeleteTopicsMenuMutation(id: number, refetch: () => Promise<QueryObserverResult<Page<TopicListItem>, Error>>) {
  const { pop } = usePopSotre();

  return useMutation({
    mutationFn: useApiRetry(`/topics/${id}`, "DELETE"),
    onSuccess() {
      pop("해당 주제를 삭제했습니다!", "info", () => { refetch() })
    },
  });
}
