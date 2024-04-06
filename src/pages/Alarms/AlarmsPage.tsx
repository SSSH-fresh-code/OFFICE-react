import { useParams, useRouterState } from "@tanstack/react-router";
import AlarmsCreatePage from "./create/AlarmsCreatePage";
import AlarmsListPage from "./list/AlarmsListPage";
import AlarmsDetailPage from "./$id/AlarmsDetailPage";

function AlarmsPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  if (params.id) return <AlarmsDetailPage id={params.id} />
  else if (pathname === "/alarms/create") return <AlarmsCreatePage />
  else return <AlarmsListPage />
}

export default AlarmsPage;