import { SeriseItem } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useGetSeriesQuery(id: number): UseQueryResult<SeriseItem> {
  const getSeries = useApiRetry(`/series/${id}`, "GET");

  return useQuery<SeriseItem>({ queryKey: ['getSeries', id], queryFn: getSeries });
}