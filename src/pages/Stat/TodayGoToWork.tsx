import React from "react";
import { TodayWorkSubscription } from "./TodayWorkSubscription";

interface TodayGoToWorkProps {
  subtitle: string,
  children: React.ReactNode
}
export default function TodayGoToWork({ subtitle, children }: TodayGoToWorkProps) {
  return (
    <>
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <h3 className="text-2xl font-light whitespace-nowrap leading-none tracking-wide">
          출근하기
        </h3>
        <TodayWorkSubscription>
          {subtitle}
        </TodayWorkSubscription>
      </div>
      <div className="p-6">
        <div
          dir="ltr"
          className="relative overflow-hidden space-y-2"
        >
          <div
            data-radix-scroll-area-viewport=""
            className="h-full w-full rounded-[inherit]"
            style={{ overflow: "hidden" }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
