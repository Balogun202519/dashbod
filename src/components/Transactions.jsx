import { ArrowUpRight, MoreHorizontal } from "lucide-react";

import { transactions } from "../data/dashboardData";

function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-emerald-500/10 text-emerald-400",
    Pending: "bg-amber-500/10 text-amber-400",
    Failed: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] || "bg-zinc-800 text-zinc-400"
      }`}
    >
      {status}
    </span>
  );
}

function Transactions() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800 p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Your latest payment activity.
          </p>
        </div>

        <button
          type="button"
          className="hidden items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white sm:flex"
        >
          View all
          <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800 text-left">
              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Transaction
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Customer
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Date
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Amount
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Status
              </th>

              <th className="px-6 py-4">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-zinc-800/70 last:border-0 transition hover:bg-zinc-900/40"
              >
                <td className="px-6 py-4 text-sm font-medium text-white">
                  {transaction.id}
                </td>

                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-white">
                    {transaction.customer}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {transaction.email}
                  </p>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-400">
                  {transaction.date}
                </td>

                <td className="px-6 py-4 text-sm font-semibold text-white">
                  {transaction.amount}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={transaction.status} />
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
                    aria-label={`More actions for ${transaction.id}`}
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-zinc-800 md:hidden">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-white">
                  {transaction.customer}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {transaction.id}
                </p>
              </div>

              <StatusBadge status={transaction.status} />
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-xs text-zinc-500">
                  {transaction.date}
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  {transaction.email}
                </p>
              </div>

              <p className="text-sm font-semibold text-white">
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-800 p-4 sm:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-xl bg-zinc-900 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
        >
          View all transactions
          <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default Transactions;