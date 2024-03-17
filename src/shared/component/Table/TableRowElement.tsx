import React from "react";
import { From } from "./Table";
import { useNavigate } from "@tanstack/react-router";

export interface TableHeadElementsProps<T> {
  children: React.ReactNode;
  overrideClass?: string;
  row?: T,
  from?: From<T>
}

export default function TableRowElement<T>({ row, from, children, overrideClass }: TableHeadElementsProps<T>) {
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
    >
      {children}
    </tr >
  )
}