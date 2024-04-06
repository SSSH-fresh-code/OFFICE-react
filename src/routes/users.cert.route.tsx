import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/cert')({
  beforeLoad: () => ({
    title: "미승인 직원목록"
  }),
})