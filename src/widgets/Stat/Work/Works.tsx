import { TodayWork } from "./TodayWork";
import { RecentWorks } from "./RecentWorks";
import useGetWorksQuery from "../../../data/Work/work.get";
import { getDate, getDatesStartToLast } from "../../../shared/util/date.util";

export default function Works() {
  const today = getDate();
  const dates = getDatesStartToLast(new Date(new Date().setDate(new Date().getDate() - 6)), new Date()).reverse();

  const query = useGetWorksQuery(dates[dates.length - 1], dates[0]);

  return <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
    <TodayWork isPending={query.isPending} isSuccess={query.isSuccess} work={query.data?.filter((d) => d.baseDate === today)} />
    <RecentWorks query={query} dates={dates} />
  </div>;
}
