export interface TextAreaOption {
  readonly?: boolean,
  ref?: React.LegacyRef<HTMLTextAreaElement>
  required?: boolean,
  placeHolder?: string
}

interface TextAreaProps<T> {
  id: string;
  title: string;
  setter?: React.Dispatch<React.SetStateAction<T>>;
  defaultValue?: string | number;
  rows: number;
  option?: TextAreaOption
}
export default function TextArea<T>(props: TextAreaProps<T>) {
  const { id, title, setter, rows, defaultValue = "", option } = props;


  return <div className=" col-span-12 md:col-span-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{title}</label>
    <textarea
      ref={option && option.ref}
      rows={rows}
      id={id}
      name={id}
      required={option?.required}
      defaultValue={defaultValue}
      readOnly={option?.readonly}
      disabled={option?.readonly}
      onChange={setter ? (e) => setter(e.currentTarget.value as T) : () => { }}
      placeholder={option?.placeHolder}
      className={`
        ${option?.readonly && "bg-gray-200"}
        p-2 mt-1 block w-full border  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      `}
    />
  </div>;
}
