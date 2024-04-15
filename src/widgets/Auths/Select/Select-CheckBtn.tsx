interface SelectCheckBtnProps {
  value: string;
  label?: string;
}

export default function SelectCheckBtn({ value, label }: SelectCheckBtnProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        role="checkbox"
        aria-checked="false"
        data-state="unchecked"
        value={value}
        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        id={value}
      ></button>
      <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor={value}>
        {label ? label : value}
      </label>
    </div>
  )
}