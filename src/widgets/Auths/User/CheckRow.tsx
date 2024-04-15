interface CheckRowProps {
  value: string;
  label?: string;
  checked?: boolean;
}
export default function CheckRow({ value, label, checked }: CheckRowProps) {
  return (<div className="cursor-pointer flex items-center gap-3 w-full bg-gray-100 rounded-md">
    <input
      defaultChecked={checked}
      className="inline-block ml-3 peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      type="checkbox"
      id={value}
      value={value} />
    <label htmlFor={value} className=" cursor-pointer w-full p-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">
      {label ? label : value}
    </label>
  </div>)
}
