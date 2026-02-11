import MenuColumn from "./MenuColumn.js";
import CustomerMenuColumn from "./CustomerMenuColumn.js";

export default function AppShell(content, options = {}) {
  const { hideTopBar = false } = options;
  const mainClass = hideTopBar
    ? "app-main app-main-no-topbar"
    : "app-main app-main-with-topbar";

  return `
    <div class="app-shell">

      <div class="w-full">

        ${
          hideTopBar
            ? ""
            : `
        <!-- Top bar -->
        <header class="app-card app-topbar px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-sm font-semibold tracking-wide">BUS</span>
            <div class="leading-tight">
              <div class="text-lg font-semibold tracking-wide text-white">
                BOOKINABUS
              </div>
              <div class="text-xs uppercase tracking-widest brand-accent">
                Event Transport Booking
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            ${MenuColumn()}
            ${CustomerMenuColumn()}

            <details class="relative">
              <summary class="list-none cursor-pointer w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-sm hover:bg-white/25 transition">
                U
              </summary>
              <div class="absolute right-0 mt-3 w-48 rounded-xl menu-accent shadow-lg overflow-hidden">
                <a class="block px-4 py-3 text-sm font-medium transition" href="#/home">Login as user</a>
                <a class="block px-4 py-3 text-sm font-medium transition" href="#/driver-dashboard">Login as driver</a>
              </div>
            </details>
          </div>
        </header>
        `
        }

        <!-- Injected pages -->
        <main class="${mainClass}">
          ${content ?? ""}
        </main>

      </div>
    </div>
  `;
}
