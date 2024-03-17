import { Page, TUsers } from "types-sssh";
import useApi from "../api/useApi.hook";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export default function useGetUsersQuery(page: string, where__isCertified?: string): UseQueryResult<Page<TUsers>> {
  const getUsers = useApi(`/users?page=${page}${where__isCertified ? "&where__isCertified=" + where__isCertified : ""}`, "GET");

  return useQuery<Page<TUsers>>({ queryKey: ['todos', page], queryFn: getUsers, staleTime: 3000 });
}