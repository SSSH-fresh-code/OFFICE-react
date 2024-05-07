import { UseQueryResult } from "@tanstack/react-query";
import Table, { From, TableOptions } from "../../../shared/component/Table/Table";
import { UsersHeader } from "../UsersHeader";
import { Page, TUsers } from "@sssh-fresh-code/types-sssh";

interface UsersListProps {
  query: UseQueryResult<Page<TUsers>, Error>
  headers: object,
  overrideClass?: object,
  overrideTdClass?: object,
  value: object,
  from?: From<TUsers>
}

export default function UsersList({ query, headers, overrideClass, overrideTdClass, value, from }: UsersListProps) {

  const tableOptions: TableOptions<TUsers> = {
    overrideClass,
    overrideTdClass,
    value,
    from
  }

  return (
    <>
      <UsersHeader />
      <Table
        query={query}
        headerNames={headers}
        options={tableOptions}
      />
    </>
  )
}