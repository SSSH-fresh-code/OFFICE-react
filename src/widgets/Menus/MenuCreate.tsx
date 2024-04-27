import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../../shared/component/Form/Input";
import FlatButton from "../../shared/component/Button/FlatButton";
import { MenusIconFactory } from "./MenusIconFactoryProps";
import MenusIconProps from "../../shared/icons/icons.interface";
import { Select } from "../../shared/component/Form/Select";
import MenusEnum from "../../shared/constant/menus.enum";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import { QueryObserverResult } from "@tanstack/react-query";
import CheckIcon from "../../shared/icons/btns/check.icon";
import usePostMenuMutation from "../../data/Menus/menu.post";
import usePopSotre from "../../data/store/pop.store";
import { ParentMenuListItem } from "../../shared/types/menus";

interface MenuCreateProps {
  refetch: () => Promise<QueryObserverResult<TMenu[], Error>>;
  setSelectedMenu: Dispatch<SetStateAction<ParentMenuListItem | undefined>>;
}
export function MenuCreate({ refetch, setSelectedMenu }: MenuCreateProps) {
  const { pop } = usePopSotre();

  const [name, setName] = useState<string>("");
  const [icon, setIcon] = useState<number>(-1);
  const [order, setOrder] = useState<number>(1);

  const postMutation = usePostMenuMutation(
    { name, icon, order },
    (data?: ParentMenuListItem) => {
      refetch();
      setSelectedMenu(data);
    },
  );

  const props: MenusIconProps = {
    width: "2rem",
    height: "2rem",
    color: "black",
  };

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!order || !name || !icon) {
      pop("입력 값을 다시 확인해주세요.", "error");
      return;
    }

    postMutation.mutate();
  };

  return (
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
          option={{ min: 0, required: true }}
          type="number"
          id={"order"}
          title={"순서"}
          defaultValue={1}
          setter={setOrder}
        />
        <Input
          option={{ min: 2, required: true }}
          type="text"
          id={"name"}
          title={"이름"}
          setter={setName}
        />
        <Select
          title="아이콘"
          id="icon"
          defaultValue={""}
          setter={setIcon}
          option={{ required: true }}
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
            className="bg-white border border-gray-100 shadow-lg !text-black gap-2 !font-bold"
            type="submit"
          >
            <CheckIcon color="black" />
            메뉴 추가하기
          </FlatButton>
        </div>
      </form>
    </motion.div>
  );
}
