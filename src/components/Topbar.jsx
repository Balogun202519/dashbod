import {
  Bell,
  ChevronDown,
  Menu,
  Search,
} from "lucide-react";

function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-white lg:hidden"
          aria-label="Open sidebar"
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
            aria-label="Search"
            className="h-10 w-64 rounded-xl border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button
          type="button"
          className="relative rounded-xl p-2.5 text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={20} />

          {/* Notification indicator */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-zinc-800 sm:block" />

        {/* Admin profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-zinc-900"
          aria-label="Open profile menu"
        >
          {/* Avatar */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-semibold text-white">
            A
          </div>

          {/* User information */}
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
      </div>
    </header>
  );
}

export default Topbar;

