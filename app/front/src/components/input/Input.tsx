import React, { FC } from "react";

type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  classNameContainer?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
};
export const Input: FC<InputProps> = ({
  label,
  id,
  placeholder,
  classNameContainer,
  name,
  type = "text",
}) => {
  return (
    <div className={`mb-5 ${classNameContainer}`} data-testid="input-container">
      <label
        htmlFor="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        {label}
      </label>
      <input
        type={type}
        name={name ? name : id}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  );
};
