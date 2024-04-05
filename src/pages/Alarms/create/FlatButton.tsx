
interface FlatButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function FlatButton({ type, text, onClick, className = "bg-black" }: FlatButtonProps) {
  return <button
    className={"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full h-10  text-white " + className}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>;
}
