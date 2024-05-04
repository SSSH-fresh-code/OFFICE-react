import { useSearch } from "@tanstack/react-router";
import { SeriseListItem, TopicListItem } from "@sssh-fresh-code/types-sssh";
import Table, { From } from "../../../shared/component/Table/Table";
import { getDate } from "../../../shared/util/date.util";
import useGetSeriesListQuery from "../../../data/Blog/Series/series.list.get";

export default function SeriesList() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const from: From<TopicListItem> = {
    href: "/series/",
    key: "id",
  };

  const query = useGetSeriesListQuery(page);

  const tableHeaderNames: { [K in keyof SeriseListItem]?: string } = {
    topic: "주제",
    name: "이름",
    createdAt: "생성일자"
  }

  const overrideClass: { [K in keyof SeriseListItem]?: string } = {
    topic: "text-center",
    name: "text-center",
    createdAt: "text-center",
  }

  return (
    <Table
      from={from}
      query={query}
      headerNames={tableHeaderNames}
      overrideClass={overrideClass}
      value={{
        createdAt: (d: Date) => getDate(new Date(d)),
        topic: ({ name }) => <span>{name}</span>,
      }}
    />
  )
}