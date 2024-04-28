import useGetAuthsAllQuery from "../../../../data/Auths/auths.all.get";
import { useNavigate, useParams } from "@tanstack/react-router";
import usePopSotre from "../../../../data/store/pop.store";
import { FormEventHandler, useState } from "react";
import AuthForm from "../../user/$id/AuthForm";
import useGetAuthsByMenusQuery from "../../../../data/Auths/auths.menus.$id.get";
import usePatchMenusAuthMutation from "../../../../data/Auths/auths.menus.patch";

export default function AuthsMenusDetailPage() {
  const { pop } = usePopSotre();
  const navigate = useNavigate();

  const toList = () => navigate({ to: "/auths/menus" });
  const { id } = useParams({ strict: false });
  if (!id) pop("아이디 값이 올바르지 않습니다!", "error", toList);

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const allQuery = useGetAuthsAllQuery();
  const allData = allQuery.data;

  const { data, refetch } = useGetAuthsByMenusQuery(id);

  const patchAuth = usePatchMenusAuthMutation(id, checkedList, refetch);

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const checkedArray: string[] = [];

    const checkedInputs = e.currentTarget.querySelectorAll("input");

    for (const input of checkedInputs) {
      if (input.checked) checkedArray.push(input.getAttribute("value") || "");
    }

    setCheckedList(checkedArray);

    patchAuth.mutate();
  };

  return (
    allData &&
    data && (
      <AuthForm
        allData={allData}
        checkedData={data}
        submit={submit}
        back={toList}
      />
    )
  );
}
