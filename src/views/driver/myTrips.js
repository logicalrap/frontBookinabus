
export default function MyTrips() {
  const trips = [
    {
      id: "TRP-501",
      event: "Wedding",
      customer: "Amina Yusuf",
      date: "Feb 16, 2026",
      time: "8:30 AM",
      pickup: "Ikeja, Lagos",
      dropoff: "Lekki Phase 1",
      status: "Upcoming"
    },
    {
      id: "TRP-502",
      event: "Corporate Event",
      customer: "David Okoye",
      date: "Feb 18, 2026",
      time: "6:00 AM",
      pickup: "Maryland, Lagos",
      dropoff: "Victoria Island",
      status: "Confirmed"
    },
    {
      id: "TRP-503",
      event: "Church Program",
      customer: "Grace Bello",
      date: "Feb 20, 2026",
      time: "7:15 AM",
      pickup: "Surulere, Lagos",
      dropoff: "Ikeja, Lagos",
      status: "Upcoming"
    },
    {
      id: "TRP-504",
      event: "School Trip",
      customer: "Samuel Ade",
      date: "Jan 29, 2026",
      time: "9:00 AM",
      pickup: "Yaba, Lagos",
      dropoff: "Badagry",
      status: "Completed"
    }
  ];

  const statusStyles = {
    Upcoming: "bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",
    Confirmed: "bg-emerald-100 text-emerald-700",
    Completed: "bg-gray-100 text-gray-700"
  };

  const renderTrips = (list) =>
    list.length
      ? list
          .map(
            (trip) => `
          <div class="bg-white text-black rounded-2xl shadow-md p-5 space-y-3">
            <div class="flex items-center justify-between">
              <div class="text-sm font-semibold text-gray-500">${trip.id}</div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[trip.status] || "bg-gray-100 text-gray-700"}">
                ${trip.status}
              </span>
            </div>
            <div class="text-lg font-semibold">${trip.event}</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div><span class="font-semibold">Customer:</span> ${trip.customer}</div>
              <div><span class="font-semibold">Date:</span> ${trip.date}</div>
              <div><span class="font-semibold">Time:</span> ${trip.time}</div>
              <div><span class="font-semibold">Pickup:</span> ${trip.pickup}</div>
              <div><span class="font-semibold">Drop-off:</span> ${trip.dropoff}</div>
            </div>
          </div>
        `
          )
          .join("")
      : `
        <div class="bg-white text-black rounded-2xl shadow-md p-5 text-sm text-gray-600">
          No trips available yet.
        </div>
      `;

  return `
    <section class="app-page">
      <div>

        <div class="space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">My Trips</h2>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg ">
            <div class="flex flex-col gap-3 px-4 py-3">
              <div class="flex items-center gap-3">
                <button
                  data-trip-tab="new"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold btn-accent shadow-sm flex items-center justify-center gap-2"
                >
                  New
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white text-black">8</span>
                </button>
                <button
                  data-trip-tab="confirmed"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  Confirmed
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white">5</span>
                </button>
              </div>
              <div class="flex items-center gap-3">
                <button
                  data-trip-tab="cancelled"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  Cancelled
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white">2</span>
                </button>
                <button
                  data-trip-tab="history"
                  class="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  History
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white">24</span>
                </button>
              </div>
            </div>
          </div>

          <div data-trip-section="new" class="space-y-4">
            ${renderTrips(trips.filter((trip) => trip.status === "Upcoming"))}
          </div>

          <div data-trip-section="confirmed" class="space-y-4 hidden">
            ${renderTrips(trips.filter((trip) => trip.status === "Confirmed"))}
          </div>

          <div data-trip-section="cancelled" class="space-y-4 hidden">
            ${renderTrips(trips.filter((trip) => trip.status === "Cancelled"))}
          </div>

          <div data-trip-section="history" class="space-y-4 hidden">
            ${renderTrips(trips.filter((trip) => trip.status === "Completed"))}
          </div>
        </div>
      </div>
    </section>
  `;
}







