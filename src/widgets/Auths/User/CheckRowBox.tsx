import { MutableRefObject, RefObject } from "react";
import CheckRow from "./CheckRow";

interface CheckRowBox {
  title: string;
  ref: RefObject<HTMLFormElement>;
  data: { value: string, label?: string }[];
}

export default function CheckRowBox({ title, data, ref }: CheckRowBox) {
  return;
}
