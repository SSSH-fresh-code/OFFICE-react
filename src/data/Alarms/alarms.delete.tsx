import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";
import { useNavigate } from "@tanstack/react-router";

export default function useDeleteAlarmsMutation(id: number) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      `/auths/alarms/${id}`,
      "DELETE"
    ),
    onSuccess() {
      pop("알람을 삭제했습니다!", "info", () => navigate({ to: "/alarms" }))
    },
  });
}