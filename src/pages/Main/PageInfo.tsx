import { useMatches } from "@tanstack/react-router";

export function PageInfo() {
  const matches = useMatches();
  const context = matches[matches.length - 1].context;

  return <div className="p-6 my-2 w-full">
    <div className="text-left flex flex-col">
      <h1 className="font-semibold text-[5vw] lg:text-[2vw]">
        {context.title}
      </h1>
    </div>
  </div>;
}
