import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useDeleteSeriesMutation(id: number) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      `/series/${id}`,
      "DELETE"
    ),
    onSuccess() {
      pop("시리즈를 삭제했습니다!", "info", () => navigate({ to: "/series" }))
    },
  });
}