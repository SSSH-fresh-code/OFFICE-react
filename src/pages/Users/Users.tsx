import { useParams } from "@tanstack/react-router";
import UsersList from "./list/UsersList";
import UserDetail from "./$id/UserDetail";

function Users() {
  const params = useParams({ strict: false });

  if (params.id) return <UserDetail />
  else return <UsersList />
}

export default Users;