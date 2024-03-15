export default function api(
  path: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  headers: HeadersInit,
) {
  return fetch(`${import.meta.env.VITE_API_URL}${path}`, {
    method: method,
    headers: headers
  })
}

