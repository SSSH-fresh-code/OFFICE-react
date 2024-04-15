import { useParams, useRouterState } from "@tanstack/react-router";
import AuthsListPage from "./list/AuthsListPage";
import AuthsUserDetailPage from "./user/$id/AuthsUserDetailPage";
import AuthsUserListPage from "./user/AuthsUserListPage";
import AuthsAlarmDetailPage from "./alarms/$id/AuthsAlarmDetailPage";
import AuthsAlarmListPage from "./alarms/AuthsAlarmListPage";

function AuthsPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  if (pathname.startsWith("/auths/users")) {
    if (params.id) return <AuthsUserDetailPage />
    return <AuthsUserListPage />
  } else if (pathname.startsWith("/auths/alarms")) {
    if (params.id) return <AuthsAlarmDetailPage />
    return <AuthsAlarmListPage />
  } else

    return <AuthsListPage></AuthsListPage>
}

export default AuthsPage;