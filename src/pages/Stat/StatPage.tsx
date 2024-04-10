import { AnimatePresence } from "framer-motion";
import Alarms from "../../widgets/Stat/Alarms/Alarms";
import Works from "../../widgets/Stat/Work/Works";
import { getDatesStartToLast } from "../../shared/util/date.util";
import useGetWorksQuery from "../../data/Work/work.get";
import useGetAlarmsQuery from "../../data/Alarms/alarms.get";
import usePopSotre from "../../data/store/pop.store";

function StatPage() {
  const { setLoading } = usePopSotre();
  const dates = getDatesStartToLast(new Date(new Date().setDate(new Date().getDate() - 6)), new Date()).reverse();

  const workQuery = useGetWorksQuery(dates[dates.length - 1], dates[0]);

  const alarmQuery = useGetAlarmsQuery();

  const statRefetch = async () => {
    setLoading(true);
    try {
      await workQuery.refetch();
      await alarmQuery.refetch()
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence key="StatPage">
      <div className="flex flex-col">
        <Alarms query={alarmQuery} />
        <Works query={workQuery} dates={dates} refetch={statRefetch} />
      </div >
    </AnimatePresence >
  )
}

export default StatPage;



