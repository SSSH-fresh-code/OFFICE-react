import { createFileRoute } from '@tanstack/react-router'
import PostsPage from '../pages/Blog/Posts/PostsPage';

export const Route = createFileRoute('/posts')({
  beforeLoad: () => ({
    title: "게시글 목록"
  }),
  component: () => {
    return <PostsPage />;
  }
})