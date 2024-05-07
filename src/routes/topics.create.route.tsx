import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/topics/create')({
  beforeLoad: () => ({
    title: "주제 생성",
    subTitle: "주제 생성 페이지 입니다.",
    isCenter: true
  }),
})