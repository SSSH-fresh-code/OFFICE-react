import WorkingIcon from "../../../shared/icons/working.icon";

export function Working() {
  return <div className="p-4 flex justify-between bg-blue-500 rounded-md font-extrabold text-white text-lg items-center">
    <span><WorkingIcon /></span>
    <span>Working!</span>
  </div>;
}
