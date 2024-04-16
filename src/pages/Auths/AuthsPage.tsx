import { useParams, useRouterState } from "@tanstack/react-router";
import AuthsListPage from "./list/AuthsListPage";
import AuthsUserDetailPage from "./user/$id/AuthsUserDetailPage";
import AuthsUserListPage from "./user/AuthsUserListPage";
import AuthsAlarmDetailPage from "./alarms/$id/AuthsAlarmDetailPage";
import AuthsAlarmListPage from "./alarms/AuthsAlarmListPage";

function AuthsPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  if (pathname === "/auths/users") return <AuthsUserListPage />
  else if (pathname === "/auths/alarms") return <AuthsAlarmListPage />
  else if (params.id) {
    if (pathname.startsWith("/auths/users")) return <AuthsUserDetailPage />;
    else if (pathname.startsWith("/auths/alarms")) return <AuthsAlarmDetailPage />;
  }
  return <AuthsListPage></AuthsListPage>
}

export default AuthsPage;