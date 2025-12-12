import { ChangeEvent } from "react";

interface InputComponentProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
}

export const InputComponent = ({
  value,
  onChange,
  label,
}: InputComponentProps) => {
  return (
    <div className="w-full max-w-md pl-5 pr-5">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gray-400"
      />
    </div>
  );
};
