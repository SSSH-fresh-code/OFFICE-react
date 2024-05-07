import { useParams, useRouterState } from "@tanstack/react-router";
import PostsListWrapper from "../../../widgets/Blog/Posts/PostsListWrapper";
import PostsCreate from "../../../widgets/Blog/Posts/PostsCreate";
import PostsDetail from "../../../widgets/Blog/Posts/PostsDetail";

function PostsPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  if (params.title) return <PostsDetail title={params.title} />
  if (pathname === "/posts/create") return <PostsCreate />
  else return <PostsListWrapper />
}

export default PostsPage;