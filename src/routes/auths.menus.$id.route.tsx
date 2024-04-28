import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auths/menus/$id")({
  beforeLoad: () => ({
    title: "메뉴 권한 부여",
  }),
});

