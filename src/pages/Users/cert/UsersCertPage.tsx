import { useSearch } from "@tanstack/react-router";
import UsersCert from "../../../widgets/Users/cert/UsersCert";
import useGetUsersQuery from "../../../data/Users/users.get";
import { TUsers } from "types-sssh";
import { useState } from "react";
import CheckBox from "../../../shared/component/Button/CheckBtn";

export type TUsersCert = TUsers & {
  check: boolean
}

export default function UsersCertPage() {
  const [list, setList] = useState<string[]>([]);

  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetUsersQuery(page, "false");

  const tableHeaderNames: { [K in keyof TUsersCert]?: string } = {
    check: "",
    userId: "ID",
    userName: "직원명",
  }

  const overrideClass: { [K in keyof TUsersCert]?: string } = {
    check: "flex w-[80px]",
    userName: "w-8/12 text-center",
    userId: "w-4/12 text-center",
  }

  const overrideTdClass = {
    check: "justify-center",
    isCertified: "flex justify-center items-center"
  }

  const value: { [K in keyof TUsersCert]?: (v?: TUsersCert[K]) => React.ReactNode } = {
    check: () => (<CheckBox
      onChange={(e) => {
        const data = query.data!.data[e.target.parentElement!.parentElement!.parentElement!.tabIndex];
        if (e.target.checked) setList([...list, data.id]);
        else setList(list.filter(i => data.id !== i));
      }}
    />),

  }

  return <UsersCert
    stateList={[list, setList]}
    query={query}
    value={value}
    headers={tableHeaderNames}
    overrideClass={overrideClass}
    overrideTdClass={overrideTdClass}
  />
}