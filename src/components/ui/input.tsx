import { Search } from "@/components/icons/search";

import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  search?: boolean;
  prefixI?: boolean;
  label?: string;
};

export const Input = ({
  error,
  search,
  prefixI,
  label,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={props.id}
          className="mb-1 text-xs font-bold text-gray-500"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {prefixI && (
          <span className="absolute left-3 top-2.5 text-beige-500">$</span>
        )}

        <input
          className={cn(
            "rounded-lg border border-beige-500 px-5 py-2.5 text-sm text-beige-500 outline-none",
            search && "pr-8",
            error && "border-red",
            prefixI && "pl-8",
          )}
          {...props}
        />
        {search && (
          <Search className="absolute right-3 top-3.5 text-gray-900" />
        )}
      </div>
      {error && (
        <p className="text-right">
          <small className="text-red">{error}</small>
        </p>
      )}
    </div>
  );
};
