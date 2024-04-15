import useGetAuthsAllQuery from "../../../../data/Auths/auths.all.get";
import { useNavigate, useParams } from "@tanstack/react-router";
import usePopSotre from "../../../../data/store/pop.store";
import { FormEventHandler, useState } from "react";
import AuthForm from "../../user/$id/AuthForm";
import useGetAuthsByAlarmsQuery from "../../../../data/Auths/auths.alarms.$id.get";
import usePatchAlarmsAuthMutation from "../../../../data/Auths/auths.alarms.patch";

export default function AuthsAlarmDetailPage() {
  const { id } = useParams({ strict: false });
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  const toList = () => navigate({ to: "/auths/alarms" });

  if (!id)
    pop("아이디 값이 올바르지 않습니다!", "error", toList)
  // TODO: 백엔드 알람 조회 권한 바꾸기! -> 유저 정보 권한 전부 or로!
  // TODO: 알람 권한 가져오는 api 생성!
  // TODO: 알람 권한 까지 완성하고 메뉴 권한 만들기!


  const [checkedList, setCheckedList] = useState<string[]>([]);
  const allQuery = useGetAuthsAllQuery();
  const allData = allQuery.data;

  const byAlarmsQuery = useGetAuthsByAlarmsQuery(id);
  const byAlarmsData = byAlarmsQuery.data;

  const patchAuth = usePatchAlarmsAuthMutation(id, checkedList);

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const checkedArray: string[] = [];

    const checkedInputs = e.currentTarget.querySelectorAll("input");

    for (const input of checkedInputs) {
      if (input.checked) checkedArray.push(input.getAttribute("value") || "");
    }

    setCheckedList(checkedArray);

    patchAuth.mutate();
  }

  return (allData && byAlarmsData) && (
    <AuthForm allData={allData} checkedData={byAlarmsData} submit={submit} back={toList} />
  )
}


