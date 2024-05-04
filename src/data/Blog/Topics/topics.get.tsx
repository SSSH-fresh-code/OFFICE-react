import { Page, TopicListItem } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useGetTopicsQuery(page: string): UseQueryResult<Page<TopicListItem>> {
  const getAuths = useApiRetry(`/topics?page=${page}`, "GET");

  return useQuery<Page<TopicListItem>>({ queryKey: ['getTopics', page], queryFn: getAuths, staleTime: 3000 });
}