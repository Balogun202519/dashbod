import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import RevenueChart from "./components/RevenueChart";
import SalesOverview from "./components/SalesOverview";
import Transactions from "./components/Transactions";
import Activity from "./components/Activity";
import QuickActions from "./components/QuickActions";

import Analytics from "./components/Analytics";
import Users from "./components/Users";
import Projects from "./components/Projects";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";

import { stats } from "./data/dashboardData";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const handleNavigate = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const renderDashboard = () => (
    <>
      <section className="mb-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-zinc-500">
              Overview
            </p>

            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Welcome back, Admin
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Here's what's happening with your business today.
            </p>
          </div>

          <button className="w-fit rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200">
            Download Report
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

      <section className="mt-6 grid min-w-0 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <RevenueChart />
        <SalesOverview />
      </section>

      <section className="mt-6">
        <Transactions />
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)]">
        <Activity />
        <QuickActions />
      </section>
    </>
  );

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return renderDashboard();

      case "Analytics":
        return <Analytics />;

      case "Users":
        return <Users />;

      case "Projects":
        return <Projects />;

      case "Messages":
        return <Messages />;

      case "Notifications":
        return <Notifications />;

      case "Settings":
        return <Settings />;

      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      <div className="min-w-0 lg:pl-64">
        <Topbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="mx-auto w-full max-w-[1600px] overflow-hidden p-4 sm:p-6 lg:p-8">
          {renderPage()}

          <footer className="mt-8 border-t border-zinc-800 py-6">
            <div className="flex flex-col justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
              <p>© 2026 DashPro. All rights reserved.</p>

              <div className="flex gap-4">
                <button>Privacy</button>
                <button>Terms</button>
                <button>Support</button>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;