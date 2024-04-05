import { createFileRoute } from '@tanstack/react-router'
import AlarmsCreatePage from '../pages/Alarms/create/AlarmsCreatePage';

export const Route = createFileRoute('/alarms')({
  beforeLoad: () => ({
    title: "알람 관리"
  }),
  component: () => {
    return <AlarmsCreatePage />;
  }
})