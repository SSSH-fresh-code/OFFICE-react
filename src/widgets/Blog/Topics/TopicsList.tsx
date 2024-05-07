import { useSearch } from "@tanstack/react-router";
import { TopicListItem } from "@sssh-fresh-code/types-sssh";
import Table, { TableOptions } from "../../../shared/component/Table/Table";
import useGetTopicsQuery from "../../../data/Blog/Topics/topics.get";
import { getDate } from "../../../shared/util/date.util";

export default function TopicsList() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const tableOptions: TableOptions<TopicListItem> = {
    from: {
      href: "/topics/",
      key: "name",
    },
    overrideClass: {
      id: "text-center",
      name: "text-center",
      createdAt: "text-center",
    },
    value: {
      createdAt: (d: Date) => getDate(new Date(d)),
    },
  }


  const query = useGetTopicsQuery(page);

  const tableHeaderNames: { [K in keyof TopicListItem]?: string } = {
    id: "ID",
    name: "이름",
    createdAt: "생성일자",
  }

  // const deleteTopic = useDeleteTopicsMenuMutation(id, query.refetch);

  return (
    <Table
      query={query}
      headerNames={tableHeaderNames}
      options={tableOptions}
    />
  )
}