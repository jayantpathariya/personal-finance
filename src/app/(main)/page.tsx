import { OverviewCard } from "./transactions/_components/overview-card";

const OverviewPage = () => {
  return (
    <div>
      <h1 className="text-1">Overview</h1>
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <OverviewCard title="Current Balance" balance={4836.0} active />
        <OverviewCard title="Income" balance={3814.25} />
        <OverviewCard title="Expense" balance={1700.5} />
      </div>
    </div>
  );
};
export default OverviewPage;
