import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/topics/$name')({
  beforeLoad: () => ({
    title: "주제 상세정보"
  }),
})