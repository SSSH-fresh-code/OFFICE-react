import { useSearch } from "@tanstack/react-router";
import Table, { TableOptions } from "../../../shared/component/Table/Table";
import { TAuths } from "@sssh-fresh-code/types-sssh";
import useGetAuthsQuery from "../../../data/Auths/auths.get";

export default function AuthsListPage() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetAuthsQuery(page);

  const tableHeaderNames: { [K in keyof TAuths]?: string } = {
    code: "코드",
    description: "설명",
  }

  const tableOptions: TableOptions<TAuths> = {
    overrideClass: {
      code: "w-4/12 text-center cursor-default",
      description: "w-4/12 text-center cursor-default",
    }
  }

  return (
    <Table
      query={query}
      headerNames={tableHeaderNames}
      options={tableOptions}
    />
  )
}