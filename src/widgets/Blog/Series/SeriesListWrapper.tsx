import { useSearch } from "@tanstack/react-router";
import useGetSeriesListQuery from "../../../data/Blog/Series/series.list.get";
import SeriesList from "./SeriesList";

export default function SeriesListWrapper() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetSeriesListQuery(page);

  return <SeriesList query={query} />
}