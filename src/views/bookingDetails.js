import { bookingRequests } from "../data/bookingRequests.js";

export default function BookingDetails(requestId) {
  const booking = bookingRequests.find((item) => item.id === requestId);

  if (!booking) {
    return `
      <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">
        <div class="bg-white text-black rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold">Booking not found</h2>
          <p class="mt-2 text-sm text-gray-600">We could not find a booking for ${requestId}.</p>
          <a class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-action)]" href="#/driver-dashboard">
            Back to dashboard
          </a>
        </div>
      </section>
    `;
  }

  return `
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">
      <div class="bg-white text-black rounded-2xl shadow-lg p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-xs uppercase tracking-widest text-[var(--color-primary-action)] font-semibold">Booking Details</p>
            <h2 class="text-2xl font-semibold">${booking.eventType}</h2>
            <p class="text-sm text-gray-500">Request ID: ${booking.id}</p>
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-action)] text-white font-semibold text-xs shadow-sm ring-2 ring-[var(--color-primary-action)]/40">
            <span class="w-2 h-2 rounded-full bg-white"></span>
            ${booking.status}
          </div>
        </div>

        <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span class="font-semibold">Customer:</span> ${booking.customer}</div>
          <div><span class="font-semibold">Passengers:</span> ${booking.passengers}</div>
          <div><span class="font-semibold">Pickup:</span> ${booking.pickup}</div>
          <div><span class="font-semibold">Drop-off:</span> ${booking.dropoff}</div>
          <div><span class="font-semibold">Date:</span> ${booking.date}</div>
          <div><span class="font-semibold">Time:</span> ${booking.time}</div>
        </div>

        <div class="mt-6 p-4 rounded-xl border border-[var(--color-primary-action)]/30 bg-[var(--color-primary)]/5">
          <p class="text-xs uppercase tracking-widest text-[var(--color-primary-action)] font-semibold">Customer Details</p>
          <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><span class="font-semibold">Customer name:</span> ${booking.customer}</div>
            <div><span class="font-semibold">Phone number:</span> ${booking.phone}</div>
          </div>
        </div>

        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <button class="flex-1 p-3 rounded-lg font-semibold btn-accent transition">
            Call Customer
          </button>
          <a class="flex-1 p-3 rounded-lg font-semibold btn-accent transition text-center" href="#/send-quote/${booking.id}">
            Send Quote Now
          </a>
        </div>
      </div>
    </section>
  `;
}
