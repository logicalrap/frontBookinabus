import { bookingRequests } from "../../data/bookingRequests.js";

export default function SendQuote(requestId) {
  const booking = bookingRequests.find((item) => item.id === requestId);
  const driverPhone = "+234 803 555 2110";

  if (!booking) {
    return `
      <section class="app-page space-y-6">
        <div class="bg-white text-black rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold">Quote request not found</h2>
          <p class="mt-2 text-sm text-gray-600">We could not find a booking for ${requestId}.</p>
          <a class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-action)]" href="#/driver-dashboard">
            Back to dashboard
          </a>
        </div>
      </section>
    `;
  }

  return `
    <section class="app-page space-y-6">
      <div class="bg-white text-black rounded-2xl shadow-lg p-6 space-y-6">
        <header class="space-y-2">
          <p class="text-xs uppercase tracking-widest text-[var(--color-primary-action)] font-semibold">Send Quote</p>
          <h2 class="text-2xl font-semibold">${booking.eventType}</h2>
          <p class="text-sm text-gray-500">Request ID: ${booking.id}</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span class="font-semibold">Customer:</span> ${booking.customer}</div>
          <div><span class="font-semibold">Passengers:</span> ${booking.passengers}</div>
          <div><span class="font-semibold">Pickup:</span> ${booking.pickup}</div>
          <div><span class="font-semibold">Drop-off:</span> ${booking.dropoff}</div>
          <div><span class="font-semibold">Date:</span> ${booking.date}</div>
          <div><span class="font-semibold">Time:</span> ${booking.time}</div>
        </div>

        <form class="space-y-5">
          <div class="space-y-3">
            <p class="text-sm font-semibold text-gray-700">Pricing Type</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                id="priceTypeOne"
                type="button"
                class="rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold bg-[var(--color-primary-action)]/10 ring-2 ring-[var(--color-primary-action)]"
                onclick="
                  document.getElementById('pricingType').value='oneway';
                  document.getElementById('price-oneway').classList.remove('hidden');
                  document.getElementById('price-return').classList.add('hidden');
                  document.getElementById('price-full').classList.add('hidden');
                  document.getElementById('priceTypeOne').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold bg-[var(--color-primary-action)]/10 ring-2 ring-[var(--color-primary-action)]';
                  document.getElementById('priceTypeReturn').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60';
                  document.getElementById('priceTypeFull').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60';
                  document.getElementById('previewType').textContent='One Way';
                  document.getElementById('previewPrice').textContent=document.getElementById('totalPrice').value || '0';
                "
              >
                One Way
                <div class="text-xs text-gray-500 font-normal">Single trip price</div>
              </button>
              <button
                id="priceTypeReturn"
                type="button"
                class="rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60"
                onclick="
                  document.getElementById('pricingType').value='return';
                  document.getElementById('price-oneway').classList.add('hidden');
                  document.getElementById('price-return').classList.remove('hidden');
                  document.getElementById('price-full').classList.add('hidden');
                  document.getElementById('priceTypeOne').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60';
                  document.getElementById('priceTypeReturn').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold bg-[var(--color-primary-action)]/10 ring-2 ring-[var(--color-primary-action)]';
                  document.getElementById('priceTypeFull').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60';
                  document.getElementById('previewType').textContent='Return (Two-way)';
                  document.getElementById('previewPrice').textContent=document.getElementById('returnTotal').value || '0';
                "
              >
                Return (Two-way)
                <div class="text-xs text-gray-500 font-normal">Going + return</div>
              </button>
              <button
                id="priceTypeFull"
                type="button"
                class="rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60"
                onclick="
                  document.getElementById('pricingType').value='full';
                  document.getElementById('price-oneway').classList.add('hidden');
                  document.getElementById('price-return').classList.add('hidden');
                  document.getElementById('price-full').classList.remove('hidden');
                  document.getElementById('priceTypeOne').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60';
                  document.getElementById('priceTypeReturn').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold hover:border-[var(--color-primary-action)]/60';
                  document.getElementById('priceTypeFull').className='rounded-xl border border-gray-200 p-3 text-left text-sm font-semibold bg-[var(--color-primary-action)]/10 ring-2 ring-[var(--color-primary-action)]';
                  document.getElementById('previewType').textContent='Full Trip Price';
                  document.getElementById('previewPrice').textContent=document.getElementById('fullTotal').value || '0';
                "
              >
                Full Trip Price
                <div class="text-xs text-gray-500 font-normal">Total package</div>
              </button>
            </div>
          </div>

          <input id="pricingType" type="hidden" value="oneway" />

          <div id="price-oneway" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="space-y-2 text-sm font-semibold">
              One Way Price (NGN)
              <input
                id="onewayPrice"
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)]"
                type="number"
                placeholder="e.g. 250000"
                oninput="
                  document.getElementById('totalPrice').value = Number(this.value || 0).toLocaleString();
                  document.getElementById('previewPrice').textContent = document.getElementById('totalPrice').value || '0';
                "
              />
            </label>
            <label class="space-y-2 text-sm font-semibold">
              Total Price (NGN)
              <input
                id="totalPrice"
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-100"
                type="text"
                value="0"
                readonly
              />
            </label>
          </div>

          <div id="price-return" class="hidden grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="space-y-2 text-sm font-semibold">
              Going Price (NGN)
              <input
                id="returnGoing"
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)]"
                type="number"
                placeholder="e.g. 180000"
                oninput="
                  document.getElementById('returnTotal').value = (Number(this.value || 0) + Number(document.getElementById('returnBack').value || 0)).toLocaleString();
                  document.getElementById('previewPrice').textContent = document.getElementById('returnTotal').value || '0';
                "
              />
            </label>
            <label class="space-y-2 text-sm font-semibold">
              Return Price (NGN)
              <input
                id="returnBack"
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)]"
                type="number"
                placeholder="e.g. 180000"
                oninput="
                  document.getElementById('returnTotal').value = (Number(this.value || 0) + Number(document.getElementById('returnGoing').value || 0)).toLocaleString();
                  document.getElementById('previewPrice').textContent = document.getElementById('returnTotal').value || '0';
                "
              />
            </label>
            <label class="space-y-2 text-sm font-semibold">
              Total Price (NGN)
              <input
                id="returnTotal"
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-100"
                type="text"
                value="0"
                readonly
              />
            </label>
          </div>

          <div id="price-full" class="hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="space-y-2 text-sm font-semibold">
              Full Trip Price (NGN)
              <input
                id="fullPrice"
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)]"
                type="number"
                placeholder="e.g. 420000"
                oninput="
                  document.getElementById('fullTotal').value = Number(this.value || 0).toLocaleString();
                  document.getElementById('previewPrice').textContent = document.getElementById('fullTotal').value || '0';
                "
              />
            </label>
            <label class="space-y-2 text-sm font-semibold">
              Total Price (NGN)
              <input
                id="fullTotal"
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-100"
                type="text"
                value="0"
                readonly
              />
            </label>
          </div>

          <div class="flex flex-wrap items-center gap-4 text-sm">
            <label class="inline-flex items-center gap-2">
              <input
                id="negotiable"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-[var(--color-primary-action)] focus:ring-[var(--color-primary-action)]"
                onchange="document.getElementById('previewNegotiable').textContent = this.checked ? 'Yes' : 'No';"
              />
              <span class="font-semibold">Price is negotiable</span>
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                id="availability"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-[var(--color-primary-action)] focus:ring-[var(--color-primary-action)]"
                onchange="document.getElementById('previewAvailability').textContent = this.checked ? 'Confirmed' : 'Not confirmed';"
              />
              <span class="font-semibold">I am available for this date and time</span>
            </label>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="space-y-2 text-sm font-semibold">
              Driver Phone
              <input
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-100"
                type="tel"
                value="${driverPhone}"
                readonly
              />
            </label>
            <label class="space-y-2 text-sm font-semibold">
              Vehicle Type
              <select
                class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)]"
                onchange="document.getElementById('previewVehicle').textContent = this.value;"
              >
                <option>Executive Bus</option>
                <option>Standard Bus</option>
                <option>Mini Bus</option>
                <option>Luxury Coach</option>
              </select>
            </label>
          </div>

          <label class="space-y-2 text-sm font-semibold">
            Short Message
            <textarea
              class="min-h-[110px] w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-action)]"
              placeholder="Add a quick note for the customer..."
              oninput="document.getElementById('previewMessage').textContent = this.value ? this.value : 'No message';"
            ></textarea>
          </label>

          <div class="flex items-center justify-between">
            <p class="text-sm font-semibold text-gray-700">Quote Preview</p>
            <button
              type="button"
              class="px-3 py-2 rounded-lg text-sm font-semibold btn-accent"
              onclick="document.getElementById('quotePreview').classList.toggle('hidden')"
            >
              Preview Quote
            </button>
          </div>

          <div id="quotePreview" class="hidden rounded-2xl border border-[var(--color-primary-action)]/30 bg-[var(--color-primary-action)]/5 p-4">
            <div class="flex items-center justify-between">
              <p class="text-xs uppercase tracking-widest text-[var(--color-primary-action)] font-semibold">Quote Preview</p>
              <span class="text-xs font-semibold text-gray-500">Auto-updates</span>
            </div>
            <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div><span class="font-semibold">Pricing type:</span> <span id="previewType">One Way</span></div>
              <div><span class="font-semibold">Total price:</span> ?<span id="previewPrice">0</span></div>
              <div><span class="font-semibold">Negotiable:</span> <span id="previewNegotiable">No</span></div>
              <div><span class="font-semibold">Availability:</span> <span id="previewAvailability">Not confirmed</span></div>
              <div><span class="font-semibold">Driver phone:</span> <span id="previewPhone">${driverPhone}</span></div>
              <div><span class="font-semibold">Vehicle type:</span> <span id="previewVehicle">Executive Bus</span></div>
              <div class="md:col-span-2"><span class="font-semibold">Message:</span> <span id="previewMessage">No message</span></div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <a class="flex-1 p-3 rounded-lg font-semibold text-center bg-gray-200 text-gray-800 hover:bg-gray-300 transition" href="#/booking/${booking.id}">
              Back
            </a>
            <button class="flex-1 p-3 rounded-lg font-semibold btn-accent transition" type="button">
              Send Quote Now
            </button>
          </div>
        </form>
      </div>
    </section>
  `;
}






