import { useState } from "react";



import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import RevenueChart from "./components/RevenueChart";
import SalesOverview from "./components/SalesOverview";
import Transactions from "./components/Transactions";
import Activity from "./components/Activity";
import QuickActions from "./components/QuickActions";

import { stats } from "./data/dashboardData";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main application */}
      <div className="lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
          {/* Page heading */}
          <section className="mb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-sm font-medium text-zinc-500">
                  Overview
                </p>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Welcome back, Admin
                </h1>

                <p className="mt-2 text-sm text-zinc-500">
                  Here's what's happening with your business today.
                </p>
              </div>

              <button
                type="button"
                className="w-fit rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Download Report
              </button>
            </div>
          </section>

          {/* Statistics */}
          <section
            aria-label="Dashboard statistics"
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                trend={stat.trend}
                icon={stat.icon}
              />
            ))}
          </section>

          {/* Revenue + Sales */}
          <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
            <RevenueChart />

            <SalesOverview />
          </section>

          {/* Transactions */}
          <section className="mt-6">
            <Transactions />
          </section>

          {/* Activity + Quick Actions */}
          <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
            <Activity />

            <QuickActions />
          </section>

          {/* Footer */}
          <footer className="mt-8 border-t border-zinc-800 py-6">
            <div className="flex flex-col justify-between gap-2 text-xs text-zinc-600 sm:flex-row">
              <p>
                © 2026 DashPro. All rights reserved.
              </p>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="transition hover:text-zinc-300"
                >
                  Privacy
                </button>

                <button
                  type="button"
                  className="transition hover:text-zinc-300"
                >
                  Terms
                </button>

                <button
                  type="button"
                  className="transition hover:text-zinc-300"
                >
                  Support
                </button>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;