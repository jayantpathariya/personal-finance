"use client";

import { EyeCloseIcon } from "@/components/icons/eye-close-icon";
import { EyeOpenIcon } from "@/components/icons/eye-open-icon";
import { SearchIcon } from "@/components/icons/search-icon";

import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  search?: boolean;
  prefixI?: boolean;
  label?: string;
  secure?: boolean;
  onSecureClick?: () => void;
};

export const Input = ({
  error,
  search,
  prefixI,
  label,
  secure,
  onSecureClick,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={props.id} className="text-5-bold mb-1 text-gray-500">
          {label}
        </label>
      )}
      <div className="relative">
        {prefixI && (
          <span className="absolute left-3 top-2.5 text-beige-500">$</span>
        )}

        <input
          className={cn(
            "w-full rounded-lg border border-beige-500 px-5 py-2.5 text-sm text-beige-500 outline-none",
            search && "pr-8",
            error && "border-red",
            prefixI && "pl-8",
            secure && "pr-9",
          )}
          {...props}
        />
        {search && (
          <SearchIcon className="absolute right-3 top-3.5 text-gray-900" />
        )}
        {secure && (
          <button type="button" onClick={() => onSecureClick?.()}>
            {props.type === "password" ? (
              <EyeCloseIcon className="absolute right-3 top-4 text-gray-900" />
            ) : (
              <EyeOpenIcon className="absolute right-3 top-4 text-gray-900" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mr-3 text-right">
          <small className="text-red">{error}</small>
        </p>
      )}
    </div>
  );
};
