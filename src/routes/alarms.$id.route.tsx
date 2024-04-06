import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/alarms/$id')({
  beforeLoad: () => ({
    title: "알람 조회 / 수정",
    isCenter: true
  }),
})