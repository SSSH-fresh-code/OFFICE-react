import { TUsers } from "types-sssh";

function Users() {

  const dummy: TUsers = {
    userId: "daeseong0226",
    userName: "임대성",
    userRole: "ADMIN",
    userPw: "",
    id: ""
  }

  return (
    <>
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">직원 관리</h1>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
          직원정보 추가
        </button>
      </div>
      <div className="border shadow-sm rounded-lg">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[80px]">
                  Image
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 max-w-[150px]">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Inventory
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Vendor
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                  />
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Glimmer Lamps</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  In Production
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">500 in stock</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Luminance Creations
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                  />
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Aqua Filters</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Available for Order
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">750 in stock</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  HydraClean Solutions
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                  />
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Eco Planters</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Backordered</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">300 in stock</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  GreenGrowth Designers
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                  />
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Zest Juicers</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Newly Launched
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1000 in stock</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  FreshTech Appliances
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                  />
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Flexi Wearables</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Selling Fast
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">200 in stock</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                  Vitality Gear Co.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Users;