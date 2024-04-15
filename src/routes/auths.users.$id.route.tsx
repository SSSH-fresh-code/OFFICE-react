import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auths/users/$id')({
  beforeLoad: () => ({
    title: "유저 권한 부여",
  }),
})