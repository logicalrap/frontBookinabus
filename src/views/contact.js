export default function Contact() {
  return `
    <section class="app-page">
      <div class="max-w-2xl mx-auto p-6">
        <h1 class="text-3xl font-semibold text-white mb-3">Contact Us</h1>
        <p class="text-white/80 mb-6">
          Send us a message and we will get back to you.
        </p>

        <form id="contactForm" class="space-y-4 rounded-2xl border border-white/20 bg-white/10 p-5">
          <div>
            <label for="contactName" class="block text-sm text-white/80 mb-2">Name</label>
            <input
              id="contactName"
              type="text"
              required
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label for="contactEmail" class="block text-sm text-white/80 mb-2">Email</label>
            <input
              id="contactEmail"
              type="email"
              required
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label for="contactPhone" class="block text-sm text-white/80 mb-2">Phone Number</label>
            <input
              id="contactPhone"
              type="tel"
              required
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              placeholder="+260..."
            />
          </div>

          <div>
            <label for="contactMessage" class="block text-sm text-white/80 mb-2">Message</label>
            <textarea
              id="contactMessage"
              required
              rows="5"
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            id="contactSubmitBtn"
            type="submit"
            class="w-full p-3 rounded-lg font-medium transition hover:opacity-90 btn-accent"
          >
            Send Message
          </button>

          <p id="contactStatus" class="text-sm text-white/80"></p>
        </form>
      </div>
    </section>
  `;
}
