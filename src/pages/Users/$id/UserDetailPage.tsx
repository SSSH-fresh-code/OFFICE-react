import { useParams } from "@tanstack/react-router"
import UserDetailForm from "../../../widgets/Users/$id/UserDetailForm";
import useGetUserQuery from "../../../data/Users/user.get";

export default function UserDetailPage() {
  const { id } = useParams({ strict: false });

  const { isSuccess, data } = useGetUserQuery(id);

  return (
    <>
      {isSuccess && <UserDetailForm user={data!} />}
    </>
  )
}