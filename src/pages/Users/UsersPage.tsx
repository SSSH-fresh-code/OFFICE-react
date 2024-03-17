import { useParams, useRouterState } from "@tanstack/react-router";
import UsersListPage from "./list/UsersListPage";
import UserDetailPage from "./$id/UserDetailPage";
import UsersCertPage from "./cert/UsersCertPage";

function UsersPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  if (params.id) return <UserDetailPage />
  else if (pathname === "/users/cert") return <UsersCertPage />
  else return <UsersListPage />
}

export default UsersPage;