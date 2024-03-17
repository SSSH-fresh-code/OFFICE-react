import { useMatches } from "@tanstack/react-router";

export function PageInfo() {
  const matches = useMatches();

  return <div className="py-2 grid grid-cols-12">
    <div className="col-span-1 lg:col-span-2">
    </div>
    <div className="text-center col-span-10 lg:col-span-8">
      <h1 className="font-semibold text-lg md:text-2xl">
        {matches[matches.length - 1].context.pageName}
      </h1>
    </div>
    <div className="col-span-1 lg:col-span-2"></div>
  </div>;
}
