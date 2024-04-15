import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auths/alarms/$id')({
  beforeLoad: () => ({
    title: "알람 권한 부여",
  }),
})