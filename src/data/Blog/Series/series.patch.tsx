import { useMutation } from "@tanstack/react-query";
import { UpdateSeriesDto } from "@sssh-fresh-code/types-sssh";
import usePopSotre from "../../store/pop.store";
import useApiRetry from "../../api/useApiRetry.hook";
import { useNavigate } from "@tanstack/react-router";

export default function usePatchSeriesMutation(dto: UpdateSeriesDto | undefined) {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: useApiRetry(
      "/series",
      "PATCH",
      JSON.stringify(dto)
    ),
    onSuccess(data) {
      pop(
        "시리즈를 수정했습니다!"
        , "info"
        , () => navigate({ to: "/series" }).then(() => navigate({ to: `/series/${data.id}` }))
      );
    },
  });
}