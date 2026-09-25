import {
  Plus,
  UserPlus,
  FilePlus2,
  Send,
  Download,
} from "lucide-react";

const actions = [
  {
    title: "New Project",
    description: "Create a new project",
    icon: Plus,
  },
  {
    title: "Add User",
    description: "Invite a new user",
    icon: UserPlus,
  },
  {
    title: "New Report",
    description: "Generate a report",
    icon: FilePlus2,
  },
  {
    title: "Send Message",
    description: "Contact your team",
    icon: Send,
  },
  {
    title: "Export Data",
    description: "Download dashboard data",
    icon: Download,
  },
];

function QuickActions() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Quickly access common dashboard actions.
        </p>
      </div>

      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl border border-transparent p-3 text-left transition hover:border-zinc-800 hover:bg-zinc-900"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-zinc-300">
                <Icon size={19} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">
                  {action.title}
                </p>

                <p className="mt-0.5 truncate text-xs text-zinc-500">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;