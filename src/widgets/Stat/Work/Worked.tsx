import { TWork } from "@sssh-fresh-code/types-sssh";
import WorkCheckIcon from "../../../shared/icons/workCheck.icon";
import { addZero } from "../../../shared/util/date.util";

interface TPropsWorked {
  work: TWork & { createdAt?: string, updatedAt?: string }

}
export default function Worked({ work }: TPropsWorked) {
  const s = new Date(work.createdAt || "");
  const e = new Date(work.offTime);

  const a = (d: Date) => `${addZero(d.getHours(), 10)}:${addZero(d.getMinutes(), 10)}`

  return <div className="p-4 flex justify-between bg-green-500 rounded-md font-extrabold text-white text-lg items-center">
    <span><WorkCheckIcon /></span>
    <span>Worked!<span className="text-xs font-light">{`(${a(s)}~${a(e)})`}</span></span>
  </div>;
}
