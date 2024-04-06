import useGetAlarmsQuery from "../../../data/Alarms/alarms.get";
import { Loading } from "../../../shared/component/Loading";
import AlarmBox from "./AlarmBox";
import EmptyAlarms from "./EmptyAlarms";

export default function Alarms() {
  const { isPending, isSuccess, data } = useGetAlarmsQuery();

  return <div className="flex overflow-x-auto gap-4 p-4 bg-gray-100 mb-3">
    {
      isPending && <div className="w-full justify-center items-center"><Loading /></div>
    }
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

