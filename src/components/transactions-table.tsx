import { format } from "date-fns";
import Image from "next/image";

import { cn, formatCurrency } from "@/lib/utils";

type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

type TableProps = {
  transactions: Transaction[];
};

export const TransactionsTable = ({ transactions }: TableProps) => {
  return (
    <table className="w-full">
      <tbody className="w-full">
        {transactions.map((transaction) => (
          <tr
            key={transaction.name}
            className="flex items-center justify-between border-b py-3 last:border-none"
          >
            <td className="flex items-center gap-x-4">
              <Image
                src={transaction.avatar}
                alt={`${transaction.name} transaction`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-4-bold">{transaction.name}</span>
            </td>
            <td className="flex flex-col items-end gap-y-2">
              <span
                className={cn(
                  "text-4-bold",
                  transaction.amount > 0 && "text-green",
                )}
              >
                {transaction.amount > 0 && "+"}
                {formatCurrency(transaction.amount)}
              </span>
              <span className="text-5 text-grey-500">
                {format(new Date(transaction.date), "dd MMM yyyy")}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
