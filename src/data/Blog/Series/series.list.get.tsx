import { Page, SeriseListItem } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useGetSeriesListQuery(page: string): UseQueryResult<Page<SeriseListItem>> {
  const getSeriesList = useApiRetry(`/series?page=${page}`, "GET");

  return useQuery<Page<SeriseListItem>>({ queryKey: ['getSeriesList', page], queryFn: getSeriesList, staleTime: 3000 });
}