export default function About() {
  const appName = "Bukabus";
  const tagline = "From Our Roads To Your Destination";
  const contactEmail = "bukabuses@gmail.com";
  const contactPhone = "Not provided";

  return `
    <section class="app-page">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
        <header class="rounded-2xl border border-white/20 bg-gradient-to-br from-white/16 to-white/6 p-6 sm:p-8 shadow-lg">
          <p class="text-xs uppercase tracking-widest text-[var(--color-secondary-heading)] font-semibold">About ${appName}</p>
          <h1 class="mt-2 text-3xl sm:text-4xl font-semibold text-white">${tagline}</h1>
          <p class="mt-4 text-white/90 leading-relaxed">
            ${appName} is a Zambian platform that connects people who need a whole bus for private hire with bus owners and drivers who have buses available.
          </p>
          <p class="mt-3 text-white/85 leading-relaxed">
            We make it easier to organize group transport for church events, school trips, weddings, funerals, business travel, and family gatherings.
          </p>
        </header>

        <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
          <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">How It Works</h2>
          <ul class="mt-3 list-disc pl-5 space-y-2 leading-relaxed text-white/90">
            <li>Submit your bus request.</li>
            <li>Drivers contact you directly.</li>
            <li>You agree on price and trip details.</li>
            <li>You pay the driver directly.</li>
          </ul>
          <p class="mt-4 font-semibold text-white">Simple. Direct. Local.</p>
        </article>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">Our Mission</h2>
            <p class="mt-3 leading-relaxed text-white/90">
              To make group transport in Zambia simple, accessible, and stress-free.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">Why Choose ${appName}</h2>
            <ul class="mt-3 list-disc pl-5 space-y-2 leading-relaxed text-white/90">
              <li>Easy to use.</li>
              <li>No middleman.</li>
              <li>Built for Zambia.</li>
              <li>Supports local drivers.</li>
            </ul>
          </article>
        </div>

        <article class="rounded-2xl border border-[var(--color-secondary-heading)]/50 bg-[var(--color-secondary-heading)]/10 p-5 sm:p-6">
          <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">Contact Us</h2>
          <p class="mt-3 text-white/90">Have questions? We'd love to hear from you.</p>
          <p class="mt-3 text-white/90 leading-relaxed">
            Email:
            <a class="font-semibold text-[var(--color-secondary-heading)] hover:underline" href="mailto:${contactEmail}">${contactEmail}</a><br />
            Phone: ${contactPhone}
          </p>
          <p class="mt-4 font-semibold text-white">${appName} - ${tagline}</p>
        </article>
      </div>
    </section>
  `;
}
