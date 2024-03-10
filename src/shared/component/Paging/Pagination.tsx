import { PageMoveBtn } from "./PageMoveBtn";
import { PageMoveForm } from "./PageMoveForm";

export interface PageInfoProps {
  current: number;
  lastPage: number;
}

export default function Pagination({ current, lastPage }: PageInfoProps) {
  return (
    <>
      <PageMoveBtn current={current} lastPage={lastPage} />
      <PageMoveForm current={current} lastPage={lastPage} />
    </>
  )
}

