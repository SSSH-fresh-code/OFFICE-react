import { Page } from "types-sssh";
import TableDataElement from "./TableDataElement";
import TableHeadElements from "./TableHeadElement";
import TableRowElement from "./TableRowElement";
import { UseQueryResult } from "@tanstack/react-query";
import Pagination from "../Paging/Pagination";

type KeyOfStringValue<T> = {
  [K in keyof T]?: string;
}

interface TableProps<T> {
  overrideClass?: KeyOfStringValue<T>;
  overrideThClass?: KeyOfStringValue<T>;
  overrideTdClass?: KeyOfStringValue<T>;
  headerNames: KeyOfStringValue<T>;
  query: UseQueryResult<Page<T>, Error>;
}

export default function Table<T extends object>({ overrideClass, overrideThClass, overrideTdClass, query, headerNames }: TableProps<T>) {
  const keyArr = Object.keys(headerNames) as [keyof T];

  const { isError, isSuccess, isPending, data } = query;

  return (
    <>
      <div className="border shadow-sm rounded-lg min-h-min">
        <table className="caption-bottom text-sm">
          <thead className="[&amp;_tr]:border-b">
            <TableRowElement>
              {
                keyArr.map((key) => {
                  let oClass = ""
                  if (overrideClass && overrideClass[key]) {
                    oClass += overrideClass[key] + " ";
                  }
                  if (overrideThClass && overrideThClass[key]) {
                    oClass += overrideThClass[key]
                  }

                  return <TableHeadElements text={headerNames[key] || ""} overrideClass={oClass} />
                })
              }
            </TableRowElement>
          </thead>
          {(isSuccess && data) && (
            <tbody>
              {
                // TODO: 이거 data 형식들고 와서 타입 수정해야할듯...
                data.data.map((d) => {
                  return (
                    <TableRowElement overrideClass="hover:bg-gray-100 cursor-pointer">
                      {
                        keyArr.map((key) => {
                          let oClass = "";
                          if (overrideClass && overrideClass[key]) {
                            oClass += overrideClass[key] + " ";
                          }
                          if (overrideTdClass && overrideTdClass[key]) {
                            oClass += overrideTdClass[key]
                          }

                          return <TableDataElement text={d[key] as string} overrideClass={oClass} />
                        })
                      }
                    </TableRowElement>
                  )
                })
              }
              <div className={`flex content-between py-2 px-4 text-xs text-gray-400 font-light  align-middle transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted}`}>
                총 유저 : {data.info.total}명, {data.info.take}개 기준 페이징
              </div>
            </tbody>
          )}
        </table>
        {isPending && (
          <div className="flex justify-center items-center w-full p-3"><img src="/loading.svg" /></div>
        )}
      </div>
      {(isSuccess && data) && (<Pagination current={data.info.current} lastPage={data.info.last} />)}
    </>
  )
}