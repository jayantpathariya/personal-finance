"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { formatCurrency } from "@/lib/utils";

import { CategoryCard } from "./category-card";

const data = [
  {
    category: "Entertainment",
    value: 50.0,
    color: "#277C78",
  },
  {
    category: "Bills",
    value: 750.0,
    color: "#82C9D7",
  },
  {
    category: "Dining Out",
    value: 75.0,
    color: "#F2CDAC",
  },
  {
    category: "Personal Care",
    value: 100.0,
    color: "#626070",
  },
];

const totalSpent = 338;
const totalLimit = 975;

export const Budgets = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/budgets");
  };

  return (
    <Card className="mt-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2">Budgets</h2>
        <Button variant="tertiary" onClick={handleNavigate}>
          See Details
        </Button>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div className="relative w-full">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={95}
                outerRadius={120}
                dataKey="value"
                stroke="none"
                startAngle={70}
                endAngle={-430}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={95}
                dataKey="value"
                stroke="none"
                startAngle={70}
                endAngle={-430}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`${entry.color}BF`} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {formatCurrency(totalSpent, false)}
            <div className="text-5 text-grey-500">
              of {formatCurrency(totalLimit, false)} limit
            </div>
          </div>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-4 pr-8 md:grid-cols-1">
          {data.map((category) => (
            <CategoryCard
              key={category.color}
              title={category.category}
              balance={category.value}
              barStyle={{
                backgroundColor: category.color,
              }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
