import { TUsers } from "@sssh-fresh-code/types-sssh";
import { Input } from "../../../shared/component/Form/Input";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import usePatchUserMutation from "../../../data/Users/user.patch";
import usePopSotre from "../../../data/store/pop.store";
import useDeleteUserMutation from "../../../data/Users/user.delete";
import { QueryObserverResult } from "@tanstack/react-query";

interface UserDetailFormProps {
  user: TUsers;
  refetch: () => Promise<QueryObserverResult<TUsers, Error>>;
}

export default function UserDetailForm({ user, refetch }: UserDetailFormProps) {
  const [userName, setUserName] = useState<string>(user.userName);
  const [isChange, setIsChange] = useState<boolean>(false);

  const { pop } = usePopSotre();

  const modifyMutation = usePatchUserMutation({
    id: user.id,
    userName,
    isPwReset: false
  }, refetch);

  const pwResetMutation = usePatchUserMutation({
    ...user,
    isPwReset: true
  }, refetch);

  const deleteMutation = useDeleteUserMutation(user.id);

  const isUserChange = (user: TUsers) => {
    const h = user.userName !== userName;
    return h;
  }

  useEffect(() => {
    setIsChange(isUserChange(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName])

  const modify: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    modifyMutation.mutate();
  }

  const pwReset: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    pop(
      `${user.userId} 계정의 비밀번호를 초기화 하시겠습니까?`,
      "info",
      () => pwResetMutation.mutate(),
      true
    )
  }

  const deleteUser: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    pop(
      `${user.userId} 계정을 삭제하시겠습니까?`,
      "error",
      () => deleteMutation.mutate(),
      true
    )
  }

  return (
    <AnimatePresence key="UserDetailForm">
      <motion.div
        key="userDetailForm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full bg-gray-50 p-6 rounded-lg shadow m-auto max-w-3xl"
      >
        <form id="userDetailForm" className="space-y-4 grid  gap-5 grid-cols-12 " onSubmit={modify}>
          <input type="hidden" id="id" name="id" value={user.id} />

          <Input title="아이디" id="userId" defaultValue={user.userId} option={{ readonly: true }} />
          <Input title="이름" id="userName" defaultValue={user.userName} setter={setUserName} option={{ min: 2, max: 10 }} />

          <div className="flex flex-col gap-1 col-span-12">
            <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
            <button
              type="button"
              className="w-full px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
              onClick={(e) => pwReset(e)}
            >
              비밀번호 초기화
            </button>
            <span className="text-xs text-gray-400">타인의 비밀번호는 초기화만 가능합니다. 자신의 비밀번호는 내 정보에 가서 수정해주세요.</span>
          </div>

          <div className="col-span-12 flex justify-center items-center gap-5">
            <button
              type="submit"
              disabled={!isChange}
              className=" w-1/2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 disabled:bg-slate-400"
            >Modify</button>
            <button
              type="button"
              className="w-1/2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
              onClick={(e) => deleteUser(e)}
            >
              Delete
            </button>
          </div>
        </form >
      </motion.div >
    </AnimatePresence>
  )
}


