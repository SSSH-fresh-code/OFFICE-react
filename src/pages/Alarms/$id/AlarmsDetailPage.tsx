import React, { useEffect, useState } from "react";
import { TUserRole } from "types-sssh";
import AlarmForm from "../../../widgets/Stat/Alarms/AlarmForm";
import useGetAlarmQuery from "../../../data/Alarms/alarm.get";
import usePatchAlarmsMutation from "../../../data/Alarms/alarms.patch";
import { Loading } from "../../../shared/component/Loading";
import FlatButton from "../../../shared/component/Button/FlatButton";
import usePopSotre from "../../../data/store/pop.store";
import useDeleteAlarmsMutation from "../../../data/Alarms/alarms.delete";

interface AlarmsDetailPageProps {
  id: string;
}
export default function AlarmsDetailPage({ id }: AlarmsDetailPageProps) {
  const { pop } = usePopSotre();
  const { isPending, isSuccess, data } = useGetAlarmQuery(id);

  const [aId, setAId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [order, setOrder] = useState<number>(1);
  const [path, setPath] = useState<string>("");
  const [userRole, setUserRole] = useState<TUserRole | undefined>();

  useEffect(() => {
    if (isSuccess && data) {
      setAId(data.id);
      setName(data.name);
      setTitle(data.title);
      setContents(data.contents);
      setOrder(data.order);
      setIcon(data.icon);
      setPath(data.path || "");
      setUserRole(data.userRole);
    }
  }, [isSuccess, data])

  const alarmsMutatiton = usePatchAlarmsMutation({
    id: aId, name, title, contents, icon, order, path, userRole
  });

  const deleteAlarmsMutation = useDeleteAlarmsMutation(aId);

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setName(form.name.value);
    setTitle(form.title.value);
    setContents(form.contents.value);
    setOrder(form.order.value);
    setIcon(form.icon.value);
    setPath(form.path.value);
    setUserRole(form.userRole.value);

    await alarmsMutatiton.mutate();
  }

  const del: React.FormEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    pop(`${name} 알람을 삭제하시겠습니까?`, "error", () => {
      deleteAlarmsMutation.mutate();
    }, true)
  }
  return (
    <>
      {(isPending) && <Loading />}
      {(isSuccess && data) && <AlarmForm submit={submit} alarm={data}>
        <FlatButton className="bg-red-500" text="삭제" type="button" onClick={del} />
      </AlarmForm>}
    </>
  )
}


