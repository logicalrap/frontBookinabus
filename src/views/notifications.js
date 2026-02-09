import MenuColumn from "../components/MenuColumn.js";

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
        ${MenuColumn()}

        <div class="flex-1 space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold">Notifications</h2>
              <p class="mt-2 text-gray-200">Stay updated on new bookings and quote activity.</p>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold  transition text-center" href="#/messages">
                Messages
              </a>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-2 rounded-lg font-semibold btn-accent">Mark all as read</button>
          </div>

          <div class="space-y-4 mt-2">
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
