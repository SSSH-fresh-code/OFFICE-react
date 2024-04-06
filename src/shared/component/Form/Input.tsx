export interface UserInputOption {
  min?: number,
  max?: number,
  readonly?: boolean,
  ref?: React.LegacyRef<HTMLInputElement>
  required?: boolean,
  placeHolder?: string
}

interface UserInputProps<T> {
  id: string;
  title: string;
  setter?: React.Dispatch<React.SetStateAction<T>>;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string | number;
  option?: UserInputOption
}
export function Input<T>(props: UserInputProps<T>) {
  const { id, title, setter, type = "text", defaultValue = "", option } = props;


  return <div className=" col-span-12 md:col-span-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{title}</label>
    <input
      ref={option && option.ref}
      type={type}
      id={id}
      name={id}
      required={option?.required}
      defaultValue={defaultValue}
      readOnly={option?.readonly}
      disabled={option?.readonly}
      min={option?.min}
      max={option?.max}
      minLength={option?.min}
      maxLength={option?.max}
      onChange={setter ? (e) => setter(e.currentTarget.value as T) : () => { }}
      placeholder={option?.placeHolder}
      className={`
        ${option?.readonly && "bg-gray-200"}
        p-2 mt-1 block w-full border  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      `}
    />
  </div>;
}
