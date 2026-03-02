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
          <a href="#/home" class="flex items-center gap-3">
            <img
              src="/icons/bookinabus.png"
              alt="BookinaBus logo"
              class="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-md"
            />
            <div class="leading-tight">
              <div class="text-lg font-semibold tracking-wide text-white">
                BOOKINABUS
              </div>
              <div class="text-xs uppercase tracking-widest brand-accent">
                Event Transport Booking
              </div>
            </div>
          </a>

          <div class="flex items-center gap-2">
            <!--
              TEMPORARILY HIDDEN: role/account menu controls (D, C, U).
              To restore, replace this comment block with:

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
            -->
          </div>
        </header>
        `
        }

        <!-- Injected pages -->
        <main class="${mainClass}">
          ${content ?? ""}
        </main>

        ${
          hideTopBar
            ? ""
            : `
        <button
          type="button"
          aria-label="Go back"
          title="Go back"
          onclick="if (window.history.length > 1) { window.history.back(); } else { window.location.hash = '#/home'; }"
          class="fixed left-4 bottom-6 z-40 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-sm hover:bg-white/25 transition"
        >
          &larr;
        </button>
        `
        }

        <footer class="px-4 sm:px-5 py-4 border-t border-white/10 text-sm text-white/75 flex flex-wrap justify-center items-center gap-4 text-center">
          <a class="hover:text-white transition" href="#/contact">Contact Us</a>
          <a class="hover:text-white transition" href="#/about">About Us</a>
          <a class="hover:text-white transition" href="#/terms">T&amp;Cs</a>
          <a class="hover:text-white transition" href="#/privacy">Privacy</a>
        </footer>

      </div>
    </div>
  `;
}
