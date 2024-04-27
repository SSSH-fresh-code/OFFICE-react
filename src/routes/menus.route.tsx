import { createFileRoute } from '@tanstack/react-router'
import MenusPage from "../pages/Menus/MenusPage";

export const Route = createFileRoute('/menus')({
  beforeLoad: () => ({
    title: "메뉴 목록"
  }),
  component: () => {
    return <MenusPage />;
  }
})