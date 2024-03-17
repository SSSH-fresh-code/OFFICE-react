import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id')({
  beforeLoad: () => ({
    pageName: "직원 상세정보"
  }),
})