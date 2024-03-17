import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "@tanstack/react-router"
import useApi from "../../../data/api/useApi.hook";
import { Loading } from "../../../shared/component/Loading";
import { TUsers } from "types-sssh";
import UserDetailFrom from "../../../widgets/Users/$id/UserDetailForm";

export default function UserDetail() {
  const { id } = useParams({ strict: false });
  const router = useRouter();

  const { isPending, isSuccess, data } = useQuery<TUsers>({
    queryKey: ['user', id],
    queryFn: useApi(`/users/${id}`, "GET", undefined, false, router.history.back),
    staleTime: 60000
  });

  return (
    <>
      {isPending && <Loading />}
      {isSuccess && <UserDetailFrom user={data} />}
    </>
  )
}