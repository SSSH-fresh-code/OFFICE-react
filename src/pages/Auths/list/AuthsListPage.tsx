import { useSearch } from "@tanstack/react-router";
import Table from "../../../shared/component/Table/Table";
import { TAuths } from "types-sssh";
import useGetAuthsQuery from "../../../data/Auths/auths.get";

export default function AuthsListPage() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetAuthsQuery(page);

  const tableHeaderNames: { [K in keyof TAuths]?: string } = {
    code: "코드",
    description: "설명",
  }

  const overrideClass: { [K in keyof TAuths]?: string } = {
    code: "w-4/12 text-center cursor-default",
    description: "w-4/12 text-center cursor-default",
  }

  return (
    <Table
      query={query}
      headerNames={tableHeaderNames}
      overrideClass={overrideClass}
      value={{}}
    />
  )
}