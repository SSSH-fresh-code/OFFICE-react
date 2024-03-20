
export default function api(
  path: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  headers: HeadersInit,
  body?: BodyInit
) {
  const init: RequestInit = {
    method: method,
    credentials: "include",
    headers: headers
  }

  if (body) init["body"] = body;

  return fetch(`${import.meta.env.VITE_API_URL}${path}`, init);
}

