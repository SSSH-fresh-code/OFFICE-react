import { useSearch } from "@tanstack/react-router";
import useApi from "../../../data/api/useApi.hook";
import { useQuery } from "@tanstack/react-query";
import { Page, TUsers } from "types-sssh";
import { UsersHeader } from "../../../widgets/Users/UsersHeader";
import Table, { From } from "../../../shared/component/Table/Table";

export default function UsersList() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const from: From<TUsers> = {
    href: "/users/",
    key: "id"
  }

  const getUsers = useApi(`/users?page=${page}`, "GET");

  const query = useQuery<Page<TUsers>>({ queryKey: ['todos', page], queryFn: getUsers, staleTime: 300000 });

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