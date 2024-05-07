import { useParams, useRouterState } from "@tanstack/react-router";
import TopicsList from "../../../widgets/Blog/Topics/TopicsList";
import TopicsCreate from "../../../widgets/Blog/Topics/TopicsCreate";
import TopicsDetail from "../../../widgets/Blog/Topics/TopicsDetail";

function TopicsPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  if (params.name) return <TopicsDetail name={params.name} />
  else if (pathname === "/topics/create") return <TopicsCreate />
  else return <TopicsList />
}

export default TopicsPage;