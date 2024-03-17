import { createFileRoute } from '@tanstack/react-router'
import UsersPage from '../pages/Users/UsersPage'

export const Route = createFileRoute('/users')({
  beforeLoad: () => ({
    pageName: "직원 목록"
  }),
  component: () => {
    return <UsersPage />;
  }
})