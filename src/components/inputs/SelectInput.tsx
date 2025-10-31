import type { ChangeEventHandler } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
};

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
}: SelectInputProps) {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <select
        name={name}
        className="w-full p-2 border-2 border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 focus:outline-none rounded-lg shadow-sm"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
