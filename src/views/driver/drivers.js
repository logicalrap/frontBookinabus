export default function Drivers(drivers = []) {
  const recommendedDrivers = drivers.slice(0, 8);
  const otherDrivers = drivers.slice(3);

  return `
    <section class="app-page flex flex-col space-y-6 pb-20 relative">

      <!-- Header -->
      <header class="text-center mb-4">
        <h2 class="text-2xl font-semibold">Bus Drivers</h2>
        <p class="mt-2 text-gray-200">Our top recommended drivers for your trip</p>
      </header>

      <!-- Recommended Drivers -->
      <div class="space-y-4">
        ${recommendedDrivers
          .map(
            driver => `
          <div class="bg-white text-black rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 flex items-center justify-between gap-4">

            <!-- Driver Info -->
            <div class="flex-1">
              <h3 class="text-lg font-medium">${driver.name}</h3>
              <p class="text-sm">${driver.email}</p>
              <span class="mt-2 inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Recommended</span>
            </div>

            <!-- Driver Image -->
            <div class="w-16 h-16 flex-shrink-0">
              <img 
                src="${driver.photo || 'https://via.placeholder.com/64'}" 
                alt="${driver.name}" 
                class="w-16 h-16 rounded-full object-cover border border-gray-200"
              />
            </div>

          </div>
        `
          )
          .join("")}
      </div>

      <!-- Other drivers note: full-width mobile app banner -->
      ${otherDrivers.length > 0 ? `
        <div class="fixed bottom-0 left-0 right-0 bg-[var(--color-primary)] text-white text-center p-4 font-medium">
          Other drivers will contact you shortly
        </div>
      ` : ''}
      
    </section>
  `;
}






