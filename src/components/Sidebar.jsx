import {
  LayoutDashboard,
  BarChart3,
  Users,
  FolderKanban,
  MessageSquare,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";

const mainMenu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Analytics", icon: BarChart3 },
  { name: "Users", icon: Users },
  { name: "Projects", icon: FolderKanban },
  { name: "Messages", icon: MessageSquare },
];

const systemMenu = [
  { name: "Notifications", icon: Bell },
  { name: "Settings", icon: Settings },
  { name: "Help & Support", icon: HelpCircle },
];

function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950 p-4 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-black">
              D
            </div>

            <div>
              <h1 className="font-bold">DashPro</h1>
              <p className="text-xs text-zinc-500">
                Admin Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main menu */}
        <nav>
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            Main Menu
          </p>

          <div className="space-y-1">
            {mainMenu.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                    index === 0
                      ? "bg-white font-medium text-black"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom menu */}
        <div className="mt-auto">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            System
          </p>

          <div className="space-y-1">
            {systemMenu.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </button>
              );
            })}

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-400 transition hover:bg-red-500/10">
              <LogOut size={19} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

