interface TableDataElementProps {
  children?: React.ReactNode;
  text?: string;
  overrideClass?: string;
}

export default function TableDataElement({ children, text, overrideClass }: TableDataElementProps) {
  return <td className={"p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 " + overrideClass}>
    {children || text}
  </td>;
}