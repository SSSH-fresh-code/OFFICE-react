import { Page, SeriseListItem } from "@sssh-fresh-code/types-sssh";
import Table, { TableOptions } from "../../../shared/component/Table/Table";
import { getDate } from "../../../shared/util/date.util";
import { UseQueryResult } from "@tanstack/react-query";

interface SeriseListProps {
  query: UseQueryResult<Page<SeriseListItem>>;
  pageName?: string;
}

export default function SeriesList(
  { query, pageName }: SeriseListProps
) {

  const tableHeaderNames: { [K in keyof SeriseListItem]?: string } = {
    topic: "주제",
    name: "이름",
    createdAt: "생성일자"
  }

  const tableOptions: TableOptions<SeriseListItem> = {
    from: {
      href: "/series/",
      key: "id",
    },
    overrideClass: {
      topic: "text-center",
      name: "text-center",
      createdAt: "text-center",
    },
    value: {
      createdAt: (d: Date) => getDate(new Date(d)),
      topic: ({ name }) => <span>{name}</span>,
    },
    pageName: pageName
  }

  return (
    <Table
      query={query}
      headerNames={tableHeaderNames}
      options={tableOptions}
    />
  )
}