import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  CreditCard,
  UserPlus,
  MessageSquare,
  Trash2,
} from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    type: "user",
    title: "New user registered",
    description: "Michael Anderson created an account.",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "payment",
    title: "Payment received",
    description: "A payment of $1,240.00 was completed.",
    time: "32 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "message",
    title: "New message",
    description: "Sarah sent you a new message.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "project",
    title: "Project completed",
    description: "Website redesign was completed.",
    time: "4 hours ago",
    unread: false,
  },
];

const icons = {
  user: UserPlus,
  payment: CreditCard,
  message: MessageSquare,
  project: CheckCircle2,
};

function Notifications() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAllRead = () => {
    setNotifications((items) =>
      items.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-zinc-500">System</p>

          <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            Notifications
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Stay updated with your dashboard activity.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={markAllRead}
            className="rounded-xl border border-zinc-800 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-900"
          >
            Mark all read
          </button>

          <button
            onClick={clearNotifications}
            className="flex items-center gap-2 rounded-xl border border-red-500/20 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10"
          >
            <Trash2 size={16} />
            Clear
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950">
        <div className="flex items-center justify-between border-b border-zinc-800 p-5">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-zinc-400" />

            <h2 className="font-semibold text-white">
              Recent Notifications
            </h2>
          </div>

          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-black">
            {unreadCount} unread
          </span>
        </div>

        {notifications.length > 0 ? (
          <div className="divide-y divide-zinc-800">
            {notifications.map((notification) => {
              const Icon = icons[notification.type];

              return (
                <div
                  key={notification.id}
                  className={`flex gap-4 p-5 ${
                    notification.unread
                      ? "bg-zinc-900/40"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-900">
                    <Icon size={19} className="text-zinc-300" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row">
                      <h3 className="text-sm font-medium text-white">
                        {notification.title}
                      </h3>

                      <span className="text-xs text-zinc-600">
                        {notification.time}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-zinc-500">
                      {notification.description}
                    </p>
                  </div>

                  {notification.unread && (
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center">
            <Bell className="mx-auto text-zinc-700" size={32} />

            <p className="mt-4 font-medium text-white">
              No notifications
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              You're all caught up.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;