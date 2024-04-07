import { useSearch } from "@tanstack/react-router";
import useGetAlarmListQuery from "../../../data/Alarms/alarms.list.get"
import { AnimatePresence } from "framer-motion";
import Pagination from "../../../shared/component/Paging/Pagination";
import AlarmBox from "../../../widgets/Stat/Alarms/AlarmBox";

export default function AlarmsListPage() {

  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const { isSuccess, data } = useGetAlarmListQuery(page);

  return (
    <AnimatePresence key="AlarmsListPage">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {isSuccess && (
          data.data.map((a, idx) => (
            <div className="p-1" key={`alarmList-${idx}`}>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex aspect-square items-center justify-center p-6">
                  <AlarmBox order={idx} alarm={{ ...a, path: `/alarms/${a.id}` }} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {(isSuccess && data) && (<Pagination current={data.info.current} lastPage={data.info.last} />)}
    </AnimatePresence>
  )
}