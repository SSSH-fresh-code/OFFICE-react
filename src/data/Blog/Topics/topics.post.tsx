import { useMutation } from "@tanstack/react-query";
import { CreateTopicDto } from "@sssh-fresh-code/types-sssh";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";
import { useNavigate } from "@tanstack/react-router";

export default function usePostTopicMutation(dto: CreateTopicDto) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      "/topics",
      "POST",
      JSON.stringify(dto)
    ),
    onSuccess() {
      pop("주제가 생성되었습니다!", "info", () => navigate({ to: "/topics" }));
    },
  });
}