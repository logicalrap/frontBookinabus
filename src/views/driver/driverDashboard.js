import { bookingRequests } from "../../data/bookingRequests.js";

export default function DriverDashboard() {
  return `
    <section class="app-page space-y-6">

      <div>

        <div class="space-y-4">
          <header>
            <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Driver Dashboard</h2>
            <p class="mt-2 text-gray-200">Incoming trip requests waiting for action</p>
          </header>

          <div class="space-y-4">
            ${bookingRequests
              .map(
                (trip) => `
          <a class="block bg-white text-black rounded-lg shadow-md p-5 flex flex-col gap-4 transition hover:shadow-lg border border-transparent hover:border-[var(--color-primary-action)]"
             href="#/booking/${trip.id}">
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
              <button class="flex-1 p-3 rounded-lg font-medium btn-accent transition" onclick="event.stopPropagation(); event.preventDefault();">
                Call
              </button>
              <button class="flex-1 p-3 rounded-lg font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition" onclick="event.stopPropagation(); event.preventDefault();">
                Decline
              </button>
            </div>
          </a>
        `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}










