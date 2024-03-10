import { FunctionComponent, SVGProps } from "react"

interface SvgIconBtn {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  alt: string
}

export default function SvgIconBtn({ icon, alt }: SvgIconBtn) {
  const Icon = icon;

  return (
    <button className="hover:bg-gray-100 cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
      <Icon />
      <span className="sr-only">{alt}</span>
    </button>
  )
}