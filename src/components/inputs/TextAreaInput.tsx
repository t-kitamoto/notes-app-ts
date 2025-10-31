import type { ChangeEventHandler } from 'react';

type TextAreaInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
};

export default function TextAreaInput({
  label,
  name,
  value,
  onChange,
  required = false,
}: TextAreaInputProps) {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        className="w-full p-2 border-2 border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 focus:outline-none rounded-lg shadow-sm"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
}
