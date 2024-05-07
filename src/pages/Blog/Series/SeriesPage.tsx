import { useParams, useRouterState } from "@tanstack/react-router";
import SeriesListWrapper from "../../../widgets/Blog/Series/SeriesListWrapper";
import SeriesCreate from "../../../widgets/Blog/Series/SeriesCreate";
import SeriesDetail from "../../../widgets/Blog/Series/SeriesDetail";

function SeriesPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  if (params.id) return <SeriesDetail seriesId={params.id} />
  else if (pathname === "/series/create") return <SeriesCreate />
  else return <SeriesListWrapper />
}

export default SeriesPage;