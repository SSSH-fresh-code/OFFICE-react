import React, { useState } from "react";
import { UserInput } from "../../../widgets/Users/$id/UserInput";
import { TUserRole } from "types-sssh";
import TextArea from "../../../widgets/Users/$id/TextArea";
import { Select } from "./Select";
import PreviewAlarmBox from "./PreviewAlarmBoxProps";
import FlatButton from "./FlatButton";
import usePostAlarmsMutation from "../../../data/Alarms/alarms.post";

export default function AlarmsCreatePage() {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [order, setOrder] = useState<number>(1);
  const [path, setPath] = useState<string>("");
  const [userRole, setUserRole] = useState<TUserRole>("ADMIN");

  const alarmsMutatiton = usePostAlarmsMutation({
    name, title, contents, icon, order, path, userRole
  });

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await alarmsMutatiton.mutate();
  }
  return (
    <div className="px-2 pb-10 flex flex-col items-center justify-center bg-white text-black">
      <form className="w-full max-w-lg space-y-4" onSubmit={submit}>
        <UserInput title="순서" id="order" defaultValue={order} type="number" setter={setOrder} option={{ required: true }} />
        <UserInput title="알람코드" id="name" option={{ placeHolder: "EXAMPLE_ALARMS", required: true }} setter={setName} />
        <Select
          title="아이콘"
          setter={setIcon}
          defaultValue={icon}
          option={{ required: true }}
        >
          <option selected value="">아이콘을 선택해주세요.</option>
          <option value="Certification">Certification</option>
          <option value="GoToWork">GoToWork</option>
        </Select>
        <UserInput title="알람 제목" id="title" option={{ placeHolder: "제목을 입력해주세요.", required: true }} setter={setTitle} />
        <TextArea title="알람 내용" id="contents" option={{ placeHolder: "내용을 입력해주세요.", required: true }} rows={3} setter={setContents} />
        <UserInput title="경로" id="path" option={{ placeHolder: "/example/path", required: false }} setter={setPath} />
        <span className="text-xs text-gray-400">해당 알람을 누르면 이동할 경로입니다. <br />경로값이 없을 시 아무런 동작을 하지 않습니다.</span>
        <Select
          title="알람 권한"
          description="해당 알람을 받을 권한입니다."
          tabIndex={-1}
          setter={setUserRole}
          option={{ required: true }}
        >
          <option selected value="">권한을 선택해주세요.</option>
          <option value="ADMIN">Admin</option>
          <option value="MANAGER">Manager</option>
          <option value="USER">User</option>
        </Select>
        <PreviewAlarmBox icon={icon} title={title} contents={contents} />
        <FlatButton text="생성" type="submit" />
      </form>
    </div>
  )
}