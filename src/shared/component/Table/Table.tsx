import TableDataElement from "./TableDataElement";
import TableHeadElements from "./TableHeadElement";
import TableRowElement from "./TableRowElement";

type KeyOfStringValue<T> = {
  [K in keyof T]?: string;
}
interface TableProps<T> {
  overrideClass?: KeyOfStringValue<T>;
  overrideThClass?: KeyOfStringValue<T>;
  overrideTdClass?: KeyOfStringValue<T>;
  data: T[];
  headerNames: KeyOfStringValue<T>;
}

export default function Table<T extends object>({ overrideClass, overrideThClass, overrideTdClass, data, headerNames }: TableProps<T>) {
  const keyArr = Object.keys(headerNames) as [keyof T];


  return (
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
          {
            data.map((d, idx) => {
              const isLast = idx === data.length - 1;
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
        </thead>

      </table>
    </div>
  )
}