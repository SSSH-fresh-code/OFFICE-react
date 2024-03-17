import { createRootRoute, useMatches, useRouter } from "@tanstack/react-router";
import App from "../App";

export const Route = createRootRoute({
  component: RootComponent
});

function RootComponent() {

  return (
    <App />
  )
}