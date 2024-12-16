import { TransactionsTable } from "@/components/transactions-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const transactions = [
  {
    avatar: "/avatars/emma-richardson.jpg",
    name: "Emma Richardson",
    category: "General",
    date: "2024-08-19T14:23:11Z",
    amount: 75.5,
    recurring: false,
  },
  {
    avatar: "/avatars/savory-bites-bistro.jpg",
    name: "Savory Bites Bistro",
    category: "Dining Out",
    date: "2024-08-19T20:23:11Z",
    amount: -55.5,
    recurring: false,
  },
  {
    avatar: "/avatars/daniel-carter.jpg",
    name: "Daniel Carter",
    category: "General",
    date: "2024-08-18T09:45:32Z",
    amount: -42.3,
    recurring: false,
  },
  {
    avatar: "/avatars/sun-park.jpg",
    name: "Sun Park",
    category: "General",
    date: "2024-08-17T16:12:05Z",
    amount: 120.0,
    recurring: false,
  },
  {
    avatar: "/avatars/urban-services-hub.jpg",
    name: "Urban Services Hub",
    category: "General",
    date: "2024-08-17T21:08:09Z",
    amount: -65.0,
    recurring: false,
  },
];

export const Transactions = () => {
  return (
    <Card className="mt-4">
      <div className="mb-2 flex items-center justify-between pb-4">
        <h2 className="text-2">Transactions</h2>
        <Button variant="tertiary">See Details</Button>
      </div>
      <TransactionsTable transactions={transactions} />
    </Card>
  );
};
