import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  beforeLoad: () => ({
    pageName: "통계"
  }),
  component: () => {
    return <div>Home</div>
  }
})