import {
  ArrowDownRight,
  ArrowUpRight,
  ShoppingBag,
  Users,
  CreditCard,
} from "lucide-react";

import { salesData } from "../data/dashboardData";

const icons = {
  "Online Sales": ShoppingBag,
  Subscriptions: CreditCard,
  "New Customers": Users,
};

function SalesOverview() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Sales Overview
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Monitor your sales and customer performance.
        </p>
      </div>

      <div className="space-y-4">
        {salesData.map((item) => {
          const Icon = icons[item.title];
          const isPositive = item.trend === "up";

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                  <Icon size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    This month
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-white">
                  {item.value}
                </p>

                <div
                  className={`mt-1 flex items-center justify-end gap-1 text-xs font-medium ${
                    isPositive
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {isPositive ? (
                    <ArrowUpRight size={13} />
                  ) : (
                    <ArrowDownRight size={13} />
                  )}

                  {item.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SalesOverview;