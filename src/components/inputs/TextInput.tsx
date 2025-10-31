import type { ChangeEventHandler } from 'react';

type TextInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

export default function TextInput({
  label,
  name,
  value,
  onChange,
  required = false,
}: TextInputProps) {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input
        name={name}
        type="text"
        className="w-full p-2 border-2 border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 focus:outline-none rounded-lg shadow-sm"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
