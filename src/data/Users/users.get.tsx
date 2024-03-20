import { Page, TUsers } from "types-sssh";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import useApiRetry from "../api/useApiRetry.hook";

export default function useGetUsersQuery(page: string, where__isCertified?: string): UseQueryResult<Page<TUsers>> {
  const getUsers = useApiRetry(`/users?page=${page}${where__isCertified ? "&where__isCertified=" + where__isCertified : ""}`, "GET");

  return useQuery<Page<TUsers>>({ queryKey: ['getUsers', page, where__isCertified], queryFn: getUsers, staleTime: 3000 });
}