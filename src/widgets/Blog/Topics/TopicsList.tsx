import { useSearch } from "@tanstack/react-router";
import { TopicListItem } from "@sssh-fresh-code/types-sssh";
import Table from "../../../shared/component/Table/Table";
import useGetTopicsQuery from "../../../data/Blog/Topics/topics.get";
import FlatButton from "../../../shared/component/Button/FlatButton";
import useDeleteTopicsMenuMutation from "../../../data/Blog/Topics/topics.delete";
import { useState } from "react";
import usePopSotre from "../../../data/store/pop.store";
import { getDate } from "../../../shared/util/date.util";

export default function TopicsList() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;
  const { pop } = usePopSotre();
  const [id, setId] = useState<number>(-1);

  const query = useGetTopicsQuery(page);

  const tableHeaderNames: { [K in keyof TopicListItem]?: string } = {
    name: "이름",
    createdAt: "생성일자",
    id: "삭제",
  }

  const overrideClass: { [K in keyof TopicListItem]?: string } = {
    name: "text-center",
    createdAt: "text-center",
    id: "flex justify-center items-center"
  }

  const deleteTopic = useDeleteTopicsMenuMutation(id, query.refetch);

  return (
    <Table
      query={query}
      headerNames={tableHeaderNames}
      overrideClass={overrideClass}
      value={{
        createdAt: (d: Date) => getDate(new Date(d)),
        id: (id: number) => <FlatButton className="bg-red-500" text="삭제" type="button" onClick={() => {
          setId(id);
          pop("해당 주제를 삭제하시겠습니까?", "info", () => deleteTopic.mutate(), true);
        }} />
      }}
    />
  )
}