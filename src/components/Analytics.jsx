import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  DollarSign,
  ShoppingCart,
  Users,
} from "lucide-react";

import {
  revenueData,
  stats,
} from "../data/dashboardData";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const metrics = [
  {
    title: "Revenue",
    value: "$24,580",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "8,642",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "12,480",
    change: "+15.4%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Conversion",
    value: "6.84%",
    change: "-2.1%",
    trend: "down",
    icon: BarChart3,
  },
];

function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm font-medium text-zinc-500">
          Performance
        </p>

        <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          Analytics
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Track your business performance and growth.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const positive = metric.trend === "up";

          return (
            <div
              key={metric.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-zinc-500">
                    {metric.title}
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    {metric.value}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-zinc-300">
                  <Icon size={19} />
                </div>
              </div>

              <div
                className={`mt-4 flex items-center gap-1 text-xs font-medium ${
                  positive
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {positive ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}

                {metric.change}

                <span className="ml-1 text-zinc-600">
                  vs last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main chart */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Revenue Performance
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Monthly revenue throughout the year.
            </p>
          </div>

          <select
            defaultValue="year"
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 outline-none focus:border-zinc-600"
          >
            <option value="year">This year</option>
            <option value="6months">Last 6 months</option>
            <option value="3months">Last 3 months</option>
          </select>
        </div>

        <div className="h-80 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient
                  id="analyticsRevenue"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopOpacity={0.25}
                  />

                  <stop
                    offset="100%"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#27272a"
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#71717a",
                  fontSize: 12,
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#71717a",
                  fontSize: 12,
                }}
                tickFormatter={(value) =>
                  `$${value / 1000}k`
                }
              />

              <Tooltip
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid #27272a",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "Revenue",
                ]}
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#ffffff"
                strokeWidth={2}
                fill="url(#analyticsRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Customer growth */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">
            Customer Growth
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            New customers acquired this month.
          </p>

          <div className="mt-8 flex items-end justify-between">
            <div>
              <p className="text-4xl font-bold text-white">
                1,284
              </p>

              <p className="mt-2 text-sm text-emerald-400">
                +15.4% from last month
              </p>
            </div>

            <div className="flex h-24 items-end gap-2">
              {[35, 50, 42, 65, 55, 72, 82, 70, 90].map(
                (height, index) => (
                  <div
                    key={index}
                    className="w-3 rounded-t-md bg-zinc-700"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Conversion */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">
            Conversion Rate
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Visitors converted into customers.
          </p>

          <div className="mt-8">
            <div className="flex items-end justify-between">
              <p className="text-4xl font-bold text-white">
                6.84%
              </p>

              <p className="text-sm text-red-400">
                -2.1%
              </p>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: "68.4%" }}
              />
            </div>

            <div className="mt-3 flex justify-between text-xs text-zinc-600">
              <span>0%</span>
              <span>Target: 10%</span>
              <span>10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;