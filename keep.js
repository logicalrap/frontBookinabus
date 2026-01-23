export default function Home() {
  return `
    <section class="max-w-[900px] mx-auto mt-8 bg-[#1f05b3] p-6 rounded-xl shadow-lg text-white">

      <h1 class="text-2xl font-semibold mb-6 text-center">
        BookinaBus Charter Booking
      </h1>

      <form id="bookingForm" class="space-y-6">

        <!-- STEP 1 -->
        <div class="step block" data-step="1">

          <h3 class="bg-black px-4 py-2 rounded-md mb-6 text-lg font-medium">
            Trip Details
          </h3>

          <!-- Event type -->
          <div class="mb-5">
            <label class="block mb-2 font-medium text-gray-200">
              Event Type
            </label>
            <select
              required
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
            >
              <option value="">Select event type</option>
              <option>Church Program</option>
              <option>Wedding</option>
              <option>School Trip</option>
              <option>Funeral</option>
              <option>Sports Team</option>
              <option>Corporate Event</option>
              <option>Custom</option>
            </select>
          </div>

          <!-- Pickup & Dropoff -->
          <div class="flex flex-col md:flex-row gap-5 mb-5">
            <div class="flex-1">
              <label class="block mb-2 font-medium text-gray-200">
                Pickup Location
              </label>
              <input
                id="pickup"
                type="text"
                required
                class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 font-medium text-gray-200">
                Drop-off Location
              </label>
              <input
                id="dropoff"
                type="text"
                required
                class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              />
            </div>
          </div>

          <!-- Date & Time -->
          <div class="flex flex-col md:flex-row gap-5 mb-6">
            <div class="flex-1">
              <label class="block mb-2 font-medium text-gray-200">
                Trip Date
              </label>
              <input
                id="date"
                type="date"
                required
                class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 font-medium text-gray-200">
                Pickup Time
              </label>
              <input
                id="time"
                type="time"
                required
                class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              />
            </div>
          </div>

          <button
            type="button"
            id="nextBtn"
            class="w-full bg-[#0a60a7] p-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Next
          </button>
        </div>

        <!-- STEP 2 -->
        <div class="step hidden" data-step="2">

          <h3 class="bg-black px-4 py-2 rounded-md mb-6 text-lg font-medium">
            Contact Information
          </h3>

          <div class="flex flex-col md:flex-row gap-5 mb-5">
            <div class="flex-1">
              <label class="block mb-2 font-medium text-gray-200">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 font-medium text-gray-200">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
              />
            </div>
          </div>

          <div class="mb-6">
            <label class="block mb-2 font-medium text-gray-200">
              Email (optional)
            </label>
            <input
              id="email"
              type="email"
              class="w-full p-3 rounded-md bg-white text-black border border-gray-200"
            />
          </div>

          <div class="flex gap-4">
            <button
              type="button"
              id="backBtn"
              class="flex-1 bg-gray-600 p-3 rounded-lg hover:opacity-90 transition"
            >
              Back
            </button>

            <button
              type="submit"
              class="flex-1 bg-[#0a60a7] p-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Request Quote
            </button>
          </div>

        </div>

      </form>
    </section>
  `;
}
