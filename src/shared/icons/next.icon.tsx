interface NextIconProp {
  w?: string;
  h?: string;
}

export function NextIcon({ w = "24", h = "24" }: NextIconProp) {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={h}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>;
}
