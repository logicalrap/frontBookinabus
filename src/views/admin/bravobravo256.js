export default function Bravobravo256() {
  return `
    <section class="app-page">
      <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-3xl font-semibold text-white mb-3">Bravobravo256 Admin</h1>
        <p class="text-white/80 mb-6">
          Private admin area for operational controls and reports.
        </p>
        <div class="mb-6">
          <button
            id="adminLogoutBtn"
            type="button"
            class="px-5 py-2 rounded-lg font-medium transition hover:opacity-90 btn-accent"
          >
            Logout
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#/bravobravo256-login" class="rounded-xl bg-white/10 border border-white/20 p-4 hover:bg-white/20 transition">
            <div class="text-lg font-medium text-white">Admin Login</div>
            <div class="text-sm text-white/70 mt-1">Go to secure admin sign-in</div>
          </a>
          <div class="rounded-xl bg-white/10 border border-white/20 p-4">
            <div class="text-lg font-medium text-white">Status</div>
            <div class="text-sm text-white/70 mt-1">Admin page is active.</div>
          </div>
        </div>

        <section class="mt-8">
          <h2 class="text-2xl font-semibold text-white mb-4">All Bookings</h2>
          <div id="adminBookingsList"></div>
        </section>
      </div>
    </section>
  `;
}
