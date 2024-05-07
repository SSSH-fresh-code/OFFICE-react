import { Page, SeriseListItem } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";
import { replaceSpaceToUnderline } from "../../../shared/util/text.util";

export default function useGetSeriesListQuery(page: string, topicName?: string): UseQueryResult<Page<SeriseListItem>> {
  const topicNameQuery = topicName ? `&where__topicName=${replaceSpaceToUnderline(topicName)}` : '';
  const getSeriesList = useApiRetry(`/series?page=${page}${topicNameQuery}`, "GET");

  return useQuery<Page<SeriseListItem>>({ queryKey: ['getSeriesList', page, topicName], queryFn: getSeriesList, staleTime: 3000 });
}