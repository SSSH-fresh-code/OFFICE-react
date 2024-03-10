import { TUsers } from "types-sssh";
import Table from "../../shared/component/Table/Table";
import Pagination from "../../shared/component/Paging/Pagination";
import { UsersHeader } from "./UsersHeader";

function Users() {

  const dummy: TUsers = {
    userId: "daeseong0226",
    userName: "임대성",
    userRole: "ADMIN",
    userPw: "",
    id: ""
  }

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
      <Table data={[dummy, dummy, dummy]} headerNames={tableHeaderNames} overrideClass={overrideClass} />
      <Pagination current={1} lastPage={53} />
    </>
  )
}

export default Users;