import { TodayWork } from "./TodayWork";
import { RecentWorks } from "./RecentWorks";
import { getDate } from "../../../shared/util/date.util";
import { TWork } from "@sssh-fresh-code/types-sssh";
import { UseQueryResult } from "@tanstack/react-query";

interface WorksProp {
  query: UseQueryResult<TWork[]>;
  dates: string[];
  refetch: () => void;
}

export default function Works({ query, dates, refetch }: WorksProp) {
  const today = getDate();

  return <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
    <TodayWork
      refetch={refetch}
      isPending={query.isPending}
      isSuccess={query.isSuccess}
      work={query.data?.filter((d) => d.baseDate === today)}
    />
    <RecentWorks query={query} dates={dates} />
  </div>;
}
