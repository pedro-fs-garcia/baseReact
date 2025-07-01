import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;   // permite icone à esquerda
  rightIcon?: React.ReactNode;  // permite icone à direita
  error?: string;
};

export default function BasicInput ({
  label,
  required,
  leftIcon,
  rightIcon,
  error,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, "-") || undefined;

  return (
    <div className="grid gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium leading-none text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          className={`w-full h-12 ${leftIcon ? "pl-10" : "pl-3"} ${
            rightIcon ? "pr-10" : "pr-3"
          } py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : ""
          } ${className || ""}`}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>

      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};
