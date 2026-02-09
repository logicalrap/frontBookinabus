export default function Notifications() {
  const notifications = [
    {
      id: "NTF-901",
      title: "New booking request",
      message: "Amina Yusuf requested a Wedding trip for Feb 16, 2026 at 8:30 AM.",
      time: "2 mins ago",
      type: "new"
    },
    {
      id: "NTF-902",
      title: "Quote viewed",
      message: "Your quote for REQ-2042 was opened by the customer.",
      time: "35 mins ago",
      type: "info"
    },
    {
      id: "NTF-903",
      title: "Quote accepted",
      message: "David Okoye accepted your quote for REQ-2042.",
      time: "1 hour ago",
      type: "success"
    },
    {
      id: "NTF-904",
      title: "Trip reminder",
      message: "Upcoming trip: Church Program on Feb 20, 2026 at 7:15 AM.",
      time: "Yesterday",
      type: "reminder"
    }
  ];

  const badgeStyles = {
    new: "bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",
    info: "bg-blue-100 text-blue-700",
    success: "bg-emerald-100 text-emerald-700",
    reminder: "bg-amber-100 text-amber-700"
  };

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
              <h2 class="text-2xl font-semibold">Notifications</h2>
              <p class="mt-2 text-gray-200">Stay updated on new bookings and quote activity.</p>
            </div>

            <div class="flex items-center gap-3">
              <a class="flex-1 px-4 py-3 rounded-xl font-semibold btn-accent shadow-sm text-center" href="#/notifications">
                Notifications
              </a>
              <a class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition text-center" href="#/messages">
                Messages
              </a>
            </div>

            <div class="flex justify-end">
              <button class="px-4 py-2 rounded-lg font-semibold btn-accent">Mark all as read</button>
            </div>
          </header>

          <div class="space-y-4">
            ${notifications
              .map(
                (note) => `
            <div class="bg-white text-black rounded-2xl shadow-md p-5 flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[note.type]}">
                  ${note.title}
                </span>
                <span class="text-xs text-gray-500">${note.time}</span>
              </div>
              <p class="text-sm text-gray-700">${note.message}</p>
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


