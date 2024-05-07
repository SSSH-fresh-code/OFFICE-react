import { useSearch } from "@tanstack/react-router";
import PostsList from "./PostsList";
import useGetPostsListQuery from "../../../data/Blog/Posts/posts.list.get";

export default function PostsListWrapper() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetPostsListQuery(page);

  return <PostsList query={query} />
}