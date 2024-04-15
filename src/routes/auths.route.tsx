import { createFileRoute } from '@tanstack/react-router'
import AuthsPage from '../pages/Auths/AuthsPage';

export const Route = createFileRoute('/auths')({
  beforeLoad: () => ({
    title: "권한 목록",
    isCenter: false
  }),
  component: () => {
    return <AuthsPage />;
  }
})