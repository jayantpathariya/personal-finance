import { cn, formatCurrency } from "@/lib/utils";

type CategoryCardProps = {
  title: string;
  balance: number;
  color?: string;
  barStyle?: React.CSSProperties;
  className?: string;
};

export const CategoryCard = ({
  title,
  balance,
  color,
  barStyle,
  className,
}: CategoryCardProps) => {
  return (
    <div className={cn("flex w-full items-center gap-x-4 py-1", className)}>
      <div className={cn("rounded-ful h-full w-1", color)} style={barStyle} />
      <div>
        <p className="text-5 text-grey-500">{title}</p>
        <span className="text-4-bold">{formatCurrency(balance)}</span>
      </div>
    </div>
  );
};
