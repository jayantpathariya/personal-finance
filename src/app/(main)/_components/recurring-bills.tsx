import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const RecurringBills = () => {
  return (
    <Card className="mt-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2">Pots</h2>
        <Button variant="tertiary">See Details</Button>
      </div>
    </Card>
  );
};
