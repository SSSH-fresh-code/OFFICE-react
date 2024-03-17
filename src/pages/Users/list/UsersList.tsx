import { useSearch } from "@tanstack/react-router";
import { TUsers } from "types-sssh";
import { UsersHeader } from "../../../widgets/Users/UsersHeader";
import Table, { From } from "../../../shared/component/Table/Table";
import useGetUsersQuery from "../../../data/Users/users.get";
import React from "react";
import XIcon from "../../../shared/icons/x.icon";
import VIcon from "../../../shared/icons/v.icon";

export default function UsersList() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const from: From<TUsers> = {
    href: "/users/",
    key: "id"
  }

  const query = useGetUsersQuery(page);

  const tableHeaderNames: { [K in keyof TUsers]?: string } = {
    userId: "ID",
    userName: "직원명",
    userRole: "권한",
    isCertified: "승인여부"
  }

  const overrideClass: { [K in keyof TUsers]?: string } = {
    userName: "w-4/12 ",
    userId: "w-4/12 ",
    userRole: "w-2/12 text-center",
    isCertified: "w-full text-center"
  }

  const overrideTdClass = {
    isCertified: "flex justify-center items-center"
  }

  const value: { [K in keyof TUsers]?: (v: TUsers[K]) => React.ReactNode } = {
    isCertified: (isCertified: boolean) => {
      return <div>{isCertified ? <VIcon /> : <XIcon />}</div>
    },
    userRole: (v) => {
      switch (v) {
        case "USER":
          return <div className="font-bold text-white bg-gray-600 py-1 rounded-lg">직원</div>;
        case "MANAGER":
          return <div className="font-bold text-white bg-blue-500 py-1 rounded-lg">매니저</div>;
        case "ADMIN":
          return <div className="font-bold text-white bg-green-600 py-1 rounded-lg">관리자</div>;
        case "GUEST":
          return <div className="font-bold text-white bg-gray-300 py-1 rounded-lg">게스트</div>;
      }
    },
  }

  return (
    <>
      <UsersHeader />
      <Table
        query={query}
        headerNames={tableHeaderNames}
        overrideClass={overrideClass}
        overrideTdClass={overrideTdClass}
        value={value}
        from={from}
      />
    </>
  )
}