import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../../api/useApiRetry.hook";
import { PostItem } from "@sssh-fresh-code/types-sssh";

export default function useGetPostQuery(title: string): UseQueryResult<PostItem> {
  const getPost = useApiRetry(`/posts/${title}`, "GET");

  return useQuery<PostItem>({ queryKey: ['getPost', title], queryFn: getPost });
}