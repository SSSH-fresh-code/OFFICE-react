import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auths/menus")({
  beforeLoad: () => ({
    title: "메뉴 권한 관리 페이지",
  }),
});
