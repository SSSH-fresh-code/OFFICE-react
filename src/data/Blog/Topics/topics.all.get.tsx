import { TopicSelectItem } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";

export default function useGetAllTopicsQuery(): UseQueryResult<TopicSelectItem[]> {
  const getAllTopics = useApiRetry(`/topics/all`, "GET");

  return useQuery<TopicSelectItem[]>({ queryKey: ['getAllTopics'], queryFn: getAllTopics });
}