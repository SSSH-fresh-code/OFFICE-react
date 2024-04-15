import FlatButton from "../../../../shared/component/Button/FlatButton";
import CheckRow from "../../../../widgets/Auths/User/CheckRow";
import React from "react";
import { TAuths } from "types-sssh";

interface AuthFormProps {
  submit: React.FormEventHandler<HTMLFormElement>;
  allData: TAuths[];
  checkedData: string[];
  back: () => Promise<void>;
}

export default function AuthForm({ submit, allData, checkedData, back }: AuthFormProps) {
  return <form onSubmit={submit} className="w-full h-[500px] col-span-1 sm:col-span-2">
    <div className="p-6 border h-full border-gray-200  rounded-lg shadow-md overflow-y-scroll w-full text-sm space-y-1">
      {(allData && checkedData) && (
        <>
          {allData.map((d, idx) => <CheckRow checked={checkedData.includes(d.code)} key={`checkRow-${idx}`} value={d.code} label={`${d.description}(${d.code})`} />)}
        </>
      )}
      {(allData && allData.length === 0) && (
        <div className="w-full flex justify-center items-center bg-gray-100 rounded-[inherit]">
          데이터가 없습니다.
        </div>
      )}
    </div>
    <div className="flex justify-end items-end gap-3 pt-6">
      <FlatButton onClick={back} type="button" className="w-[100px] border !text-black text-lg font-bold">
        뒤로
      </FlatButton>
      <FlatButton type="submit" className="w-[100px]  bg-green-500 font-bold">
        저장
      </FlatButton>
    </div>
  </form>;
}
