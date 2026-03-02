export default function Bravobravo256Login() {
  return `
    <section class="app-page">
      <div class="max-w-md mx-auto p-6">
        <h1 class="text-3xl font-semibold text-white mb-3">Bravobravo256 Login</h1>
        <p class="text-white/80 mb-6">Sign in to access admin tools.</p>

        <form id="loginForm" class="space-y-4 rounded-2xl border border-white/20 bg-white/10 p-5">
          <div>
            <label for="email" class="block text-sm text-white/80 mb-2">Email</label>
            <input
              id="email"
              type="email"
              autocomplete="username"
              required
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm text-white/80 mb-2">Password</label>
            <input
              id="password"
              type="password"
              autocomplete="current-password"
              required
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            class="w-full p-3 rounded-lg font-medium transition hover:opacity-90 btn-accent"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  `;
}
