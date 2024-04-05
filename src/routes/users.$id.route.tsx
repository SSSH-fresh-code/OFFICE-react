import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id')({
  beforeLoad: () => ({
    title: "직원 상세정보"
  }),
})