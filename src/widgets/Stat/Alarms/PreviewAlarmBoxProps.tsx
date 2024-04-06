import AlarmBox from "./AlarmBox";

interface PreviewAlarmBoxProps {
  icon: string; title: string; contents: string;
}
export default function PreviewAlarmBox({ icon, title, contents }: PreviewAlarmBoxProps) {
  return <div className="flex flex-col justify-center items-center gap-3">
    <label
      className="flex flex-col text-center text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 gap-1"
      htmlFor="user-role"
    >
      미리보기
      <span className="text-xs text-gray-400 font-light">실제로 페이지 이동은 발생하지 않아요.</span>
    </label>
    <AlarmBox order={1} alarm={{ icon, title, contents, order: 1, name: "EXAMPLE", userRole: "ADMIN" }} />
  </div>;
}
