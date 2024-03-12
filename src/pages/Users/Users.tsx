import { TUsers } from "types-sssh";
import Table from "../../shared/component/Table/Table";
import Pagination from "../../shared/component/Paging/Pagination";
import { UsersHeader } from "../../widgets/Users/UsersHeader";
import useApi from "../../data/api/useApi.hook";
import { useQuery } from "@tanstack/react-query";

function Users() {
  const getUsers = useApi("/users", "GET");

  const query = useQuery<TUsers[]>({ queryKey: ['todos'], queryFn: getUsers });

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
      <Pagination current={1} lastPage={53} />
    </>
  )
}

export default Users;