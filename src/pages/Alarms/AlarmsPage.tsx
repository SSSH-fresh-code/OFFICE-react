import { useRouterState } from "@tanstack/react-router";
import AlarmsCreatePage from "./create/AlarmsCreatePage";

function AlarmsPage() {
  const pathname = useRouterState().location.pathname;

  if (pathname === "/alarms/create") return <AlarmsCreatePage />
}

export default AlarmsPage;