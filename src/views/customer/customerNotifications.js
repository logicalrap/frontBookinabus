import MenuColumn from "../../components/MenuColumn.js";

export default function CustomerNotifications() {
  const notifications = [
    {
      id: "CNTF-201",
      title: "Booking confirmed",
      message: "Your trip for Feb 16, 2026 has been confirmed.",
      time: "5 mins ago",
      type: "success"
    },
    {
      id: "CNTF-202",
      title: "Quote received",
      message: "A driver sent a quote for your wedding booking.",
      time: "25 mins ago",
      type: "new"
    },
    {
      id: "CNTF-203",
      title: "Payment reminder",
      message: "Please complete payment to secure your booking.",
      time: "1 hour ago",
      type: "reminder"
    }
  ];

  const badgeStyles = {
    new: "bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",
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
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Notifications</h2>
              <p class="mt-2 text-gray-200">Stay updated on your bookings and quotes.</p>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg rounded-2xl">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-messages">
                Messages
              </a>
            </div>
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
