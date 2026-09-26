import { useState } from "react";
import {
  FolderKanban,
  Plus,
  MoreHorizontal,
  Users,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website.",
    progress: 85,
    status: "In Progress",
    members: 6,
  },
  {
    id: 2,
    name: "Mobile Application",
    description: "Build the new mobile application.",
    progress: 65,
    status: "In Progress",
    members: 8,
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Q4 marketing campaign.",
    progress: 100,
    status: "Completed",
    members: 4,
  },
  {
    id: 4,
    name: "Dashboard System",
    description: "Internal analytics dashboard.",
    progress: 42,
    status: "In Progress",
    members: 5,
  },
];

function Projects() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-zinc-500">Management</p>
          <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            Projects
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Manage projects and track their progress.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200">
          <Plus size={17} />
          New Project
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <FolderKanban className="text-zinc-400" size={20} />
          <p className="mt-3 text-sm text-zinc-500">Total Projects</p>
          <p className="mt-1 text-2xl font-bold text-white">24</p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <Clock3 className="text-amber-400" size={20} />
          <p className="mt-3 text-sm text-zinc-500">In Progress</p>
          <p className="mt-1 text-2xl font-bold text-white">12</p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <CheckCircle2 className="text-emerald-400" size={20} />
          <p className="mt-3 text-sm text-zinc-500">Completed</p>
          <p className="mt-1 text-2xl font-bold text-white">12</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900">
                <FolderKanban size={20} className="text-zinc-300" />
              </div>

              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === project.id ? null : project.id
                  )
                }
                className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-900 hover:text-white"
              >
                <MoreHorizontal size={18} />
              </button>

              {openMenu === project.id && (
                <div className="absolute right-5 top-14 z-10 w-36 rounded-xl border border-zinc-800 bg-zinc-950 p-1 shadow-2xl">
                  <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-900">
                    View
                  </button>
                  <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-900">
                    Edit
                  </button>
                  <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-400 hover:bg-red-500/10">
                    Delete
                  </button>
                </div>
              )}
            </div>

            <h2 className="mt-5 font-semibold text-white">
              {project.name}
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {project.description}
            </p>

            <div className="mt-6 flex items-center justify-between text-xs">
              <span className="text-zinc-500">Progress</span>
              <span className="font-medium text-white">
                {project.progress}%
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span
                className={`rounded-full px-2.5 py-1 text-xs ${
                  project.status === "Completed"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-amber-500/10 text-amber-400"
                }`}
              >
                {project.status}
              </span>

              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <Users size={14} />
                {project.members}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;