import React from "react";

interface SelectOption {
  readonly?: boolean,
  ref?: React.LegacyRef<HTMLSelectElement>
  required?: boolean,
}

interface SelectProps<T> {
  title: string;
  id: string;
  defaultValue?: string;
  tabIndex?: number;
  children: React.ReactNode;
  setter?: React.Dispatch<React.SetStateAction<T>>;
  description?: string;
  option?: SelectOption;
}

export function Select<T>({ title, tabIndex, description, children, setter, defaultValue, option, id }: SelectProps<T>) {

  return <div className="flex flex-col space-y-2">
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="user-role"
    >
      {title}
    </label>
    <select
      id={id}
      aria-hidden="false"
      defaultValue={defaultValue}
      tabIndex={tabIndex}
      ref={option?.ref}
      required={option?.required}
      disabled={option?.readonly}
      className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
      onChange={setter ? (e) => setter(e.currentTarget.value as T) : () => { }}
    >
      {children}
    </select>
    {description && <span className="text-xs text-gray-400">{description}</span>}
  </div>;
}
