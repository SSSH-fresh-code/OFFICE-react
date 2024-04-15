import { useSearch } from "@tanstack/react-router";
import { TUsers } from "types-sssh";
import { From } from "../../../shared/component/Table/Table";
import useGetUsersQuery from "../../../data/Users/users.get";
import React from "react";
import XIcon from "../../../shared/icons/x.icon";
import VIcon from "../../../shared/icons/v.icon";
import UsersList from "../../../widgets/Users/list/UsersList";

export default function AuthsUserListPage() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const from: From<TUsers> = {
    href: "/auths/users/",
    key: "id"
  }

  const query = useGetUsersQuery(page, "true");

  const tableHeaderNames: { [K in keyof TUsers]?: string } = {
    userId: "ID",
    userName: "직원명",
  }

  const overrideClass: { [K in keyof TUsers]?: string } = {
    userName: "w-4/12 ",
    userId: "w-4/12 ",
  }

  const overrideTdClass = {
    isCertified: "flex justify-center items-center"
  }

  const value: { [K in keyof TUsers]?: (v: TUsers[K]) => React.ReactNode } = {
    isCertified: (isCertified: boolean) => {
      return <div>{isCertified ? <VIcon /> : <XIcon />}</div>
    },
  }

  return (
    <UsersList
      from={from}
      query={query}
      value={value}
      headers={tableHeaderNames}
      overrideClass={overrideClass}
      overrideTdClass={overrideTdClass}
    />
  )
}