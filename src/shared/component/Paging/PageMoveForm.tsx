import { PageInfoProps } from "./Pagination";

export function PageMoveForm({ current, lastPage }: PageInfoProps) {
  return <div className="flex items-center space-x-4 justify-center">
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium peer-disabled:opacity-50">페이지</p>
      <form className="flex">
        <input
          min={current}
          className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[75px] text-center"
          max={lastPage}
          placeholder="Page"
          type="number" />
        <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
          이동
        </button>
      </form>
    </div>
  </div>;
}
