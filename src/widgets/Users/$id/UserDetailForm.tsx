import { TUsers } from "types-sssh";
import { UserInput } from "./UserInput";

interface UserDetailFormProps {
  user: TUsers
}

export default function UserDetailFrom({ user }: UserDetailFormProps) {
  return (
    <div className="w-full bg-gray-50 p-6 rounded-lg shadow ">
      <div className="w-full text-center text-2xl font-bold">유저 정보</div>
      <form id="userDetailForm" className="space-y-4 grid  gap-5 grid-cols-12">
        <input type="hidden" id="id" name="id" value={user.id} />

        <UserInput title="아이디" id="userId" defaultValue={user.userId} readonly={true} />
        <UserInput title="이름" id="userName" defaultValue={user.userName} />
        <UserInput title="현재 비밀번호" id="userPw" type="password" />
        <UserInput title="새 비밀번호" id="newPw" type="password" />
        <UserInput title="새 비밀번호 확인" id="newPw" type="password" />

        <div className=" col-span-12 md:col-span-6">
          <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">User Role:</label>
          <input type="select" id="userRole" name="userRole" readOnly className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" disabled />
        </div>

        <div className="col-span-12 flex justify-center items-center gap-3 lg:justify-end">
          <button type="button" className="w-[100px] px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">Modify</button>
          <button type="button" className="w-[100px] px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">Delete</button>
        </div>
      </form>
    </div>
  )
}


