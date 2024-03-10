export function UsersHeader() {
  return <div className="flex items-center">
    <h1 className="font-semibold text-lg md:text-2xl">직원 관리</h1>
    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
      직원정보 추가
    </button>
  </div>;
}
