import { createFileRoute } from '@tanstack/react-router'
import Users from '../pages/Users/Users'

export const Route = createFileRoute('/users')({
  beforeLoad: () => ({
    pageName: "직원 목록"
  }),
  component: () => {
    return <Users />;
  }
})