export default function InfoIcon({ w = "50px", h = "50px" }: { w: string, h: string }) {
  return (<svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.4 6H11V8.4H13.4V6ZM13.4 10.8H11V18H13.4V10.8Z" fill="#0080ff" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2V22H22V2ZM20 4H4V20H20V4Z" fill="#0080ff" />
  </svg>)
}