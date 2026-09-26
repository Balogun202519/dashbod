import { useMemo, useState } from "react";
import {
  MoreHorizontal,
  Search,
  UserPlus,
  Users as UsersIcon,
  Mail,
  ShieldCheck,
  UserX,
} from "lucide-react";

const usersData = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia@example.com",
    role: "Administrator",
    status: "Active",
    joined: "Sep 18, 2026",
  },
  {
    id: 2,
    name: "James Wilson",
    email: "james@example.com",
    role: "Manager",
    status: "Active",
    joined: "Sep 15, 2026",
  },
  {
    id: 3,
    name: "Sophia Brown",
    email: "sophia@example.com",
    role: "Editor",
    status: "Pending",
    joined: "Sep 12, 2026",
  },
  {
    id: 4,
    name: "Noah Davis",
    email: "noah@example.com",
    role: "User",
    status: "Active",
    joined: "Sep 10, 2026",
  },
  {
    id: 5,
    name: "Emma Johnson",
    email: "emma@example.com",
    role: "User",
    status: "Inactive",
    joined: "Sep 08, 2026",
  },
  {
    id: 6,
    name: "Liam Williams",
    email: "liam@example.com",
    role: "Manager",
    status: "Active",
    joined: "Sep 05, 2026",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-emerald-500/10 text-emerald-400",
    Pending: "bg-amber-500/10 text-amber-400",
    Inactive: "bg-zinc-800 text-zinc-500",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] || "bg-zinc-800 text-zinc-400"
      }`}
    >
      {status}
    </span>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-zinc-300">
      {initials}
    </div>
  );
}

function Users() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);

  const filteredUsers = useMemo(() => {
    return usersData.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || user.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-zinc-500">
            Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            Users
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Manage users, roles, and account status.
          </p>
        </div>

        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          <UserPlus size={17} />
          Add User
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-500">Total Users</p>
            <UsersIcon size={19} className="text-zinc-500" />
          </div>

          <p className="mt-3 text-2xl font-bold text-white">
            12,480
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-500">Active Users</p>
            <ShieldCheck size={19} className="text-emerald-400" />
          </div>

          <p className="mt-3 text-2xl font-bold text-white">
            10,842
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-500">Inactive</p>
            <UserX size={19} className="text-zinc-500" />
          </div>

          <p className="mt-3 text-2xl font-bold text-white">
            1,638
          </p>
        </div>
      </div>

      {/* User list */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        {/* Filters */}
        <div className="flex flex-col gap-3 border-b border-zinc-800 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search users..."
              className="h-10 w-full rounded-xl border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-zinc-600"
            />
          </div>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="h-10 rounded-xl border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-300 outline-none focus:border-zinc-600"
          >
            <option value="All">All statuses</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800 text-left">
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  User
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Role
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Joined
                </th>

                <th className="px-6 py-4">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-zinc-800/70 last:border-0 hover:bg-zinc-900/40"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={user.name} />

                      <div>
                        <p className="text-sm font-medium text-white">
                          {user.name}
                        </p>

                        <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                          <Mail size={12} />
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-zinc-400">
                    {user.role}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={user.status} />
                  </td>

                  <td className="px-6 py-4 text-sm text-zinc-500">
                    {user.joined}
                  </td>

                  <td className="relative px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(
                          openMenu === user.id
                            ? null
                            : user.id
                        )
                      }
                      className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-800 hover:text-white"
                    >
                      <MoreHorizontal size={18} />
                    </button>

                    {openMenu === user.id && (
                      <div className="absolute right-6 top-14 z-20 w-40 rounded-xl border border-zinc-800 bg-zinc-950 p-1 text-left shadow-2xl">
                        <button className="w-full rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900">
                          View profile
                        </button>

                        <button className="w-full rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900">
                          Edit user
                        </button>

                        <button className="w-full rounded-lg px-3 py-2 text-sm text-red-400 hover:bg-red-500/10">
                          Remove user
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="divide-y divide-zinc-800 md:hidden">
          {filteredUsers.map((user) => (
            <div key={user.id} className="p-4">
              <div className="flex items-start gap-3">
                <Avatar name={user.name} />

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {user.name}
                      </p>

                      <p className="mt-1 truncate text-xs text-zinc-500">
                        {user.email}
                      </p>
                    </div>

                    <StatusBadge status={user.status} />
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-600">
                        Role
                      </p>

                      <p className="mt-1 text-sm text-zinc-400">
                        {user.role}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-zinc-600">
                        Joined
                      </p>

                      <p className="mt-1 text-sm text-zinc-400">
                        {user.joined}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(
                          openMenu === user.id
                            ? null
                            : user.id
                        )
                      }
                      className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-900 hover:text-white"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  {openMenu === user.id && (
                    <div className="mt-3 grid gap-1 rounded-xl border border-zinc-800 bg-zinc-900 p-1">
                      <button className="rounded-lg px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-800">
                        View profile
                      </button>

                      <button className="rounded-lg px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-800">
                        Edit user
                      </button>

                      <button className="rounded-lg px-3 py-2 text-left text-sm text-red-400 hover:bg-red-500/10">
                        Remove user
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="p-10 text-center">
            <p className="text-sm font-medium text-white">
              No users found
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;