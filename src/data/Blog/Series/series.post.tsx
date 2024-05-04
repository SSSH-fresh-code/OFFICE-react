import { useMutation } from "@tanstack/react-query";
import { CreateSeriesDto } from "@sssh-fresh-code/types-sssh";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";
import { useNavigate } from "@tanstack/react-router";

export default function usePostSeriesMutation(dto: CreateSeriesDto) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      "/series",
      "POST",
      JSON.stringify(dto)
    ),
    onSuccess(data) {
      pop("시리즈가 생성되었습니다!", "info", () => navigate({ to: `/series/${data.id}` }));
    },
  });
}