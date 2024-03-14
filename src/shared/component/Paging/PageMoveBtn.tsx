import SvgIconBtn from "../Button/SvgIconBtn";
import { PageInfoProps } from "./Pagination";
import { PageInfo } from "./PageInfo";
import { PrevIcon } from "../../icons/prev.icon";
import { NextIcon } from "../../icons/next.icon";
import { useNavigate } from "@tanstack/react-router";

export function PageMoveBtn({ current, lastPage }: PageInfoProps) {

  const navigate = useNavigate({});

  const searchPage = (num: number) => {
    navigate({
      search: {
        page: num
      },
    })
  }

  return <div className="flex items-center justify-center gap-3">
    {current !== 1 && <SvgIconBtn onClick={() => searchPage(current - 1)} icon={PrevIcon} alt="Previous Page" />}
    <PageInfo lastPage={lastPage} current={current} />
    {current !== lastPage && <SvgIconBtn onClick={() => searchPage(current + 1)} icon={NextIcon} alt="Next Page" />}
  </div>;
}
