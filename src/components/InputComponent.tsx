import { useId } from "react";
import { InputComponentProps } from "../types/types";

export const InputComponent = ({
  value,
  onChange,
  label,
}: InputComponentProps) => {

  const id = useId();
  return (
    <div className="w-full max-w-md pl-5 pr-5">
      {label && (
        <label className="block text-sm font-medium text-label mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        aria-label="number-input"
        type="number"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-borderLight bg-white text-grayBold placeholder-grayLight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-focusRing focus:border-transparent hover:border-borderGray"
      />
    </div>
  );
};
