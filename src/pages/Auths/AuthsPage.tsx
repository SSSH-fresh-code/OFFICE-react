import { useParams, useRouterState } from "@tanstack/react-router";
import AuthsListPage from "./list/AuthsListPage";

function AuthsPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  return <AuthsListPage></AuthsListPage>
}

export default AuthsPage;