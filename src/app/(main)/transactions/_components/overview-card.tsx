import { Card } from "@/components/ui/card";

import { cn, formatCurrency } from "@/lib/utils";

type OverviewCardProps = {
  title: string;
  balance: number;
  active?: boolean;
};

export const OverviewCard = ({ title, balance, active }: OverviewCardProps) => {
  return (
    <Card className={cn(active && "bg-grey-900 text-white")}>
      <p className={cn("text-4 mb-4 text-grey-500", active && "text-white")}>
        {title}
      </p>
      <span className="text-1">{formatCurrency(balance)}</span>
    </Card>
  );
};
