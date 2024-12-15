"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BudgetIcon } from "@/components/icons/budget-icon";
import { HomeIcon } from "@/components/icons/home-icon";
import { LogoLargeIcon } from "@/components/icons/logo-large-icon";
import { MinimizeIcon } from "@/components/icons/minimize-icon";
import { PotsIcon } from "@/components/icons/pots-icon";
import { RecurringIcon } from "@/components/icons/recurring-icon";
import { TransactionIcon } from "@/components/icons/transactions-icon";

import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Overview",
      href: "/",
      icon: HomeIcon,
      active: pathname === "/",
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: TransactionIcon,
      active: pathname === "/transactions",
    },
    {
      label: "Budgets",
      href: "/budgets",
      icon: BudgetIcon,
      active: pathname === "/budgets",
    },
    {
      label: "Pots",
      href: "/pots",
      icon: PotsIcon,
      active: pathname === "/pots",
    },
    {
      label: "Recurring Bills",
      href: "/recurring-bills",
      icon: RecurringIcon,
      active: pathname === "/recurring-bills",
    },
  ];

  return (
    <aside className="fixed bottom-0 left-0 flex w-full flex-col rounded-t-xl bg-grey-900 px-4 pt-2 lg:bottom-auto lg:top-0 lg:h-full lg:w-[300px] lg:rounded-r-xl lg:rounded-t-none lg:pl-0">
      <div className="hidden px-6 pb-12 pt-8 lg:block">
        <LogoLargeIcon className="text-white" />
      </div>
      <nav className="flex items-center justify-between lg:flex-col lg:gap-y-2">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "flex flex-col items-center gap-x-4 gap-y-2 rounded-t-lg border-b-4 border-transparent px-6 py-3 text-grey-300 lg:w-full lg:flex-row lg:rounded-r-lg lg:rounded-t-none lg:border-b-0 lg:border-l-4",
              link.active && "border-green bg-beige-100 text-grey-900",
            )}
          >
            <link.icon className={cn("size-5", link.active && "text-green")} />
            <span className="text-5-bold hidden md:inline-block lg:text-[16px] lg:font-bold lg:leading-normal">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
      <button className="mt-auto hidden items-center gap-x-4 px-6 pb-10 text-grey-300 lg:flex">
        <MinimizeIcon />
        <span className="text-3">Minimize Menu</span>
      </button>
    </aside>
  );
};
