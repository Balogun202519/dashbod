import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function Topbar({ onMenuClick }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white lg:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Search */}
        <div className="relative hidden sm:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="search"
            placeholder="Search anything..."
            className="h-10 w-64 rounded-xl border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-zinc-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setNotificationsOpen((value) => !value)
            }
            className="relative rounded-xl p-2.5 text-zinc-400 hover:bg-zinc-900 hover:text-white"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 top-12 w-72 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  Notifications
                </h3>

                <span className="text-xs text-zinc-500">
                  3 new
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl bg-zinc-900 p-3">
                  <p className="text-sm text-white">
                    New user registered
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    5 minutes ago
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-900 p-3">
                  <p className="text-sm text-white">
                    Payment received
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    32 minutes ago
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden h-8 w-px bg-zinc-800 sm:block" />

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((value) => !value)}
            className="flex items-center gap-3 rounded-xl p-1.5 hover:bg-zinc-900"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-semibold">
              A
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-white">
                Admin
              </p>

              <p className="text-xs text-zinc-500">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={16}
              className="hidden text-zinc-500 sm:block"
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-12 w-56 rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl">
              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-zinc-900">
                <User size={17} />
                Profile
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-zinc-900">
                <Settings size={17} />
                Settings
              </button>

              <div className="my-1 border-t border-zinc-800" />

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10">
                <LogOut size={17} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;