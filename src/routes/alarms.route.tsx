import { createFileRoute } from '@tanstack/react-router'
import AlarmsPage from '../pages/Alarms/AlarmsPage';

export const Route = createFileRoute('/alarms')({
  beforeLoad: () => ({
    title: "알람 목록",
    isCenter: false
  }),
  component: () => {
    return <AlarmsPage />;
  }
})