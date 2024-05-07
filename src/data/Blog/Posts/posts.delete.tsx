import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useDeletePostsMutation(id: number) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      `/posts/${id}`,
      "DELETE"
    ),
    onSuccess() {
      pop("게시글을 삭제했습니다!", "info", () => navigate({ to: "/posts" }))
    },
  });
}