import { TAlarms } from "@sssh-fresh-code/types-sssh";
import AlarmBox from "./AlarmBox";
import EmptyAlarms from "./EmptyAlarms";
import { UseQueryResult } from "@tanstack/react-query";

interface AlarmsProp {
  query: UseQueryResult<TAlarms[]>;
}

export default function Alarms({ query }: AlarmsProp) {
  const { isSuccess, data } = query;

  return <div className="flex overflow-x-auto gap-4 p-4 bg-gray-100 mb-3">
    {
      (isSuccess && data.length !== 0) && (
        data.map((a, idx) => <AlarmBox key={idx} order={idx + 1} alarm={a} />)
      )
    }
    {
      (isSuccess && data.length === 0) && <EmptyAlarms />
    }
  </div>;
}

