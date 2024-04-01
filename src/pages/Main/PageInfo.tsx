import { useMatches } from "@tanstack/react-router";

export function PageInfo() {
  const matches = useMatches();

  return <div className="p-6 my-2">
    <div className="text-left">
      <h1 className=" font-semibold text-[5vw] lg:text-[2.5vw]">

        {matches[matches.length - 1].context.pageName}
      </h1>
    </div>
  </div>;
}
