import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/series/$id')({
  beforeLoad: () => ({
    title: "시리즈 상세정보"
  }),
})