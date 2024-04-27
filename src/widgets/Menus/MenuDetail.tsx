import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../../shared/component/Form/Input";
import FlatButton from "../../shared/component/Button/FlatButton";
import { MenusIconFactory } from "./MenusIconFactoryProps";
import MenusIconProps from "../../shared/icons/icons.interface";
import { Select } from "../../shared/component/Form/Select";
import MenusEnum from "../../shared/constant/menus.enum";
import { ChildMenusItem } from "./ChildMenusItem";
import { ParentMenuListItem } from "../../shared/types/menus";
import useGetMenuQuery from "../../data/Menus/menu.get";
import usePatchMenuMutation from "../../data/Menus/menu.patch";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import CheckIcon from "../../shared/icons/btns/check.icon";
import DeleteIcon from "../../shared/icons/btns/delete.icon";
import usePopSotre from "../../data/store/pop.store";
import useDeleteMenuMutation from "../../data/Menus/menu.delete";
import { QueryObserverResult } from "@tanstack/react-query";

interface MenuDetailProps {
  menu: ParentMenuListItem;
  refetchList: () => Promise<QueryObserverResult<TMenu[], Error>>;
  setSelectedMenu: Dispatch<SetStateAction<ParentMenuListItem | undefined>>;
}
export function MenuDetail({
  menu,
  refetchList,
  setSelectedMenu,
}: MenuDetailProps) {
  const { pop } = usePopSotre();

  const [id, setId] = useState<number>(+menu.id || -1);
  const [name, setName] = useState<string>(menu.name || "");
  const [icon, setIcon] = useState<number>(menu.icon || -1);
  const [order, setOrder] = useState<number>(menu.order || -1);

  const [childMenus, setChildMenus] = useState<TMenu[]>([]);

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const orderRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLSelectElement>(null);

  const { isSuccess, isPending, data, refetch } = useGetMenuQuery(id);

  const patchMutation = usePatchMenuMutation(
    { id, name, icon, order },
    refetch,
  );

  useEffect(() => {
    setId(menu.id);
    setIsCreating(false);
    setOrder(menu.order);
    setName(menu.name);
    setIcon(menu.icon);

    if (orderRef.current && nameRef.current && iconRef.current) {
      orderRef.current.value = menu.order;
      nameRef.current.value = menu.name;
      iconRef.current.value = menu.icon;
    }
    if (isSuccess && !isPending) setChildMenus(data.childMenus || []);
  }, [menu, data, isSuccess, isPending]);

  const props: MenusIconProps = {
    width: "2rem",
    height: "2rem",
    color: "black",
  };

  const deleteMutation = useDeleteMenuMutation(id + "", () => {
    refetchList();
    setSelectedMenu(undefined);
  });

  const deleteMenu = async () => {
    if (id < 0) {
      return pop("올바른 접근이 아닙니다.\n화면을 새로고침 해주세요.", "error");
    }

    deleteMutation.mutate();
  };

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!order || !name || !icon) {
      pop("입력 값을 다시 확인해주세요.", "error");
      return;
    }

    patchMutation.mutate();
  };

  return (
    isSuccess && (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="col-span-1 bg-white rounded-lg shadow-md md:col-span-2 pb-4"
      >
        <form className="p-6  flex flex-col gap-5" onSubmit={submit}>
          <h1 className="text-3xl font-bold flex gap-2 items-center">
            <MenusIconFactory props={props} iconName={icon || -1} />
            {name}
          </h1>
          <Input
            option={{ ref: orderRef, min: 0, required: true }}
            type="number"
            id="order"
            title="순서"
            defaultValue={order}
            setter={setOrder}
          />
          <Input
            option={{ ref: nameRef, max: 20, min: 8, required: true }}
            type="text"
            id={"name"}
            title={"이름"}
            defaultValue={data.name}
            setter={setName}
          />
          <Select
            title="아이콘"
            id="icon"
            defaultValue={`${data.icon}` || ""}
            setter={setIcon}
            option={{ ref: iconRef, required: true }}
          >
            <option value="">아이콘을 선택해주세요.</option>
            {Object.values(MenusEnum)
              .filter((v) => isNaN(Number(v)))
              .map((a, idx) => (
                <option value={idx}>{a}</option>
              ))}
          </Select>
          <div className="!flex justify-end items-center gap-3">
            <FlatButton
              className="bg-white border border-gray-100 shadow-lg !w-1/2 !text-black gap-2"
              type="submit"
            >
              <CheckIcon color="black" /> 수정하기
            </FlatButton>
            <FlatButton
              className="bg-white border border-gray-100 shadow-lg !w-1/2 !text-black gap-2"
              type="button"
              onClick={deleteMenu}
            >
              <DeleteIcon color="black" /> 삭제하기
            </FlatButton>
          </div>
        </form>

        <div className="px-6 py-2 gap-3 flex flex-col">
          <h1 className="font-bold text-xl">하위 메뉴</h1>
          <hr />
          {childMenus.map((m) => (
            <ChildMenusItem menu={m} parentId={menu.id} refetch={refetch} />
          ))}
          {!isCreating ? (
            <FlatButton
              className="border border-gray-100 font-bold shadow-lg rounded-lg text-center !text-black"
              type="button"
              onClick={() => setIsCreating(true)}
            >
              +
            </FlatButton>
          ) : (
            <ChildMenusItem
              parentId={menu.id}
              refetch={refetch}
              setIsCreating={setIsCreating}
            />
          )}
        </div>
      </motion.div>
    )
  );
}
