export type useGetQuery<T> = {
  isPending: boolean,
  isSuccess: boolean,
  data?: T
} 