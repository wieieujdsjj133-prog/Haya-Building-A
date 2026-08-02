"use client";

import { useState } from "react";


export default function SettingsPage() {

  const [settings, setSettings] = useState({
    language: "Arabic",
    theme: "Dark",
    notifications: true,
    aiMode: "Advanced"
  });


  function updateSetting(
    key,
    value
  ) {

    setSettings({
      ...settings,
      [key]: value
    });

  }


  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Haya Building A Settings
      </h1>


      <div className="bg-gray-900 rounded-xl p-6 space-y-6">


        <div>
          <label className="text-gray-400">
            Language
          </label>

          <select
            className="w-full bg-gray-800 p-3 rounded-lg mt-2"
            value={settings.language}
            onChange={(e) =>
              updateSetting(
                "language",
                e.target.value
              )
            }
          >

            <option>
              Arabic
            </option>

            <option>
              English
            </option>

          </select>
        </div>



        <div>
          <label className="text-gray-400">
            Theme
          </label>

          <select
            className="w-full bg-gray-800 p-3 rounded-lg mt-2"
            value={settings.theme}
            onChange={(e) =>
              updateSetting(
                "theme",
                e.target.value
              )
            }
          >

            <option>
              Dark
            </option>

            <option>
              Light
            </option>

          </select>

        </div>



        <div>
          <label className="text-gray-400">
            AI Mode
          </label>

          <select
            className="w-full bg-gray-800 p-3 rounded-lg mt-2"
            value={settings.aiMode}
            onChange={(e) =>
              updateSetting(
                "aiMode",
                e.target.value
              )
            }
          >

            <option>
              Basic
            </option>

            <option>
              Advanced
            </option>

          </select>

        </div>


        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) =>
              updateSetting(
                "notifications",
                e.target.checked
              )
            }
          />

          <span>
            Enable Notifications
          </span>

        </div>


      </div>

    </main>
  );
    }
