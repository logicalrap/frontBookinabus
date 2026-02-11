export default function InstallApp() {
  return `
    <section class="app-page">
      <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="h-14 w-14 rounded-2xl bg-[var(--brand-accent)] shadow-lg"></div>
          <div>
            <div class="text-xs uppercase tracking-widest brand-accent">BookinaBus</div>
            <h1 class="text-3xl font-semibold text-white">Install the app in seconds</h1>
          </div>
        </div>
        <div class="text-sm text-white/70 max-w-[320px]">
          Save it to your phone for instant bookings, faster quotes, and real-time trip updates.
        </div>
      </header>

      <div class="mt-8 flex flex-col md:flex-row gap-4">
        <div class="flex-1 flex flex-col gap-3">
          <button id="installAppBtn" disabled class="w-full px-6 py-4 rounded-xl text-lg font-semibold btn-accent shadow-lg opacity-60 cursor-not-allowed">
            Install App
          </button>
          <button id="continueBrowserBtn" type="button" class="w-full px-6 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 transition text-white border border-white/20">
            Continue in Browser (Testing)
          </button>
        </div>
        <div class="flex-1 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
          Works like a native app. No app store download required.
        </div>
      </div>

      <section class="mt-10">
        <h2 class="text-xl font-semibold text-white mb-4">See how it works</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div class="h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/70 text-sm">
              Booking demo
            </div>
            <div class="mt-3 text-sm text-white/80">Tap, enter trip details, and receive driver quotes fast.</div>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div class="h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/70 text-sm">
              Driver quote demo
            </div>
            <div class="mt-3 text-sm text-white/80">Drivers respond with clear pricing and trip availability.</div>
          </div>
        </div>
      </section>

      <section class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 class="text-lg font-semibold text-white mb-3">For customers</h3>
          <ul class="text-sm text-white/80 space-y-2">
            <li>Request trips in minutes</li>
            <li>Compare driver quotes easily</li>
            <li>Manage bookings and messages in one place</li>
          </ul>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 class="text-lg font-semibold text-white mb-3">For drivers</h3>
          <ul class="text-sm text-white/80 space-y-2">
            <li>Get qualified trip requests</li>
            <li>Send quotes with confidence</li>
            <li>Track trips and payouts faster</li>
          </ul>
        </div>
      </section>

      <section class="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
        <h3 class="text-lg font-semibold text-white mb-3">Why install</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/80">
          <div class="rounded-xl bg-white/5 p-4">
            Faster access from your home screen
          </div>
          <div class="rounded-xl bg-white/5 p-4">
            Trip alerts and quote notifications
          </div>
          <div class="rounded-xl bg-white/5 p-4">
            Optimized for mobile booking
          </div>
        </div>
      </section>

      <section class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div class="text-sm brand-accent mb-2">BookinaBus Promise</div>
          <div class="text-white/80 text-sm">Reliable trips, transparent pricing, and fast support.</div>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div class="text-sm brand-accent mb-2">Testimonial</div>
          <div class="text-white/80 text-sm">“We booked our church trip in minutes and got quotes the same day.”</div>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div class="text-sm brand-accent mb-2">Local focus</div>
          <div class="text-white/80 text-sm">Serving trusted drivers and groups across our regions.</div>
        </div>
      </section>

      <footer class="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm text-white/70">
        <a class="hover:text-white" href="#/about">About</a>
        <a class="hover:text-white" href="#/contact">Contact</a>
        <a class="hover:text-white" href="#/terms">Terms</a>
      </footer>
    </section>
  `;
}






