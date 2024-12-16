"use client";

import { useRouter } from "next/navigation";

import { PotIcon } from "@/components/icons/pot-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { formatCurrency } from "@/lib/utils";

import { CategoryCard } from "./category-card";

export const Pots = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/pots");
  };

  return (
    <Card className="mt-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2">Pots</h2>
        <Button variant="tertiary" onClick={handleNavigate}>
          See Details
        </Button>
      </div>
      <div className="flex flex-col gap-x-5 md:flex-row">
        <div className="flex w-full items-center gap-x-4 rounded-xl bg-beige-100 p-4">
          <PotIcon className="size-8 text-green" />
          <div className="flex flex-col gap-y-4">
            <p className="text-4 text-grey-500">Total Saved</p>
            <span className="text-1">{formatCurrency(850)}</span>
          </div>
        </div>
        <div className="mt-5 grid w-full grid-cols-2 gap-4 md:mt-0">
          <CategoryCard title="Savings" balance={159} color="bg-green" />
          <CategoryCard title="Gift" balance={40} color="bg-cyan" />
          <CategoryCard title="Concert Ticket" balance={110} color="bg-navy" />
          <CategoryCard title="New Laptop" balance={10} color="bg-yellow" />
        </div>
      </div>
    </Card>
  );
};
