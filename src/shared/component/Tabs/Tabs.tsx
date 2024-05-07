interface TabsProps {
  children?: React.ReactNode;
}
export default function Tabs({ children }: TabsProps) {
  return <div
    className="items-center justify-center flex w-full rounded-md bg-gray-100 outline-none"
    tabIndex={-1}
  >
    {children}
  </div>;
}
