import { Budgets } from "./_components/budgets";
import { OverviewCard } from "./_components/overview-card";
import { Pots } from "./_components/pots";
import { RecurringBills } from "./_components/recurring-bills";
import { Transactions } from "./_components/transactions";

const overviews = [
  {
    name: "Current Balance",
    value: 4836.0,
    active: true,
  },
  {
    name: "Income",
    value: 3814.25,
    active: false,
  },
  {
    name: "Expense",
    value: 1700.5,
    active: false,
  },
];

const OverviewPage = () => {
  return (
    <div>
      <h1 className="text-1">Overview</h1>
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        {overviews.map((overview) => (
          <OverviewCard
            key={overview.name}
            title={overview.name}
            balance={overview.value}
            active={overview.active}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="col-span-3">
          <Pots />
          <Transactions />
        </div>
        <div className="col-span-2">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
