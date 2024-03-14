import { Page, TUsers } from "types-sssh";
import Table from "../../shared/component/Table/Table";
import { UsersHeader } from "../../widgets/Users/UsersHeader";
import useApi from "../../data/api/useApi.hook";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";

function Users() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

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
      />
    </>
  )
}

export default Users;