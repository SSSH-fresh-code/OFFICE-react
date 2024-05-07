import { Page } from "@sssh-fresh-code/types-sssh";
import TableDataElement from "./TableDataElement";
import TableHeadElements from "./TableHeadElement";
import TableRowElement from "./TableRowElement";
import { UseQueryResult } from "@tanstack/react-query";
import Pagination from "../Paging/Pagination";

export type From<T> = {
  href: string, key?: keyof T
}

type KeyOfStringValue<T> = {
  [K in keyof T]?: string;
}

export type TableOptions<T> = {
  from?: From<T>;
  pageName?: string;
  overrideClass?: KeyOfStringValue<T>;
  overrideThClass?: KeyOfStringValue<T>;
  overrideTdClass?: KeyOfStringValue<T>;
  value?: { [K in keyof T]?: (v: T[K]) => React.ReactNode };
}

interface TableProps<T> {
  query: UseQueryResult<Page<T>, Error>;
  headerNames: KeyOfStringValue<T>;
  options?: TableOptions<T>;
}

export default function Table<T extends object>({ options = {}, query, headerNames }: TableProps<T>) {
  const { overrideClass, overrideTdClass, overrideThClass, value, pageName = "page", from } = options;
  const keyArr = Object.keys(headerNames) as [keyof T];

  const { isSuccess, data } = query;
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
                            {(value && value[key]) ? value[key]!(d[key]) : String(d[key])}
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
      </div>
      {(isSuccess && data) && (<Pagination current={data.info.current} lastPage={data.info.last} pageName={pageName} />)}
    </>
  )
}