import { Page } from "types-sssh";
import TableDataElement from "./TableDataElement";
import TableHeadElements from "./TableHeadElement";
import TableRowElement from "./TableRowElement";
import { UseQueryResult } from "@tanstack/react-query";
import Pagination from "../Paging/Pagination";
import { Loading } from "../Loading";

export type From<T> = {
  href: string, key?: keyof T
}

type KeyOfStringValue<T> = {
  [K in keyof T]?: string;
}

interface TableProps<T> {
  query: UseQueryResult<Page<T>, Error>;
  headerNames: KeyOfStringValue<T>;
  from?: From<T>;
  overrideClass?: KeyOfStringValue<T>;
  overrideThClass?: KeyOfStringValue<T>;
  overrideTdClass?: KeyOfStringValue<T>;
  value: { [K in keyof T]?: (v: T[K]) => React.ReactNode };
}

export default function Table<T extends object>({ value, from, overrideClass, overrideThClass, overrideTdClass, query, headerNames }: TableProps<T>) {
  const keyArr = Object.keys(headerNames) as [keyof T];

  const { isSuccess, isPending, data } = query;
  return (
    <>
      <div className=" border shadow-sm rounded-lg min-h-min mb-3 whitespace-nowrap">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&amp;_tr]:border-b ">
            <TableRowElement idx={0}>
              {
                keyArr.map((key) => {
                  let oClass = ""
                  if (overrideClass && overrideClass[key]) {
                    oClass += overrideClass[key] + " ";
                  }
                  if (overrideThClass && overrideThClass[key]) {
                    oClass += overrideThClass[key]
                  }

                  return <TableHeadElements
                    text={headerNames[key] || ""}
                    overrideClass={oClass}
                    key={key.toString()}
                  />
                })
              }
            </TableRowElement>
          </thead>
          {(isSuccess && data.data.length !== 0) && (
            <tbody>
              {
                data.data.map((d, idx) => {
                  return (
                    <TableRowElement key={`row-${idx}`} row={d} idx={idx} from={from} overrideClass="hover:bg-gray-100 cursor-pointer">
                      {
                        keyArr.map((key) => {
                          let oClass = "";
                          if (overrideClass && overrideClass[key]) {
                            oClass += overrideClass[key] + " ";
                          }
                          if (overrideTdClass && overrideTdClass[key]) {
                            oClass += overrideTdClass[key]
                          }

                          return <TableDataElement key={key.toString()} overrideClass={oClass}>
                            {value[key] ? value[key]!(d[key]) : String(d[key])}
                          </TableDataElement>
                        })
                      }
                    </TableRowElement>
                  )
                })
              }
            </tbody>
          )}
        </table>
        {
          (isSuccess && data.data.length === 0) && (
            <div className="text-center w-full p-10">데이터가 존재하지 않습니다.</div>
          )
        }
        {isPending && <Loading />}
      </div>
      {(isSuccess && data) && (<Pagination current={data.info.current} lastPage={data.info.last} />)}
    </>
  )
}