
export default function api(
  path: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  headers: HeadersInit,
  body?: BodyInit,
  isCredential?: boolean
) {
  const init: RequestInit = {
    method: method,
    headers: headers
  }

  if (body) init["body"] = body;
  if (isCredential) init["credentials"] = "include";

  return fetch(`${import.meta.env.VITE_API_URL}${path}`, init);
}

