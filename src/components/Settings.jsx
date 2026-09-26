import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Palette,
  Save,
  Check,
} from "lucide-react";

const tabs = [
  {
    id: "Profile",
    label: "Profile",
    icon: User,
  },
  {
    id: "Notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "Security",
    label: "Security",
    icon: Shield,
  },
  {
    id: "Appearance",
    label: "Appearance",
    icon: Palette,
  },
];

function Toggle({ enabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        enabled ? "bg-white" : "bg-zinc-800"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full transition ${
          enabled ? "left-6 bg-black" : "left-1 bg-zinc-500"
        }`}
      />
    </button>
  );
}

function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    name: "Admin",
    email: "admin@dashpro.com",

    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: false,

    twoFactor: true,
    loginAlerts: true,

    compactMode: false,
    animations: true,
  });

  const updateSetting = (key, value) => {
    setSettings((current) => ({
      ...current,
      [key]: value,
    }));

    setSaved(false);
  };

  const saveSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm text-zinc-500">System</p>

        <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          Settings
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Manage your account and dashboard preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        {/* SETTINGS NAVIGATION */}
        <div className="h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setSaved(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Icon size={17} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* SETTINGS CONTENT */}
        <div className="space-y-6">
          {/* PROFILE */}
          {activeTab === "Profile" && (
            <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-bold">
                  A
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Profile Information
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Update your account information.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="text-sm text-zinc-400">
                    Full name
                  </span>

                  <input
                    value={settings.name}
                    onChange={(e) =>
                      updateSetting("name", e.target.value)
                    }
                    className="mt-2 h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 text-sm text-white outline-none transition focus:border-zinc-500"
                  />
                </label>

                <label>
                  <span className="text-sm text-zinc-400">
                    Email
                  </span>

                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) =>
                      updateSetting("email", e.target.value)
                    }
                    className="mt-2 h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 text-sm text-white outline-none transition focus:border-zinc-500"
                  />
                </label>
              </div>
            </section>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "Notifications" && (
            <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Notification Preferences
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Choose which notifications you want to receive.
              </p>

              <div className="mt-5 divide-y divide-zinc-800">
                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Email notifications
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Receive important updates by email.
                    </p>
                  </div>

                  <Toggle
                    enabled={settings.emailNotifications}
                    onClick={() =>
                      updateSetting(
                        "emailNotifications",
                        !settings.emailNotifications
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Push notifications
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Receive notifications in your browser.
                    </p>
                  </div>

                  <Toggle
                    enabled={settings.pushNotifications}
                    onClick={() =>
                      updateSetting(
                        "pushNotifications",
                        !settings.pushNotifications
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Weekly reports
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Receive a weekly performance report.
                    </p>
                  </div>

                  <Toggle
                    enabled={settings.weeklyReports}
                    onClick={() =>
                      updateSetting(
                        "weeklyReports",
                        !settings.weeklyReports
                      )
                    }
                  />
                </div>
              </div>
            </section>
          )}

          {/* SECURITY */}
          {activeTab === "Security" && (
            <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Security
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Protect your account and manage security alerts.
              </p>

              <div className="mt-5 divide-y divide-zinc-800">
                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Two-factor authentication
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Add an extra layer of protection to your account.
                    </p>
                  </div>

                  <Toggle
                    enabled={settings.twoFactor}
                    onClick={() =>
                      updateSetting(
                        "twoFactor",
                        !settings.twoFactor
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Login alerts
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Get notified when a new login is detected.
                    </p>
                  </div>

                  <Toggle
                    enabled={settings.loginAlerts}
                    onClick={() =>
                      updateSetting(
                        "loginAlerts",
                        !settings.loginAlerts
                      )
                    }
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-6 rounded-xl border border-zinc-800 px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
              >
                Change Password
              </button>
            </section>
          )}

          {/* APPEARANCE */}
          {activeTab === "Appearance" && (
            <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Appearance
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Customize how your dashboard looks and behaves.
              </p>

              <div className="mt-5 divide-y divide-zinc-800">
                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Compact mode
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Reduce spacing throughout the dashboard.
                    </p>
                  </div>

                  <Toggle
                    enabled={settings.compactMode}
                    onClick={() =>
                      updateSetting(
                        "compactMode",
                        !settings.compactMode
                      )
                    }
                  />
                </div>

                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Animations
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Enable interface animations and transitions.
                    </p>
                  </div>

                  <Toggle
                    enabled={settings.animations}
                    onClick={() =>
                      updateSetting(
                        "animations",
                        !settings.animations
                      )
                    }
                  />
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <p className="text-sm font-medium text-white">
                  Current Theme
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Dark
                </p>
              </div>
            </section>
          )}

          {/* SAVE */}
          <div className="flex items-center justify-end gap-3">
            {saved && (
              <span className="flex items-center gap-2 text-sm text-emerald-400">
                <Check size={16} />
                Settings saved!
              </span>
            )}

            <button
              type="button"
              onClick={saveSettings}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;