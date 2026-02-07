export default function DriverProfile() {
  const driver = {
    name: "Samuel Adeyemi",
    role: "Lead Event Driver",
    license: "LIC-9021-NA",
    phone: "+234 803 555 2110",
    email: "samuel.adeyemi@bookinabus.com",
    location: "Lagos, Nigeria"
  };

  const vehicle = {
    number: "BUS-2241",
    type: "Luxury Coach",
    capacity: "56 seats",
    plate: "LND 542 AZ"
  };

  return `
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">
      <header class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-2xl font-semibold">Driver Profile</h2>
          <p class="mt-2 text-gray-200">Keep your details accurate for fast bookings.</p>
        </div>
        <button class="px-4 py-2 rounded-lg font-semibold btn-primary transition">Edit Profile</button>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
        <div class="space-y-5">
          <div class="flex items-center gap-4 bg-white/10 rounded-2xl p-5">
            <div class="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-semibold">
              SA
            </div>
            <div>
              <div class="text-xl font-semibold">${driver.name}</div>
              <div class="text-sm text-gray-200">${driver.role}</div>
              <div class="text-sm text-gray-200">${driver.location}</div>
            </div>
          </div>

          <div class="bg-white/10 rounded-2xl p-5 space-y-3">
            <h3 class="text-lg font-semibold">Driver Info</h3>
            <div class="text-sm text-gray-100 space-y-2">
              <div><span class="font-semibold">License:</span> ${driver.license}</div>
              <div><span class="font-semibold">Contact:</span> ${driver.phone}</div>
              <div><span class="font-semibold">Email:</span> ${driver.email}</div>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <div class="bg-white/10 rounded-2xl p-5 space-y-3">
            <h3 class="text-lg font-semibold">Vehicle Info</h3>
            <div class="text-sm text-gray-100 space-y-2">
              <div><span class="font-semibold">Bus Number:</span> ${vehicle.number}</div>
              <div><span class="font-semibold">Type:</span> ${vehicle.type}</div>
              <div><span class="font-semibold">Capacity:</span> ${vehicle.capacity}</div>
              <div><span class="font-semibold">Plate:</span> ${vehicle.plate}</div>
            </div>
          </div>

          <div class="bg-white/10 rounded-2xl p-5 space-y-3">
            <h3 class="text-lg font-semibold">Status</h3>
            <div class="flex items-center gap-3">
              <button class="flex-1 px-3 py-2 rounded-lg font-semibold btn-accent">Available</button>
              <button class="flex-1 px-3 py-2 rounded-lg bg-white/15 text-white/80">Off Duty</button>
            </div>
            <p class="text-xs text-gray-200">Toggle your availability so dispatch knows when to assign trips.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
