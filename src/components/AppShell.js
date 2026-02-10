export default function AppShell(content, options = {}) {
  const { hideTopBar = false } = options;
  return `
    <div class="min-h-screen flex justify-center px-4 py-8">

      <div class="w-full max-w-md space-y-6">

        ${
          hideTopBar
            ? ""
            : `
        <!-- Top bar -->
        <header class="app-card px-5 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🚌</span>
            <div class="leading-tight">
              <div class="text-lg font-semibold tracking-wide text-white">
                BOOKINABUS
              </div>
              <div class="text-xs uppercase tracking-widest brand-accent">
                Event Transport Booking
              </div>
            </div>
          </div>

          <details class="relative">
            <summary class="list-none cursor-pointer w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-sm hover:bg-white/25 transition">
              👤
            </summary>
            <div class="absolute right-0 mt-3 w-48 rounded-xl menu-accent shadow-lg overflow-hidden">
              <a class="block px-4 py-3 text-sm font-medium transition" href="#/home">Login as user</a>
              <a class="block px-4 py-3 text-sm font-medium transition" href="#/driver-dashboard">Login as driver</a>
            </div>
          </details>
        </header>
        `
        }

        <!-- Injected pages -->
        <main class="app-card p-6 space-y-6">
          ${content ?? ""}
        </main>

      </div>
    </div>
  `;
}
