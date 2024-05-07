interface TabBtnProps {
  onClick?: () => void;
  isActive?: boolean;
  children: React.ReactNode;
}
export default function TabBtn({ onClick, children, isActive }: TabBtnProps) {

  return <button
    type="button"
    role="tab"
    className={"p-3 inline-flex items-center justify-center flex-1 rounded-md " + (isActive ? "bg-gray-300" : "hover:bg-gray-200")}
    tabIndex={-1}
    onClick={onClick}
  >
    {children}
  </button>;
}
