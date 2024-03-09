interface NotifyCountProps {
  count: number
}

export default function NotifyCount({ count }: NotifyCountProps) {
  return (
    <div className="whitespace-nowrap border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
      {count}
    </div>
  )
}