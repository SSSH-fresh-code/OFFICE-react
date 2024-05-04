import { createFileRoute } from '@tanstack/react-router'
import TopicsPage from '../pages/Blog/Topics/TopicsPage';

export const Route = createFileRoute('/topics')({
  beforeLoad: () => ({
    title: "주제 목록"
  }),
  component: () => {
    return <TopicsPage />;
  }
})