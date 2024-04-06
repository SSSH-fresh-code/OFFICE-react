import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/alarms/create')({
  beforeLoad: () => ({
    title: "알람 생성",
    subTitle: "알람 생성 페이지 입니다.",
    isCenter: true
  }),
})