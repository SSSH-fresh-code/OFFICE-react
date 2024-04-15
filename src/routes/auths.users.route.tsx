import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auths/users')({
  beforeLoad: () => ({
    title: "유저 권한 관리 페이지",
  }),
})