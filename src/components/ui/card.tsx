import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn("w-full rounded-xl bg-white p-4 text-grey-900", className)}
    >
      {children}
    </div>
  );
};
