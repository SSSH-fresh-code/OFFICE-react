import { TUserRole, TUsers } from "types-sssh";
import { UserInput } from "./UserInput";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useApi from "../../../data/api/useApi.hook";
import { AnimatePresence, motion } from "framer-motion";

interface UserDetailFormProps {
  user: TUsers
}

export default function UserDetailFrom({ user }: UserDetailFormProps) {
  const [userName, setUserName] = useState<string>(user.userName);
  const [userRole, setUserRole] = useState<TUserRole>(user.userRole);
  // const [userPw, setUserPw] = useState<string>("");
  // const [newPw, setNewPw] = useState<string>("");
  // const [newPwRe, setNewPwRe] = useState<string>("");
  const [isChange, setIsChange] = useState<boolean>(false);

  const getUserInBody: () => Pick<TUsers, "id" | "userName" | "userRole"> = () => ({
    id: user.id,
    userName,
    userRole
  });

  const mutation = useMutation({
    mutationFn: useApi("/users", "PATCH", JSON.stringify(getUserInBody())),
    onSuccess(data) {
      console.log(data);
    },
  });

  const isUserChange = (user: TUsers) => {
    const h = user.userName !== userName || user.userRole !== userRole;
    return h;
  }

  useEffect(() => {
    setIsChange(isUserChange(user));
  }, [userName, userRole])

  const modify: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutation.mutate();
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full bg-gray-50 p-6 rounded-lg shadow m-auto max-w-3xl"
      >
        <form id="userDetailForm" className="space-y-4 grid  gap-5 grid-cols-12 " onSubmit={modify}>
          <input type="hidden" id="id" name="id" value={user.id} />

          <UserInput title="아이디" id="userId" defaultValue={user.userId} option={{ readonly: true }} />
          <UserInput title="이름" id="userName" defaultValue={user.userName} setter={setUserName} option={{ min: 2, max: 10 }} />

          <div className=" col-span-12">
            <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">User Role:</label>
            <select
              id="userRole"
              name="userRole"
              className={`
              p-2 flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5
              mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50
            `}
              defaultValue={user.userRole}
              onChange={(e) => setUserRole(e.currentTarget.value as TUserRole)}
            >
              <option value={"ADMIN"}>Admin</option>
              <option value={"MANAGER"}>Manager</option>
              <option value={"USER"}>User</option>
              <option value={"GUEST"}>Guest</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 col-span-12">
            <label htmlFor="userRole" className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
            <button type="button" className="w-full px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">비밀번호 초기화</button>
            <span className="text-xs text-gray-400">타인의 비밀번호는 초기화만 가능합니다. 자신의 비밀번호는 내 정보에 가서 수정해주세요.</span>
          </div>

          <div className="col-span-12 flex justify-center items-center gap-5">
            <button
              type="submit"
              disabled={!isChange}
              className=" w-1/2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 disabled:bg-slate-400"
            >Modify</button>
            <button type="button" className="w-1/2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">Delete</button>
          </div>
        </form >
      </motion.div >
    </AnimatePresence>
  )
}


