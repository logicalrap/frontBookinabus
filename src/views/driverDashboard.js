export default function DriverDashboard() {
  const tripRequests = [
    {
      id: "REQ-2041",
      customer: "Amina Yusuf",
      eventType: "Wedding",
      date: "Feb 16, 2026",
      time: "8:30 AM",
      pickup: "Ikeja, Lagos",
      dropoff: "Lekki Phase 1",
      passengers: 42
    },
    {
      id: "REQ-2042",
      customer: "David Okoye",
      eventType: "Corporate Event",
      date: "Feb 18, 2026",
      time: "6:00 AM",
      pickup: "Maryland, Lagos",
      dropoff: "Victoria Island",
      passengers: 30
    },
    {
      id: "REQ-2043",
      customer: "Grace Bello",
      eventType: "Church Program",
      date: "Feb 20, 2026",
      time: "7:15 AM",
      pickup: "Surulere, Lagos",
      dropoff: "Ikeja, Lagos",
      passengers: 55
    },
    {
      id: "REQ-2044",
      customer: "Samuel Ade",
      eventType: "School Trip",
      date: "Feb 22, 2026",
      time: "9:00 AM",
      pickup: "Yaba, Lagos",
      dropoff: "Badagry",
      passengers: 48
    }
  ];

  return `
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">

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

        <div class="flex-1 space-y-4">
          <header>
            <h2 class="text-2xl font-semibold">Driver Dashboard</h2>
            <p class="mt-2 text-gray-200">Incoming trip requests waiting for action</p>
          </header>

          <div class="space-y-4">
            ${tripRequests
              .map(
                (trip) => `
          <div class="bg-white text-black rounded-lg shadow-md p-5 flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <div class="text-sm font-semibold text-blue-700">${trip.id}</div>
              <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                ${trip.eventType}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div><span class="font-semibold">Customer:</span> ${trip.customer}</div>
              <div><span class="font-semibold">Passengers:</span> ${trip.passengers}</div>
              <div><span class="font-semibold">Pickup:</span> ${trip.pickup}</div>
              <div><span class="font-semibold">Drop-off:</span> ${trip.dropoff}</div>
              <div><span class="font-semibold">Date:</span> ${trip.date}</div>
              <div><span class="font-semibold">Time:</span> ${trip.time}</div>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 p-3 rounded-lg font-medium btn-accent transition">
                Call
              </button>
              <button class="flex-1 p-3 rounded-lg font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                Decline
              </button>
            </div>
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
