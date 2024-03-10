import React from "react";

export interface TableHeadElementsProps {
  children: React.ReactNode;
  overrideClass?: string;
}

export default function TableRowElement({ children, overrideClass }: TableHeadElementsProps) {
  return (
    <tr className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${overrideClass}`}>
      {children}
    </tr>
  )
}