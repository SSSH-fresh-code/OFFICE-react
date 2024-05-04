import { useRouterState } from "@tanstack/react-router";
import TopicsList from "../../../widgets/Blog/Topics/TopicsList";
import TopicsCreate from "../../../widgets/Blog/Topics/TopicsCreate";

function TopicsPage() {
  const pathname = useRouterState().location.pathname;

  if (pathname === "/topics/create") return <TopicsCreate />
  else return <TopicsList />
}

export default TopicsPage;