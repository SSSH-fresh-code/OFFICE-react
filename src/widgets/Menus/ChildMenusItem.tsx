import { Input } from "../../shared/component/Form/Input";
import FlatButton from "../../shared/component/Button/FlatButton";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import EditIcon from "../../shared/icons/btns/edit.icon";
import DeleteIcon from "../../shared/icons/btns/delete.icon";
import BackIcon from "../../shared/icons/btns/back.icon";
import usePopSotre from "../../data/store/pop.store";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import { QueryObserverResult } from "@tanstack/react-query";
import usePatchMenuMutation from "../../data/Menus/menu.patch";
import usePostMenuMutation from "../../data/Menus/menu.post";
import CancelIcon from "../../shared/icons/btns/cancel.icon";
import CheckIcon from "../../shared/icons/btns/check.icon";
import useDeleteMenuMutation from "../../data/Menus/menu.delete";

interface ChildMenusItemProps {
  menu?: TMenu;
  parentId: number;
  refetch: () => Promise<QueryObserverResult<TMenu, Error>>;
  setIsCreating?: Dispatch<SetStateAction<boolean>>;
}

export function ChildMenusItem({
  menu,
  parentId,
  refetch,
  setIsCreating,
}: ChildMenusItemProps) {
  const [id, setId] = useState<number>(menu?.id || -1);
  const [name, setName] = useState<string>(menu?.name || "");
  const [link, setLink] = useState<string>(menu?.link || "");
  const [order, setOrder] = useState<number>(menu?.order || 1);

  const { pop } = usePopSotre();

  const [modifying, setModifying] = useState<boolean>(menu ? false : true);

  const orderRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const inputClass = "text-center";

  const patchMutation = usePatchMenuMutation(
    { id, name, link, order, parentId },
    () => {
      refetch();
    },
  );
  const postMutation = usePostMenuMutation(
    { name, link, order, parentId },
    () => {
      refetch();
      initData();
    },
  );
  const deleteMutation = useDeleteMenuMutation(id + "", () => {
    refetch();
  });

  const initData = () => {
    if (orderRef.current && nameRef.current && linkRef.current) {
      orderRef.current.value = menu?.order ? menu.order + "" : "-1";
      nameRef.current.value = menu?.name || "";
      linkRef.current.value = menu?.link || "";
    }

    setModifying(false);
    if (setIsCreating) setIsCreating(false);
  };

  useEffect(() => {
    if (menu) {
      initData();
      setId(menu.id || -1);
    }
  }, [menu]);

  const deleteMenu = async () => {
    if (id < 0) {
      return pop("올바른 접근이 아닙니다.\n화면을 새로고침 해주세요.", "error");
    }

    deleteMutation.mutate();
  };

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!order || !name || !link) {
      pop("입력 값을 다시 확인해주세요.", "error");
      return;
    }

    if (id > -1) {
      patchMutation.mutate();
    } else {
      postMutation.mutate();
    }
  };

  return (
    <form className="grid grid-cols-8 w-full gap-3" onSubmit={submit}>
      <Input
        option={{ ref: orderRef, readonly: !modifying, className: inputClass }}
        type="number"
        id="order"
        title="순서"
        className="!col-span-1"
        defaultValue={order}
        setter={setOrder}
      />
      <Input
        option={{ ref: nameRef, readonly: !modifying }}
        type="text"
        id="name"
        title="이름"
        className="!col-span-3"
        defaultValue={menu?.name}
        setter={setName}
      />
      <Input
        option={{ ref: linkRef, readonly: !modifying }}
        type="text"
        id="link"
        title="링크"
        className="!col-span-2"
        defaultValue={menu?.link}
        setter={setLink}
      />

      <div className="!flex justify-end items-end gap-1 !col-span-2">
        {menu ? (
          modifying ? (
            <>
              <FlatButton
                className="bg-white border border-gray-100 shadow-lg !w-1/2"
                type="submit"
              >
                <EditIcon color="black" />
              </FlatButton>
              <FlatButton
                className="bg-white border border-gray-100 shadow-lg !w-1/2"
                type="button"
                onClick={initData}
              >
                <BackIcon color="black" />
              </FlatButton>
            </>
          ) : (
            <>
              <FlatButton
                className="bg-white border border-gray-100 shadow-lg !w-1/2"
                type="button"
                onClick={() => setModifying(true)}
              >
                <EditIcon color="black" />
              </FlatButton>
              <FlatButton
                className="bg-white border border-gray-100 shadow-lg !w-1/2"
                type="button"
                onClick={deleteMenu}
              >
                <DeleteIcon color="black" />
              </FlatButton>
            </>
          )
        ) : (
          <>
            <FlatButton
              className="bg-white border border-gray-100 shadow-lg !w-1/2"
              type="submit"
            >
              <CheckIcon color="black" />
            </FlatButton>
            <FlatButton
              className="bg-white border border-gray-100 shadow-lg !w-1/2"
              type="button"
              onClick={initData}
            >
              <CancelIcon color="black" />
            </FlatButton>
          </>
        )}
      </div>
    </form>
  );
}
