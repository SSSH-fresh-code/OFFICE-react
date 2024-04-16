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

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const allQuery = useGetAuthsAllQuery();
  const allData = allQuery.data;

  const { data, refetch } = useGetAuthsByAlarmsQuery(id);

  const patchAuth = usePatchAlarmsAuthMutation(id, checkedList, refetch);

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

  return (allData && data) && (
    <AuthForm allData={allData} checkedData={data} submit={submit} back={toList} />
  )
}


