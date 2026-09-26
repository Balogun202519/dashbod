import {
  LayoutDashboard,
  BarChart3,
  Users,
  FolderKanban,
  MessageSquare,
  Bell,
  Settings,
  X,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "Users",
    icon: Users,
  },
  {
    label: "Projects",
    icon: FolderKanban,
  },
  {
    label: "Messages",
    icon: MessageSquare,
  },
  {
    label: "Notifications",
    icon: Bell,
  },
];

const bottomItems = [
  {
    label: "Settings",
    icon: Settings,
  },
];

function Sidebar({ open, onClose, activePage, onNavigate }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-zinc-800 bg-zinc-950 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-zinc-800 px-5">
          <button
            type="button"
            onClick={() => onNavigate("Dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-black">
              D
            </div>

            <div className="text-left">
              <h1 className="font-bold text-white">DashPro</h1>
              <p className="text-xs text-zinc-500">
                Admin Dashboard
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-900 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            Main Menu
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    onNavigate(item.label);
                    onClose();
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-white text-black"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            System
          </p>

          <div className="space-y-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    onNavigate(item.label);
                    onClose();
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-white text-black"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom user area */}
        <div className="border-t border-zinc-800 p-3">
          <div className="flex items-center gap-3 rounded-xl p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-semibold text-white">
              A
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                Admin
              </p>

              <p className="truncate text-xs text-zinc-500">
                admin@dashpro.com
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-red-400"
              title="Logout"
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;