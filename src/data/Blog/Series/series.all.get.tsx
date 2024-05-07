import { SeriesSelectItem } from "@sssh-fresh-code/types-sssh";
import { useMutation } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useGetAllSeriesMutation(id: number, setter: React.Dispatch<React.SetStateAction<SeriesSelectItem[]>>) {
  return useMutation({
    mutationFn: useApiRetry(
      `/series/all?id=${id}`,
      "GET",
    ),
    onSuccess(data) {
      setter(data);
    },
  });
}