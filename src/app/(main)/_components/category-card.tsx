import { cn, formatCurrency } from "@/lib/utils";

type CategoryCardProps = {
  title: string;
  balance: number;
  color?: string;
};

export const CategoryCard = ({
  title,
  balance,
  color = "bg-green",
}: CategoryCardProps) => {
  return (
    <div className="flex w-full items-center gap-x-4 py-1">
      <div className={cn("rounded-ful h-full w-1", color)} />
      <div>
        <p className="text-5 text-grey-500">{title}</p>
        <span className="text-4-bold">{formatCurrency(balance)}</span>
      </div>
    </div>
  );
};
