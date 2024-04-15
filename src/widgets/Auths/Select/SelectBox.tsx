import SelectCheckBtn from "./Select-CheckBtn";

export default function SelectBox() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto shadow-md border-2 border-gray-300">
      <div className="flex items-center space-x-2">
        <SelectCheckBtn value="S0000001" />
      </div>
    </div>
  )
}