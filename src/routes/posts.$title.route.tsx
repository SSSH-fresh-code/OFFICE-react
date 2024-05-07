import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$title')({
  beforeLoad: () => ({
    title: "게시글 상세정보"
  }),
})