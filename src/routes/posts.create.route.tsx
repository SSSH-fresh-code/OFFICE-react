import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/create')({
  beforeLoad: () => ({
    title: "게시글 생성",
    subTitle: "게시글 생성 페이지 입니다.",
    isCenter: true
  }),
})