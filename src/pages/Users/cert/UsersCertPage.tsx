import { useSearch } from "@tanstack/react-router";
import UsersCert from "../../../widgets/Users/cert/UsersCert";
import useGetUsersQuery from "../../../data/Users/users.get";
import { TUsers } from "types-sssh";

export type TUsersCert = TUsers & {
  check: boolean
}

export default function UsersCertPage() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;


  const query = useGetUsersQuery(page, "false");

  const tableHeaderNames: { [K in keyof TUsersCert]?: string } = {
    check: "",
    userId: "ID",
    userName: "직원명",
    userRole: "권한",
  }

  const overrideClass: { [K in keyof TUsersCert]?: string } = {
    check: "w-1/12",
    userName: "w-3/12 ",
    userId: "w-3/12 ",
    userRole: "w-1/12 text-center",
  }

  const overrideTdClass = {
    check: "m-auto",
    isCertified: "flex justify-center items-center"
  }

  const value: { [K in keyof TUsersCert]?: (v: TUsersCert[K]) => React.ReactNode } = {
    check: (v) => <input type="checkbox" />
  }
  return <UsersCert
    query={query}
    value={value}
    headers={tableHeaderNames}
    overrideClass={overrideClass}
    overrideTdClass={overrideTdClass}
  />

}