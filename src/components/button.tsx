import { cva } from "class-variance-authority";

import { CaretRight } from "@/components/icons/caret-right";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "tertiary" | "destructive";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-5 py-2.5 font-bold text-sm",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-500",
        secondary:
          "bg-beige-100 text-secondary-foreground border border-transparent hover:border-beige-500 text-gray-900",
        tertiary:
          "bg-transparent font-normal text-gray-500 hover:text-gray-900",
        destructive: "bg-red text-white hover:bg-red/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const Button = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}{" "}
      {variant === "tertiary" && (
        <CaretRight className="ml-2 size-2.5 hover:text-gray-900" />
      )}
    </button>
  );
};
