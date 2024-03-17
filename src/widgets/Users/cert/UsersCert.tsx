import { Page, TUsers } from "types-sssh";
import Table from "../../../shared/component/Table/Table";
import { UseQueryResult } from "@tanstack/react-query";

interface UsersCertProps {
  query: UseQueryResult<Page<TUsers>, Error>
  headers: object,
  overrideClass?: object,
  overrideTdClass?: object,
  value: object,
}

export default function UsersCert({ query, value, headers, overrideClass, overrideTdClass }: UsersCertProps) {

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md bg-gray-300 px-5">
          전체 승인
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md bg-gray-300 px-5">
          승인
        </button>
      </div>
      <Table
        query={query}
        headerNames={headers}
        overrideClass={overrideClass}
        overrideTdClass={overrideTdClass}
        value={value}
      />
    </>
  )
}