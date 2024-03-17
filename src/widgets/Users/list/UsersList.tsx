import { UseQueryResult } from "@tanstack/react-query";
import Table, { From } from "../../../shared/component/Table/Table";
import { UsersHeader } from "../UsersHeader";
import { Page, TUsers } from "types-sssh";

interface UsersListProps {
  query: UseQueryResult<Page<TUsers>, Error>
  headers: object,
  overrideClass?: object,
  overrideTdClass?: object,
  value: object,
  from?: From<TUsers>
}

export default function UsersList({ query, headers, overrideClass, overrideTdClass, value, from }: UsersListProps) {
  return (
    <>
      <UsersHeader />
      <Table
        query={query}
        headerNames={headers}
        overrideClass={overrideClass}
        overrideTdClass={overrideTdClass}
        value={value}
        from={from}
      />
    </>
  )
}