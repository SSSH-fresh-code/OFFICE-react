import { useParams, useRouteContext, useRouter } from "@tanstack/react-router";
import UsersList from "./list/UsersList";
import UserDetail from "./$id/UserDetail";

function Users() {
  const params = useParams({ strict: false });
  const { pageName } = useRouteContext({ strict: false });

  console.log(pageName)
  if (params.id) return <UserDetail />
  else return <UsersList />
}

export default Users;