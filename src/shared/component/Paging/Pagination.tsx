import { PageMoveBtn } from "./PageMoveBtn";
import { PageMoveForm } from "./PageMoveForm";

export interface PageInfoProps {
  current: number;
  lastPage: number;
  pageName?: string;
}

export default function Pagination({ current, lastPage, pageName }: PageInfoProps) {
  return (
    <div className="flex flex-col gap-3">
      <PageMoveBtn current={current} lastPage={lastPage} pageName={pageName} />
      <PageMoveForm current={current} lastPage={lastPage} pageName={pageName} />
    </div>
  )
}

