import Pagination from "../../../shared/component/Paging/Pagination";
import AlarmsListElement from "./AlarmsListElement";
import AlarmsListNotFound from "./AlarmsListNotFound";
import { Page, TAlarms } from "types-sssh";
import { UseQueryResult } from "@tanstack/react-query";

interface AlarmListProps {
  pathPrefix: string;
  pathSuffix?: string;
  query: UseQueryResult<Page<TAlarms>>;
}
export default function AlarmList({ query, pathPrefix, pathSuffix }: AlarmListProps) {

  const { isSuccess, data } = query;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {isSuccess && data.data.length !== 0 && (
          data.data.map((a, idx) => <AlarmsListElement idx={idx} alarm={a} path={`${pathPrefix}${a.id}${pathSuffix || ""}`} />)
        )}
        {isSuccess && data.data.length === 0 && <AlarmsListNotFound />}
      </div>
      {(isSuccess && data) && (<Pagination current={data.info.current} lastPage={data.info.last} />)}
    </>
  );
}
