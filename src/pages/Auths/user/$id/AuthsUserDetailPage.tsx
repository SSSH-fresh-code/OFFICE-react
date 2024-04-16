import useGetAuthsAllQuery from "../../../../data/Auths/auths.all.get";
import { useNavigate, useParams } from "@tanstack/react-router";
import useGetAuthsByUserQuery from "../../../../data/Auths/auths.users.$id.get";
import usePatchUserAuthMutation from "../../../../data/Auths/auths.users.patch";
import usePopSotre from "../../../../data/store/pop.store";
import { FormEventHandler, useState } from "react";
import AuthForm from "./AuthForm";

export default function AuthsUserDetailPage() {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  const toList = () => navigate({ to: "/auths/users" });

  const { id } = useParams({ strict: false });
  if (!id)
    pop("아이디 값이 올바르지 않습니다!", "error", toList)


  const [checkedList, setCheckedList] = useState<string[]>([]);
  const allQuery = useGetAuthsAllQuery();
  const allData = allQuery.data;

  console.log("잉?? : ", id);
  const { data, refetch } = useGetAuthsByUserQuery(id);

  const patchAuth = usePatchUserAuthMutation(id, checkedList, refetch);

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


