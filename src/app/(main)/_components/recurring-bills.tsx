import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { RecurringBillsCard } from "./recurring-bills-card";

const recurringBills = [
  {
    name: "Paid Bills",
    value: 190.0,
    color: "#277c78",
  },
  {
    name: "Total Upcoming",
    value: 194.98,
    color: "#f2cdac",
  },
  {
    name: "Due Soon",
    value: 59.98,
    color: "#82c9d7",
  },
];

export const RecurringBills = () => {
  return (
    <Card className="mt-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2">Pots</h2>
        <Button variant="tertiary">See Details</Button>
      </div>
      <div className="space-y-3">
        {recurringBills.map((bill) => (
          <RecurringBillsCard
            key={bill.name}
            title={bill.name}
            value={bill.value}
            color={bill.color}
          />
        ))}
      </div>
    </Card>
  );
};
