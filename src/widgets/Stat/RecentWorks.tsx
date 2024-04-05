import { motion } from "framer-motion";
import { getDate, getDatesStartToLast } from "../../shared/util/date.util";
import useGetWorksQuery from "../../data/Work/work.get";
import { Dayoff } from "./Work/Dayoff";
import { TodayWorkSubscription } from "./Work/TodayWorkSubscription";
import { Loading } from "../../shared/component/Loading";
import { TWork } from "types-sssh";
import { Worked } from "./Work/Worked";
import { Working } from "./Working";
import { NotYetWork } from "./Work/NotYetWork";

export function RecentWorks() {
  const dates = getDatesStartToLast(new Date(new Date().setDate(new Date().getDate() - 6)), new Date()).reverse();

  const { isPending, isSuccess, data, refetch } = useGetWorksQuery(dates[dates.length - 1], dates[0]);

  function getWorkHistory(date: string, a: TWork[], idx: number) {
    const w = a.filter((i) => i.baseDate === date);

    if (w.length !== 0) {
      if (w[0].offTime) return <Worked key={`7work${idx}`} />
      return <Working key={`7work${idx}`} />
    } else {
      if (dates[0] === date) return <NotYetWork key={`7work${idx}`} />
      return <Dayoff key={`7work${idx}`} />
    }
  }

  return <motion.div
    transition={{ delay: 1.1, duration: 0.7 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="lg:col-span-2"
  >
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <h3 className="text-2xl font-light whitespace-nowrap leading-none tracking-tight">
          최근 7일 출근 기록
        </h3>
        {isPending && (
          <TodayWorkSubscription>
            최근 일주일간 출근 기록을 가져오는 중이에요!
          </TodayWorkSubscription>
        )}
      </div>
      {
        isPending && <Loading />
      }
      {
        isSuccess && (
          <div className="p-6">
            <div
              dir="ltr"
              className="relative overflow-hidden space-y-2"
            >
              <div
                data-radix-scroll-area-viewport=""
                className="h-full w-full rounded-[inherit]"
                style={{ overflow: "hidden" }}
              >
                <div className="flex flex-col gap-2">
                  <div className="px-1 font-xs font-extralight flex justify-between">
                    <span>{dates[0]}</span>
                  </div>
                  {dates.map((d, idx) => getWorkHistory(d, data, idx))}
                  <div className="px-1 font-xs font-extralight flex justify-between">
                    <span></span>
                    <span>{dates[dates.length - 1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  </motion.div>;
}

