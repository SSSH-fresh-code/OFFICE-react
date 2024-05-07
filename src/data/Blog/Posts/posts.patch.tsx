import { useMutation } from "@tanstack/react-query";
import { UpdatePostItem } from "@sssh-fresh-code/types-sssh";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";
import { useNavigate } from "@tanstack/react-router";

export default function usePatchPostsMutation(dto: UpdatePostItem | undefined) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      "/posts",
      "PATCH",
      JSON.stringify(dto)
    ),
    onSuccess(data) {
      pop(
        "게시글을 수정했습니다!"
        , "info"
        , () => navigate({ to: "/posts" }).then(() => navigate({ to: `/posts/${data.title}` }))
      );
    },
  });
}