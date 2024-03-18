import React from "react";
import { From } from "./Table";
import { useNavigate } from "@tanstack/react-router";

export interface TableHeadElementsProps<T> {
  children: React.ReactNode;
  overrideClass?: string;
  idx: number,
  row?: T,
  from?: From<T>
}

export default function TableRowElement<T>({ idx, row, from, children, overrideClass }: TableHeadElementsProps<T>) {
  let to = "";

  if (from && row) {
    to = `${from.href}`;
    if (from.key) to += `/${row[from.key]}`
  }

  const navigate = useNavigate({});


  return (
    <tr
      onClick={to ? () => navigate({ to }) : () => { }}
      className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${overrideClass}`}
      tabIndex={idx}
    >
      {children}
    </tr >
  )
}