import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/cert')({
  beforeLoad: () => ({
    pageName: "미승인 직원목록"
  }),
})