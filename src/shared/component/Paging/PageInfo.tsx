import { PageInfoProps } from "./Pagination";


export function PageInfo({ current, lastPage }: PageInfoProps) {
  return <div className="flex items-center space-x-2">
    <p className="text-sm font-medium peer-disabled:opacity-50">{current}</p>
    <p className="text-sm font-medium peer-disabled:opacity-50">/</p>
    <p className="text-sm font-medium peer-disabled:opacity-50">{lastPage}</p>
  </div>;
}
