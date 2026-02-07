export default function Login() {
  return `
    <section class="max-w-[420px] mx-auto mt-16 p-6 app-card">

      <!-- Header -->
      <header class="text-center mb-8">
        
        <p class="mt-2 text-sm text-gray-200">
          Login to continue
        </p>
      </header>

      <!-- Login Form -->
      <form id="loginForm" class="space-y-5">

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            class="w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-200">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            class="w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          id="login-btn"
          class="w-full p-3 rounded-lg font-medium transition hover:opacity-90 btn-primary"
        >
          Login
        </button>

      </form>

      <!-- Footer -->
      <div class="mt-6 text-center text-sm text-gray-200">
        <p>
          Don’t have access?
          <span class="underline cursor-pointer">
            Contact admin
          </span>
        </p>
      </div>

    </section>
  `;
}
