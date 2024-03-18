export interface TableHeadElementsProps {
  text: string;
  overrideClass?: string;
}

export default function TableHeadElements({ text, overrideClass }: TableHeadElementsProps) {
  return (
    <th
      className={"h-12 px-4 text-left align-middle font-bold text-[15px] text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 " + overrideClass}
    >
      {text}
    </th>
  )
}