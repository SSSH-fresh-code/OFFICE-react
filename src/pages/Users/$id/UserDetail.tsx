import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "@tanstack/react-router"
import useApi from "../../../data/api/useApi.hook";
import { Loading } from "../../../shared/component/Loading";
import UserDetailForm from "../../../widgets/Users/$id/UserDetailForm";
import useGetUserQuery from "../../../data/Users/user.get";

export default function UserDetail() {
  const { id } = useParams({ strict: false });

  const { isPending, isSuccess, data } = useGetUserQuery(id);

  return (
    <>
      {isPending && <Loading />}
      {isSuccess && <UserDetailForm user={data!} />}
    </>
  )
}