import { useMutation } from "@tanstack/react-query";
import { CreatePostItem } from "@sssh-fresh-code/types-sssh";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";
import { useNavigate } from "@tanstack/react-router";

export default function usePostPostsMutation(dto?: CreatePostItem) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      "/posts",
      "POST",
      JSON.stringify(dto)
    ),
    onSuccess(data) {
      pop("게시글이 생성되었습니다!", "info", () => navigate({ to: `/posts/${data.title}` }));
    },
  });
}