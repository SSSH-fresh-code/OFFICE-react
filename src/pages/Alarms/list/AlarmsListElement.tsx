import AlarmBox from "../../../widgets/Stat/Alarms/AlarmBox";
import { TAlarms } from "@sssh-fresh-code/types-sssh";

interface AlarmsListElementProps {
  idx: number;
  alarm: TAlarms;
  path: string;
}

export default function AlarmsListElement({ idx, alarm, path }: AlarmsListElementProps) {
  return <div className="p-1" key={`alarmList-${idx}`}>
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex aspect-square items-center justify-center p-6">
        <AlarmBox order={idx} alarm={{ ...alarm, path }} />
      </div>
    </div>
  </div>;
}
