interface TableDataElementProps {
  children?: React.ReactNode;
  overrideClass?: string;
}

export default function TableDataElement({ children, overrideClass }: TableDataElementProps) {
  return <td className={"p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 " + overrideClass}>
    {children}
  </td>;
}