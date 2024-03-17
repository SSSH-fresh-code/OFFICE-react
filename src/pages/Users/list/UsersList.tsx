import { useSearch } from "@tanstack/react-router";
import { TUsers } from "types-sssh";
import { UsersHeader } from "../../../widgets/Users/UsersHeader";
import Table, { From } from "../../../shared/component/Table/Table";
import useGetUsersQuery from "../../../data/Users/users.get";

export default function UsersList() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const from: From<TUsers> = {
    href: "/users/",
    key: "id"
  }

  const query = useGetUsersQuery(page);

  const tableHeaderNames: { [K in keyof TUsers]?: string } = {
    userName: "직원명",
    userId: "ID",
    userRole: "권한"
  }

  const overrideClass: { [K in keyof TUsers]?: string } = {
    userName: "w-96",
    userId: "w-96",
    userRole: "w-[800px] text-center"
  }

  return (
    <>
      <UsersHeader />
      <Table
        query={query}
        headerNames={tableHeaderNames}
        overrideClass={overrideClass}
        from={from}
      />
    </>
  )
}