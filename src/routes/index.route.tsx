import { createFileRoute } from '@tanstack/react-router'
import StatPage from '../pages/Stat/StatPage'
export const Route = createFileRoute('/')({
  beforeLoad: () => ({
    title: "Home"
  }),
  component: () => {
    return <StatPage />
  }
})