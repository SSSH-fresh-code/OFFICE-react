import { Page, PostListItem } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";
import { replaceSpaceToUnderline } from "../../../shared/util/text.util";

export default function useGetPostsListQuery(page: string, topicName?: string, seriesId?: number): UseQueryResult<Page<PostListItem>> {
  const topicNameQuery = topicName ? `&where__topicName=${replaceSpaceToUnderline(topicName)}` : '';
  const seriesIdQuery = seriesId ? `&where__seriesId=${seriesId}` : '';
  const getPostsList = useApiRetry(`/posts?page=${page}${topicNameQuery}${seriesIdQuery}`, "GET");

  return useQuery<Page<PostListItem>>({ queryKey: ['getPostsList', page, topicName, seriesId], queryFn: getPostsList, staleTime: 3000 });
}