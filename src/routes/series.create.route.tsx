import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/series/create')({
  beforeLoad: () => ({
    title: "시리즈 생성",
    subTitle: "시리즈 생성 페이지 입니다.",
    isCenter: true
  }),
})