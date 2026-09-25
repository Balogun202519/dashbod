import {
  CheckCircle2,
  FileText,
  UserPlus,
  MessageSquare,
  CreditCard,
} from "lucide-react";

import { activities } from "../data/dashboardData";

const icons = {
  user: UserPlus,
  payment: CreditCard,
  project: CheckCircle2,
  message: MessageSquare,
  document: FileText,
};

const iconStyles = {
  user: "bg-blue-500/10 text-blue-400",
  payment: "bg-emerald-500/10 text-emerald-400",
  project: "bg-purple-500/10 text-purple-400",
  message: "bg-amber-500/10 text-amber-400",
  document: "bg-cyan-500/10 text-cyan-400",
};

function Activity() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Keep track of what is happening in your dashboard.
        </p>
      </div>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = icons[activity.type];

          return (
            <div
              key={activity.id}
              className="relative flex gap-3"
            >
              {index !== activities.length - 1 && (
                <div className="absolute left-5 top-10 h-[calc(100%+1.25rem)] w-px bg-zinc-800" />
              )}

              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  iconStyles[activity.type]
                }`}
              >
                <Icon size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-1 sm:flex-row">
                  <p className="text-sm font-medium text-white">
                    {activity.title}
                  </p>

                  <span className="text-xs text-zinc-600">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-1 text-sm leading-5 text-zinc-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-xl border border-zinc-800 py-2.5 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
      >
        View all activity
      </button>
    </div>
  );
}

export default Activity;