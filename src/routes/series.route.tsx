import { createFileRoute } from '@tanstack/react-router'
import SeriesPage from '../pages/Blog/Series/SeriesPage';

export const Route = createFileRoute('/series')({
  beforeLoad: () => ({
    title: "시리즈 목록"
  }),
  component: () => {
    return <SeriesPage />;
  }
})