import { useRouterState } from "@tanstack/react-router";
import SeriesList from "../../../widgets/Blog/Series/SeriesList";
import SeriesCreate from "../../../widgets/Blog/Series/SeriesCreate";

function SeriesPage() {
  const pathname = useRouterState().location.pathname;

  if (pathname === "/series/create") return <SeriesCreate />
  else return <SeriesList />
}

export default SeriesPage;