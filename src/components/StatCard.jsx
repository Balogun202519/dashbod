import { TrendingDown, TrendingUp } from "lucide-react";

function StatCard({
  title,
  value,
  change,
  icon: Icon,
  trend = "up",
}) {
  const isPositive = trend === "up";

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {value}
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-zinc-300">
          <Icon size={21} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={15} />
          ) : (
            <TrendingDown size={15} />
          )}

          {change}
        </span>

        <span className="text-sm text-zinc-600">
          vs last month
        </span>
      </div>
    </div>
  );
}

export default StatCard;