import React, { useState } from "react";
import { Input } from "../../../shared/component/Form/Input";
import { TAlarms } from "@sssh-fresh-code/types-sssh";
import TextArea from "../../../shared/component/Form/TextArea";
import { Select } from "../../../shared/component/Form/Select";
import PreviewAlarmBox from "./PreviewAlarmBoxProps";
import FlatButton from "../../../shared/component/Button/FlatButton";

interface AlarmFormProps {
  submit: React.FormEventHandler<HTMLFormElement>;
  alarm?: TAlarms;
  children?: React.ReactNode
}
export default function AlarmForm({ submit, alarm, children }: AlarmFormProps) {
  const [title, setTitle] = useState<string>(alarm?.title || "");
  const [contents, setContents] = useState<string>(alarm?.contents || "");
  const [icon, setIcon] = useState<string>(alarm?.icon || "");

  return <div className="px-2 pb-10 flex flex-col items-center justify-center bg-white text-black">
    <form className="w-full max-w-lg space-y-4" onSubmit={submit}>
      <Input
        title="순서"
        id="order"
        defaultValue={alarm?.order}
        type="number"
        option={{ required: true }}
      />
      <Input
        title="알람코드"
        id="name_"
        defaultValue={alarm?.name}
        option={{ placeHolder: "EXAMPLE_ALARMS", required: true }}
      />
      <Select
        title="아이콘"
        id="icon"
        defaultValue={alarm?.icon || ""}
        setter={setIcon}
        option={{ required: true }}
      >
        <option value="">아이콘을 선택해주세요.</option>
        <option value="Certification">Certification</option>
        <option value="GoToWork">GoToWork</option>
      </Select>
      <Input
        title="알람 제목"
        id="title_"
        defaultValue={alarm?.title}
        setter={setTitle}
        option={{ placeHolder: "제목을 입력해주세요.", required: true }}
      />
      <TextArea
        title="알람 내용"
        id="contents"
        defaultValue={alarm?.contents}
        setter={setContents}
        option={{ placeHolder: "내용을 입력해주세요.", required: true }} rows={3}
      />
      <Input
        title="경로"
        id="path"
        defaultValue={alarm?.path}
        option={{ placeHolder: "/example/path", required: false }}
      />
      <span className="text-xs text-gray-400">해당 알람을 누르면 이동할 경로입니다. <br />경로값이 없을 시 아무런 동작을 하지 않습니다.</span>
      <PreviewAlarmBox icon={icon} title={title} contents={contents} />

      <div className="flex flex-col gap-2">
        <FlatButton text="저장" type="submit" />
        {children}
      </div>
    </form>
  </div>;
}
