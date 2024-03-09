import { createFileRoute } from '@tanstack/react-router'
import Users from '../pages/Users/Users'
import { users } from '../shared/constant/menu.const';

export const Route = createFileRoute('/users')({
  component: () => {

    return <Users meta={users} />;
  }
})