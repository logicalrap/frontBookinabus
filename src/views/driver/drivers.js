export default function Drivers() {
  return `
    <section class="app-page flex flex-col space-y-6 pb-20 relative">

      <!-- Header -->
      <header class="text-center mb-4">
        <h2 class="text-2xl font-semibold">Bus Drivers</h2>
        <p class="mt-2 text-gray-200">Our top recommended drivers for your trip</p>
      </header>

      <!-- Static Featured Driver -->
      <div
        class="relative bg-white text-black rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 flex items-center justify-between gap-4"
      >
        <a href="#/profile" aria-label="View Mike Tembo profile" class="absolute inset-0 rounded-lg"></a>
        <div class="flex-1">
          <h3 class="text-lg font-medium relative z-10">Mike Tembo</h3>
          <span class="mt-2 inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Featured</span>
        </div>
        <div class="flex items-center gap-3 relative z-10">
          <a href="tel:+260771094845" class="shrink-0 px-4 py-2 rounded-lg font-semibold btn-accent transition relative z-20">Call</a>
          <div class="w-16 h-16 flex-shrink-0 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-base font-semibold">
            MT
          </div>
        </div>
      </div>

      <div class="fixed left-4 right-4 bottom-24 z-30 mx-auto max-w-md rounded-xl border border-white/25 bg-black/30 backdrop-blur-md px-4 py-3 text-center text-sm font-medium text-white shadow-lg">
        Other drivers will contact you shortly.
      </div>
      
    </section>
  `;
}






