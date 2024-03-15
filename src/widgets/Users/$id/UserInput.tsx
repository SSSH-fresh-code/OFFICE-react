interface UserInputProps {
  id: string;
  title: string;
  type?: React.HTMLInputTypeAttribute;
  readonly?: boolean;
  defaultValue?: string | number;
}
export function UserInput(props: UserInputProps) {
  const { id, title, type = "text", readonly = false, defaultValue = "" } = props;



  return <div className=" col-span-12 md:col-span-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{title}</label>
    <input
      type={type}
      id={id}
      name={id}
      defaultValue={defaultValue}
      readOnly={readonly}
      disabled={readonly}
      className={`
        ${readonly && "bg-gray-200"}
        p-2 mt-1 block w-full  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      `}
    />
  </div>;
}
