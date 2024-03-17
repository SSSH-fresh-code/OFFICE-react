import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApi from "../api/useApi.hook";
import { useNavigate } from "@tanstack/react-router";

export default function useDeleteUserMutation(id: string) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApi(`/users/${id}`, "DELETE"),
    onSuccess() {
      pop("사용자가 정상적으로 삭제되었습니다.", "info", () => navigate({ to: "/users" }))
    }
  });
}