export type ParentMenuListItem = Pick<TMenu, "id" | "name" | "icon" | "order">;
export type ChildMenuListItem = Pick<TMenu, "id" | "name" | "link" | "order" | "parentsId">;
