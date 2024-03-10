import SvgIconBtn from "../Button/SvgIconBtn";
import { PageInfoProps } from "./Pagination";
import { PageInfo } from "./PageInfo";
import { PrevIcon } from "../../icons/prev.icon";
import { NextIcon } from "../../icons/next.icon";

export function PageMoveBtn({ current, lastPage }: PageInfoProps) {
  return <div className="flex items-center space-x-4 justify-center">
    <PageInfo lastPage={lastPage} current={current} />
    <div className="grid grid-flow-col grid-cols-2 items-center gap-4 !mr-[16px]">
      <SvgIconBtn icon={PrevIcon} alt="Previous Page" />
      <SvgIconBtn icon={NextIcon} alt="Next Page" />
    </div>
  </div>;
}
