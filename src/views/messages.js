export default function Messages() {
  const threads = [
    {
      id: "MSG-301",
      name: "Dispatch Team",
      preview: "Your driver assignment for REQ-2041 is confirmed.",
      time: "3 mins ago",
      unread: true
    },
    {
      id: "MSG-302",
      name: "Amina Yusuf",
      preview: "Please confirm pickup at Ikeja by 8:15 AM.",
      time: "25 mins ago",
      unread: true
    },
    {
      id: "MSG-303",
      name: "David Okoye",
      preview: "Thanks for the quote. Is there a discount for return trips?",
      time: "1 hr ago",
      unread: false
    },
    {
      id: "MSG-304",
      name: "Grace Bello",
      preview: "We may adjust the pickup time by 15 minutes.",
      time: "Yesterday",
      unread: false
    }
  ];

  return `
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        <div class="sticky top-4 z-20 self-start">
          <details class="relative">
            <summary class="list-none cursor-pointer inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 hover:bg-white/25 transition ring-1 ring-white/20 shadow-lg">
              <span class="grid grid-cols-2 gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
              </span>
            </summary>
            <div class="absolute left-0 mt-3 w-52 rounded-2xl menu-accent shadow-xl overflow-hidden">
              <a class="block px-4 py-3 text-sm font-medium transition" href="#/profile">Profile</a>
              <a class="block px-4 py-3 text-sm font-medium transition" href="#/notifications">Notifications</a>
              <a class="block px-4 py-3 text-sm font-medium transition" href="#/my-trips">My Trips</a>
            </div>
          </details>
        </div>

        <div class="flex-1 space-y-6">
          <header class="flex flex-col gap-4">
            <div>
              <h2 class="text-2xl font-semibold">Messages</h2>
            </div>

            <div class="flex items-center gap-3">
              <a class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition text-center" href="#/notifications">
                Notifications
              </a>
              <a class="flex-1 px-4 py-3 rounded-xl font-semibold btn-accent shadow-sm text-center" href="#/messages">
                Messages
              </a>
            </div>
          </header>

          <div class="space-y-4">
            ${threads
              .map(
                (thread) => `
            <div class="bg-white text-black rounded-2xl shadow-md p-5 flex items-start gap-4">
              <div class="w-11 h-11 rounded-full bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)] flex items-center justify-center font-semibold">
                ${thread.name
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </div>
              <div class="flex-1 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-semibold">${thread.name}</div>
                  <div class="text-xs text-gray-500">${thread.time}</div>
                </div>
                <p class="text-sm text-gray-600">${thread.preview}</p>
              </div>
              ${
                thread.unread
                  ? `<span class="mt-1 h-2.5 w-2.5 rounded-full btn-accent"></span>`
                  : ""
              }
            </div>
          `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}


