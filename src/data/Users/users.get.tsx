import { Page, TUsers } from "types-sssh";
import useApi from "../api/useApi.hook";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export default function useGetUsersQuery(page: string): UseQueryResult<Page<TUsers>> {
  const getUsers = useApi(`/users?page=${page}`, "GET");

  return useQuery<Page<TUsers>>({ queryKey: ['todos', page], queryFn: getUsers, staleTime: 3000 });
}