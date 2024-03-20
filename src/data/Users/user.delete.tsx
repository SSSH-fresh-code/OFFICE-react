import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import { useNavigate } from "@tanstack/react-router";
import useApiRetry from "../api/useApiRetry.hook";

export default function useDeleteUserMutation(id: string) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(`/users/${id}`, "DELETE"),
    onSuccess() {
      pop("사용자가 정상적으로 삭제되었습니다.", "info", () => navigate({ to: "/users" }))
    }
  });
}