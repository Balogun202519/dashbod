import { useState } from "react";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    message: "Can you review the new design?",
    time: "10:42 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Michael Anderson",
    message: "The project has been updated.",
    time: "9:30 AM",
    unread: 1,
  },
  {
    id: 3,
    name: "James Wilson",
    message: "Thanks for your help!",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 4,
    name: "Olivia Martin",
    message: "The report is ready.",
    time: "Yesterday",
    unread: 0,
  },
];

function Messages() {
  const [selected, setSelected] = useState(conversations[0]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-zinc-500">Communication</p>
        <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          Messages
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Communicate with your team.
        </p>
      </div>

      <div className="grid min-h-[600px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 lg:grid-cols-[320px_1fr]">
        {/* Conversations */}
        <div className="border-b border-zinc-800 lg:border-b-0 lg:border-r">
          <div className="border-b border-zinc-800 p-4">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600"
              />

              <input
                placeholder="Search messages..."
                className="h-10 w-full rounded-xl border border-zinc-800 bg-zinc-900 pl-10 pr-3 text-sm text-white outline-none placeholder:text-zinc-600"
              />
            </div>
          </div>

          <div className="divide-y divide-zinc-800">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelected(conversation)}
                className={`flex w-full items-center gap-3 p-4 text-left transition ${
                  selected.id === conversation.id
                    ? "bg-zinc-900"
                    : "hover:bg-zinc-900/60"
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-semibold text-white">
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex justify-between gap-2">
                    <p className="truncate text-sm font-medium text-white">
                      {conversation.name}
                    </p>

                    <span className="text-xs text-zinc-600">
                      {conversation.time}
                    </span>
                  </div>

                  <p className="mt-1 truncate text-xs text-zinc-500">
                    {conversation.message}
                  </p>
                </div>

                {conversation.unread > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black">
                    {conversation.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex min-h-[500px] flex-col">
          <div className="flex items-center justify-between border-b border-zinc-800 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-semibold">
                {selected.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {selected.name}
                </p>
                <p className="text-xs text-emerald-400">
                  Online
                </p>
              </div>
            </div>

            <button className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-900 hover:text-white">
              <MoreVertical size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-4 p-5">
            <div className="max-w-md rounded-2xl rounded-tl-sm bg-zinc-900 p-3">
              <p className="text-sm text-zinc-300">
                {selected.message}
              </p>
            </div>

            <div className="ml-auto max-w-md rounded-2xl rounded-tr-sm bg-white p-3">
              <p className="text-sm text-black">
                Sure! I'll take a look at it.
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-800 p-4">
            <div className="flex items-center gap-2">
              <button className="rounded-xl p-2.5 text-zinc-500 hover:bg-zinc-900 hover:text-white">
                <Paperclip size={19} />
              </button>

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Type a message..."
                className="h-11 min-w-0 flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm text-white outline-none placeholder:text-zinc-600"
              />

              <button
                onClick={sendMessage}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black hover:bg-zinc-200"
              >
                <Send size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;