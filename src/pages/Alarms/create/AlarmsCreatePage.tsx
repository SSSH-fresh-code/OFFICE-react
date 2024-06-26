import React, { useState } from "react";
import AlarmForm from "../../../widgets/Stat/Alarms/AlarmForm";
import usePostAlarmsMutation from "../../../data/Alarms/alarms.post";

export default function AlarmsCreatePage() {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [order, setOrder] = useState<number>(1);
  const [path, setPath] = useState<string>("");

  const alarmsMutatiton = usePostAlarmsMutation({
    name, title, contents, icon, order, path
  });

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setName(form.name_.value);
    setTitle(form.title_.value);
    setContents(form.contents.value);
    setOrder(form.order.value);
    setIcon(form.icon.value);
    setPath(form.path.value);

    await alarmsMutatiton.mutate();
  }

  return <AlarmForm submit={submit} />
}


