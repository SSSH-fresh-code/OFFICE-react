import WorkCheckIcon from "../../../shared/icons/workCheck.icon";

export function Worked() {
  return <div className="p-4 flex justify-between bg-green-500 rounded-md font-extrabold text-white text-lg items-center">
    <span><WorkCheckIcon /></span>
    <span>Worked!<span className="text-xs font-light">(09:37~17:23)</span></span>
  </div>;
}
