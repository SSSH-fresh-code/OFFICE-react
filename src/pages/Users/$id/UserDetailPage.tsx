import { useParams } from "@tanstack/react-router"
import { Loading } from "../../../shared/component/Loading";
import UserDetailForm from "../../../widgets/Users/$id/UserDetailForm";
import useGetUserQuery from "../../../data/Users/user.get";

export default function UserDetailPage() {
  const { id } = useParams({ strict: false });

  const { isPending, isSuccess, data } = useGetUserQuery(id);

  return (
    <>
      {isPending && <Loading />}
      {isSuccess && <UserDetailForm user={data!} />}
    </>
  )
}