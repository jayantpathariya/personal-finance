import { formatCurrency } from "@/lib/utils";

type RecurringBillsCardProps = {
  title: string;
  value: number;
  color?: string;
};

export const RecurringBillsCard = ({
  title,
  value,
  color = "#277c78",
}: RecurringBillsCardProps) => {
  return (
    <div
      className="flex items-center justify-between rounded-xl border-l-4 bg-beige-100 px-4 py-5"
      style={{
        borderColor: color,
      }}
    >
      <p className="text-4 text-grey-500">{title}</p>
      <span className="text-4-bold">{formatCurrency(value)}</span>
    </div>
  );
};
