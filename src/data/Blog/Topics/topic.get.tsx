import { TopicItem } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useGetTopicQuery(name: string): UseQueryResult<TopicItem> {
  const getTopic = useApiRetry(`/topics/${name}`, "GET");

  return useQuery<TopicItem>({ queryKey: ['getTopic', name], queryFn: getTopic });
}