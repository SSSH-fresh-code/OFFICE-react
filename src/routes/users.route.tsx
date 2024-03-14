import { createFileRoute } from '@tanstack/react-router'
import Users from '../pages/Users/Users'

export const Route = createFileRoute('/users')({
  component: () => {

    return <Users />;
  }
})