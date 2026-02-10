import CustomerMenuColumn from "../../components/CustomerMenuColumn.js";

export default function MyBookings() {
  const bookings = [
    {
      id: "BKG-801",
      event: "Wedding",
      date: "Feb 16, 2026",
      time: "8:30 AM",
      pickup: "Ikeja, Lagos",
      dropoff: "Lekki Phase 1",
      status: "Upcoming"
    },
    {
      id: "BKG-802",
      event: "Corporate Event",
      date: "Feb 18, 2026",
      time: "6:00 AM",
      pickup: "Maryland, Lagos",
      dropoff: "Victoria Island",
      status: "Completed"
    },
    {
      id: "BKG-803",
      event: "Church Program",
      date: "Feb 20, 2026",
      time: "7:15 AM",
      pickup: "Surulere, Lagos",
      dropoff: "Ikeja, Lagos",
      status: "Cancelled"
    }
  ];

  const statusStyles = {
    Upcoming: "bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",
    Completed: "bg-emerald-100 text-emerald-700",
    Cancelled: "bg-rose-100 text-rose-700"
  };

  const renderBookings = (list) =>
    list.length
      ? list
          .map(
            (booking) => `
          <div class="bg-white text-black rounded-2xl shadow-md p-5 space-y-3">
            <div class="flex items-center justify-between">
              <div class="text-sm font-semibold text-gray-500">${booking.id}</div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[booking.status] || "bg-gray-100 text-gray-700"}">
                ${booking.status}
              </span>
            </div>
            <div class="text-lg font-semibold">${booking.event}</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div><span class="font-semibold">Date:</span> ${booking.date}</div>
              <div><span class="font-semibold">Time:</span> ${booking.time}</div>
              <div><span class="font-semibold">Pickup:</span> ${booking.pickup}</div>
              <div><span class="font-semibold">Drop-off:</span> ${booking.dropoff}</div>
            </div>
          </div>
        `
          )
          .join("")
      : `
        <div class="bg-white text-black rounded-2xl shadow-md p-5 text-sm text-gray-600">
          No bookings available yet.
        </div>
      `;

  return `
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${CustomerMenuColumn()}

        <div class="flex-1 space-y-6" data-trip-default="upcoming">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">My Bookings</h2>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg rounded-2xl">
            <div class="flex flex-col gap-3 px-4 py-3">
              <div class="flex items-center gap-3">
                <button
                  data-trip-tab="upcoming"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold btn-accent shadow-sm flex items-center justify-center gap-2"
                >
                  Upcoming
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white text-black">3</span>
                </button>
                <button
                  data-trip-tab="completed"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  Completed
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white">1</span>
                </button>
              </div>
              <div class="flex items-center gap-3">
                <button
                  data-trip-tab="cancelled"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  Cancelled
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white">1</span>
                </button>
                <button
                  data-trip-tab="history"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  History
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white">8</span>
                </button>
              </div>
            </div>
          </div>

          <div data-trip-section="upcoming" class="space-y-4">
            ${renderBookings(bookings.filter((booking) => booking.status === "Upcoming"))}
          </div>

          <div data-trip-section="completed" class="space-y-4 hidden">
            ${renderBookings(bookings.filter((booking) => booking.status === "Completed"))}
          </div>

          <div data-trip-section="cancelled" class="space-y-4 hidden">
            ${renderBookings(bookings.filter((booking) => booking.status === "Cancelled"))}
          </div>

          <div data-trip-section="history" class="space-y-4 hidden">
            ${renderBookings(bookings)}
          </div>
        </div>
      </div>
    </section>
  `;
}
