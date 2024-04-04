import NotYetIcon from "../../shared/icons/notyet";

export function NotYetWork() {
  return <div className="p-4 flex justify-between bg-white rounded-md font-extrabold text-gray-500 text-lg items-center border-2 border-gray-500">
    <span><NotYetIcon /></span>
    <span>Not yet...</span>
  </div>;
}
