(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function T(){const t=(window.location.hash||"").split("?")[1]||"";return new URLSearchParams(t).get("role")||"user"}function E(){const e=T();return`
    <section class="max-w-[420px] mx-auto mt-16 p-6 app-card">

      <!-- Header -->
      <header class="text-center mb-8">
        <h2 class="text-2xl font-semibold">${e==="driver"?"Driver Login":"User Login"}</h2>
        <p class="mt-2 text-sm text-gray-200">
          ${e==="driver"?"Login to manage trip requests and quotes.":"Login to book and manage your trips."}
        </p>
      </header>

      <!-- Login Form -->
      <form id="loginForm" class="space-y-5">

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            class="w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-200">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            class="w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          id="login-btn"
          class="w-full p-3 rounded-lg font-medium transition hover:opacity-90 btn-primary"
        >
          Login
        </button>

      </form>

      <!-- Footer -->
      <div class="mt-6 text-center text-sm text-gray-200">
        <p>
          Don’t have access?
          <span class="underline cursor-pointer">
            Contact admin
          </span>
        </p>
      </div>

    </section>
  `}function g(){return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">


      <form id="bookingForm" class="space-y-6">

        <!-- STEP 1 -->
        <div class="step block" data-step="1">
<h3 class="bg-white/10 px-4 py-2 rounded-md mb-6 text-lg font-medium text-[var(--color-secondary-heading)]">
  Trip Details
</h3>



          <!-- Event Type -->
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

          <!-- Pickup & Drop-off -->
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
            class="w-full p-3 rounded-lg font-medium transition hover:opacity-90 btn-accent"
          >
            Next
          </button>

        </div>

        <!-- STEP 2 -->
        <div class="step hidden" data-step="2">

          <h3 class="bg-white/10 px-4 py-2 rounded-md mb-6 text-lg font-medium text-[var(--color-secondary-heading)]">
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
              class="flex-1 p-3 rounded-lg font-medium transition hover:opacity-90 btn-accent"
            >
              Back
            </button>

            <button
              type="submit"
              class="flex-1 p-3 rounded-lg font-medium transition hover:opacity-90 btn-accent"
            >
              Request Quote
            </button>
          </div>

        </div>

      </form>
    </section>
  `}function x(e=[]){const t=e.slice(0,8),s=e.slice(3);return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card flex flex-col space-y-6 pb-20 relative">

      <!-- Header -->
      <header class="text-center mb-4">
        <h2 class="text-2xl font-semibold">Bus Drivers</h2>
        <p class="mt-2 text-gray-200">Our top recommended drivers for your trip</p>
      </header>

      <!-- Recommended Drivers -->
      <div class="space-y-4">
        ${t.map(i=>`
          <div class="bg-white text-black rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 flex items-center justify-between gap-4">

            <!-- Driver Info -->
            <div class="flex-1">
              <h3 class="text-lg font-medium">${i.name}</h3>
              <p class="text-sm">${i.email}</p>
              <span class="mt-2 inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Recommended</span>
            </div>

            <!-- Driver Image -->
            <div class="w-16 h-16 flex-shrink-0">
              <img 
                src="${i.photo||"https://via.placeholder.com/64"}" 
                alt="${i.name}" 
                class="w-16 h-16 rounded-full object-cover border border-gray-200"
              />
            </div>

          </div>
        `).join("")}
      </div>

      <!-- Other drivers note: fixed at bottom but aligned with app-card -->
      ${s.length>0?`
        <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-[900px] w-[90%] bg-[var(--color-primary)] text-white text-center p-4 font-medium rounded-lg shadow-md">
          Other drivers will contact you shortly
        </div>
      `:""}
      
    </section>
  `}const u=[{id:"REQ-2041",customer:"Amina Yusuf",eventType:"Wedding",date:"Feb 16, 2026",time:"8:30 AM",pickup:"Ikeja, Lagos",dropoff:"Lekki Phase 1",passengers:42,phone:"+234 803 552 9102",status:"Awaiting Quote"},{id:"REQ-2042",customer:"David Okoye",eventType:"Corporate Event",date:"Feb 18, 2026",time:"6:00 AM",pickup:"Maryland, Lagos",dropoff:"Victoria Island",passengers:30,phone:"+234 812 771 4439",status:"Pending Driver"},{id:"REQ-2043",customer:"Grace Bello",eventType:"Church Program",date:"Feb 20, 2026",time:"7:15 AM",pickup:"Surulere, Lagos",dropoff:"Ikeja, Lagos",passengers:55,phone:"+234 810 663 1180",status:"Awaiting Quote"},{id:"REQ-2044",customer:"Samuel Ade",eventType:"School Trip",date:"Feb 22, 2026",time:"9:00 AM",pickup:"Yaba, Lagos",dropoff:"Badagry",passengers:48,phone:"+234 708 420 9921",status:"Urgent Review"}];function P(){try{return localStorage.getItem("appRole")||"customer"}catch{return"customer"}}function r(){const t=P()==="driver";return`
    <div class="sticky top-4 z-[999] self-start ">
      <details class="relative z-[60]">
        <summary class="list-none cursor-pointer inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 hover:bg-white/25 transition ring-1 ring-white/20 shadow-lg">
          <span class="grid grid-cols-2 gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
          </span>
        </summary>
        <div class="absolute left-0 mt-3 w-52 rounded-2xl menu-accent shadow-xl overflow-hidden z-[60]">
          <a class="block px-4 py-3 text-sm font-medium transition" href="${t?"#/profile":"#/customer-profile"}">Profile</a>
          <a class="block px-4 py-3 text-sm font-medium transition" href="${t?"#/notifications":"#/customer-notifications"}">Notifications</a>
          <a class="block px-4 py-3 text-sm font-medium transition" href="${t?"#/my-trips":"#/my-bookings"}">My ${t?"Trips":"Bookings"}</a>
        </div>
      </details>
    </div>
  `}function I(){return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">

      <div class="flex items-start gap-4">
        ${r()}

        <div class="flex-1 space-y-4">
          <header>
            <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Driver Dashboard</h2>
            <p class="mt-2 text-gray-200">Incoming trip requests waiting for action</p>
          </header>

          <div class="space-y-4">
            ${u.map(e=>`
          <a class="block bg-white text-black rounded-lg shadow-md p-5 flex flex-col gap-4 transition hover:shadow-lg border border-transparent hover:border-[var(--color-primary-action)]"
             href="#/booking/${e.id}">
            <div class="flex items-center justify-between">
              <div class="text-sm font-semibold text-blue-700">${e.id}</div>
              <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                ${e.eventType}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div><span class="font-semibold">Customer:</span> ${e.customer}</div>
              <div><span class="font-semibold">Passengers:</span> ${e.passengers}</div>
              <div><span class="font-semibold">Pickup:</span> ${e.pickup}</div>
              <div><span class="font-semibold">Drop-off:</span> ${e.dropoff}</div>
              <div><span class="font-semibold">Date:</span> ${e.date}</div>
              <div><span class="font-semibold">Time:</span> ${e.time}</div>
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
        `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function C(){const e={name:"Samuel Adeyemi",role:"Lead Event Driver",license:"LIC-9021-NA",phone:"+234 803 555 2110",email:"samuel.adeyemi@bookinabus.com",location:"Lagos, Nigeria"},t={number:"BUS-2241",type:"Luxury Coach",capacity:"56 seats",plate:"LND 542 AZ"};return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4 min-w-0">
        ${r()}

        <div class="flex-1 space-y-6 min-w-0">
          <header class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Driver Profile</h2>
              <p class="mt-2 text-gray-200">Keep your details accurate for fast bookings.</p>
            </div>
            <button class="px-4 py-2 rounded-lg font-semibold btn-primary transition">Edit Profile</button>
          </header>

          <div class="space-y-5">
            <div class="flex items-center gap-4 bg-white/10 rounded-2xl p-5 min-w-0">
              <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-semibold">
                SA
              </div>
              <div class="min-w-0">
                <div class="text-xl font-semibold">${e.name}</div>
                <div class="text-sm text-gray-200 break-words">${e.role}</div>
                <div class="text-sm text-gray-200 break-words">${e.location}</div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="bg-white/10 rounded-2xl p-5 space-y-3">
                <h3 class="text-lg font-semibold">Driver Info</h3>
                <div class="text-sm text-gray-100 space-y-2">
                  <div><span class="font-semibold">License:</span> ${e.license}</div>
                  <div><span class="font-semibold">Contact:</span> ${e.phone}</div>
                  <div class="break-words"><span class="font-semibold">Email:</span> ${e.email}</div>
                </div>
              </div>

              <div class="bg-white/10 rounded-2xl p-5 space-y-3">
                <h3 class="text-lg font-semibold">Vehicle Info</h3>
                <div class="text-sm text-gray-100 space-y-2">
                  <div><span class="font-semibold">Bus Number:</span> ${t.number}</div>
                  <div><span class="font-semibold">Type:</span> ${t.type}</div>
                  <div><span class="font-semibold">Capacity:</span> ${t.capacity}</div>
                  <div><span class="font-semibold">Plate:</span> ${t.plate}</div>
                </div>
              </div>
            </div>

            <div class="bg-white/10 rounded-2xl p-5 space-y-3">
              <h3 class="text-lg font-semibold">Status</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button class="w-full px-3 py-2 rounded-lg font-semibold btn-accent text-center text-sm">Available</button>
                <button class="w-full px-3 py-2 rounded-lg bg-white/15 text-white/80 text-center text-sm">Off Duty</button>
              </div>
              <p class="text-xs text-gray-200">Toggle your availability so dispatch knows when to assign trips.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function N(e){const t=u.find(s=>s.id===e);return t?`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">
      <div class="bg-white text-black rounded-2xl shadow-lg p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-xs uppercase tracking-widest text-[var(--color-primary-action)] font-semibold">Booking Details</p>
            <h2 class="text-2xl font-semibold">${t.eventType}</h2>
            <p class="text-sm text-gray-500">Request ID: ${t.id}</p>
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-action)] text-white font-semibold text-xs shadow-sm ring-2 ring-[var(--color-primary-action)]/40">
            <span class="w-2 h-2 rounded-full bg-white"></span>
            ${t.status}
          </div>
        </div>

        <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span class="font-semibold">Customer:</span> ${t.customer}</div>
          <div><span class="font-semibold">Passengers:</span> ${t.passengers}</div>
          <div><span class="font-semibold">Pickup:</span> ${t.pickup}</div>
          <div><span class="font-semibold">Drop-off:</span> ${t.dropoff}</div>
          <div><span class="font-semibold">Date:</span> ${t.date}</div>
          <div><span class="font-semibold">Time:</span> ${t.time}</div>
        </div>

        <div class="mt-6 p-4 rounded-xl border border-[var(--color-primary-action)]/30 bg-[var(--color-primary)]/5">
          <p class="text-xs uppercase tracking-widest text-[var(--color-primary-action)] font-semibold">Customer Details</p>
          <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><span class="font-semibold">Customer name:</span> ${t.customer}</div>
            <div><span class="font-semibold">Phone number:</span> ${t.phone}</div>
          </div>
        </div>

        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <button class="flex-1 p-3 rounded-lg font-semibold btn-accent transition">
            Call Customer
          </button>
          <a class="flex-1 p-3 rounded-lg font-semibold btn-accent transition text-center" href="#/send-quote/${t.id}">
            Send Quote Now
          </a>
        </div>
      </div>
    </section>
  `:`
      <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">
        <div class="bg-white text-black rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold">Booking not found</h2>
          <p class="mt-2 text-sm text-gray-600">We could not find a booking for ${e}.</p>
          <a class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-action)]" href="#/driver-dashboard">
            Back to dashboard
          </a>
        </div>
      </section>
    `}function L(e){const t=u.find(i=>i.id===e),s="+234 803 555 2110";return t?`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">
      <div class="bg-white text-black rounded-2xl shadow-lg p-6 space-y-6">
        <header class="space-y-2">
          <p class="text-xs uppercase tracking-widest text-[var(--color-primary-action)] font-semibold">Send Quote</p>
          <h2 class="text-2xl font-semibold">${t.eventType}</h2>
          <p class="text-sm text-gray-500">Request ID: ${t.id}</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span class="font-semibold">Customer:</span> ${t.customer}</div>
          <div><span class="font-semibold">Passengers:</span> ${t.passengers}</div>
          <div><span class="font-semibold">Pickup:</span> ${t.pickup}</div>
          <div><span class="font-semibold">Drop-off:</span> ${t.dropoff}</div>
          <div><span class="font-semibold">Date:</span> ${t.date}</div>
          <div><span class="font-semibold">Time:</span> ${t.time}</div>
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
                value="${s}"
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
              <div><span class="font-semibold">Driver phone:</span> <span id="previewPhone">${s}</span></div>
              <div><span class="font-semibold">Vehicle type:</span> <span id="previewVehicle">Executive Bus</span></div>
              <div class="md:col-span-2"><span class="font-semibold">Message:</span> <span id="previewMessage">No message</span></div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <a class="flex-1 p-3 rounded-lg font-semibold text-center bg-gray-200 text-gray-800 hover:bg-gray-300 transition" href="#/booking/${t.id}">
              Back
            </a>
            <button class="flex-1 p-3 rounded-lg font-semibold btn-accent transition" type="button">
              Send Quote Now
            </button>
          </div>
        </form>
      </div>
    </section>
  `:`
      <section class="max-w-[900px] mx-auto mt-8 p-6 app-card space-y-6">
        <div class="bg-white text-black rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold">Quote request not found</h2>
          <p class="mt-2 text-sm text-gray-600">We could not find a booking for ${e}.</p>
          <a class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-action)]" href="#/driver-dashboard">
            Back to dashboard
          </a>
        </div>
      </section>
    `}function j(){const e=[{id:"NTF-901",title:"New booking request",message:"Amina Yusuf requested a Wedding trip for Feb 16, 2026 at 8:30 AM.",time:"2 mins ago",type:"new"},{id:"NTF-902",title:"Quote viewed",message:"Your quote for REQ-2042 was opened by the customer.",time:"35 mins ago",type:"info"},{id:"NTF-903",title:"Quote accepted",message:"David Okoye accepted your quote for REQ-2042.",time:"1 hour ago",type:"success"},{id:"NTF-904",title:"Trip reminder",message:"Upcoming trip: Church Program on Feb 20, 2026 at 7:15 AM.",time:"Yesterday",type:"reminder"}],t={new:"bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",info:"bg-blue-100 text-blue-700",success:"bg-emerald-100 text-emerald-700",reminder:"bg-amber-100 text-amber-700"};return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${r()}

        <div class="flex-1 space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Notifications</h2>
              <p class="mt-2 text-gray-200">Stay updated on new bookings and quote activity.</p>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold  transition text-center" href="#/messages">
                Messages
              </a>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-2 rounded-lg font-semibold btn-accent">Mark all as read</button>
          </div>

          <div class="space-y-4 mt-2">
            ${e.map(s=>`
            <div class="bg-white text-black rounded-2xl shadow-md p-5 flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${t[s.type]}">
                  ${s.title}
                </span>
                <span class="text-xs text-gray-500">${s.time}</span>
              </div>
              <p class="text-sm text-gray-700">${s.message}</p>
            </div>
          `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function S(){const e=[{id:"MSG-301",name:"Dispatch Team",preview:"Your driver assignment for REQ-2041 is confirmed.",time:"3 mins ago",unread:!0},{id:"MSG-302",name:"Amina Yusuf",preview:"Please confirm pickup at Ikeja by 8:15 AM.",time:"25 mins ago",unread:!0},{id:"MSG-303",name:"David Okoye",preview:"Thanks for the quote. Is there a discount for return trips?",time:"1 hr ago",unread:!1},{id:"MSG-304",name:"Grace Bello",preview:"We may adjust the pickup time by 15 minutes.",time:"Yesterday",unread:!1}];return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${r()}

        <div class="flex-1 space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Messages</h2>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg ">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold  transition text-center" href="#/notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/messages">
                Messages
              </a>
            </div>
          </div>

          <div class="space-y-4 mt-2">
            ${e.map(t=>`
            <div class="bg-white text-black rounded-2xl shadow-md p-5 flex items-start gap-4">
              <div class="w-11 h-11 rounded-full bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)] flex items-center justify-center font-semibold">
                ${t.name.split(" ").slice(0,2).map(s=>s[0]).join("")}
              </div>
              <div class="flex-1 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-semibold">${t.name}</div>
                  <div class="text-xs text-gray-500">${t.time}</div>
                </div>
                <p class="text-sm text-gray-600">${t.preview}</p>
              </div>
              ${t.unread?'<span class="mt-1 h-2.5 w-2.5 rounded-full btn-accent"></span>':""}
            </div>
          `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function b(){const e=[{id:"TRP-501",event:"Wedding",customer:"Amina Yusuf",date:"Feb 16, 2026",time:"8:30 AM",pickup:"Ikeja, Lagos",dropoff:"Lekki Phase 1",status:"Upcoming"},{id:"TRP-502",event:"Corporate Event",customer:"David Okoye",date:"Feb 18, 2026",time:"6:00 AM",pickup:"Maryland, Lagos",dropoff:"Victoria Island",status:"Confirmed"},{id:"TRP-503",event:"Church Program",customer:"Grace Bello",date:"Feb 20, 2026",time:"7:15 AM",pickup:"Surulere, Lagos",dropoff:"Ikeja, Lagos",status:"Upcoming"},{id:"TRP-504",event:"School Trip",customer:"Samuel Ade",date:"Jan 29, 2026",time:"9:00 AM",pickup:"Yaba, Lagos",dropoff:"Badagry",status:"Completed"}],t={Upcoming:"bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",Confirmed:"bg-emerald-100 text-emerald-700",Completed:"bg-gray-100 text-gray-700"},s=i=>i.length?i.map(a=>`
          <div class="bg-white text-black rounded-2xl shadow-md p-5 space-y-3">
            <div class="flex items-center justify-between">
              <div class="text-sm font-semibold text-gray-500">${a.id}</div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${t[a.status]||"bg-gray-100 text-gray-700"}">
                ${a.status}
              </span>
            </div>
            <div class="text-lg font-semibold">${a.event}</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div><span class="font-semibold">Customer:</span> ${a.customer}</div>
              <div><span class="font-semibold">Date:</span> ${a.date}</div>
              <div><span class="font-semibold">Time:</span> ${a.time}</div>
              <div><span class="font-semibold">Pickup:</span> ${a.pickup}</div>
              <div><span class="font-semibold">Drop-off:</span> ${a.dropoff}</div>
            </div>
          </div>
        `).join(""):`
        <div class="bg-white text-black rounded-2xl shadow-md p-5 text-sm text-gray-600">
          No trips available yet.
        </div>
      `;return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${r()}

        <div class="flex-1 space-y-6">
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
            ${s(e.filter(i=>i.status==="Upcoming"))}
          </div>

          <div data-trip-section="confirmed" class="space-y-4 hidden">
            ${s(e.filter(i=>i.status==="Confirmed"))}
          </div>

          <div data-trip-section="cancelled" class="space-y-4 hidden">
            ${s(e.filter(i=>i.status==="Cancelled"))}
          </div>

          <div data-trip-section="history" class="space-y-4 hidden">
            ${s(e.filter(i=>i.status==="Completed"))}
          </div>
        </div>
      </div>
    </section>
  `}function D(){const e={name:"Amina Yusuf",phone:"+260 97 123 4567",email:"amina.yusuf@example.com",nrc:"123456/78/1"};return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4 min-w-0">
        ${r()}

        <div class="flex-1 space-y-6 min-w-0">
          <header class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Customer Profile</h2>
              <p class="mt-2 text-gray-200">Keep your details accurate for quick bookings.</p>
            </div>
            <button class="px-4 py-2 rounded-lg font-semibold btn-primary transition">Edit Profile</button>
          </header>

          <div class="space-y-5">
            <div class="flex items-center gap-4 bg-white/10 rounded-2xl p-5 min-w-0">
              <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-semibold">
                AY
              </div>
              <div class="min-w-0">
                <div class="text-xl font-semibold">${e.name}</div>
                <div class="text-sm text-gray-200">Customer</div>
                <div class="text-sm text-gray-200 break-words">Zambia</div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="bg-white/10 rounded-2xl p-5 space-y-3">
                <h3 class="text-lg font-semibold">Contact Info</h3>
                <div class="text-sm text-gray-100 space-y-2">
                  <div><span class="font-semibold">Full name:</span> ${e.name}</div>
                  <div><span class="font-semibold">Phone number:</span> ${e.phone}</div>
                  <div class="break-words"><span class="font-semibold">Email:</span> ${e.email}</div>
                </div>
              </div>

              <div class="bg-white/10 rounded-2xl p-5 space-y-3">
                <h3 class="text-lg font-semibold">Identification</h3>
                <div class="text-sm text-gray-100 space-y-2">
                  <div><span class="font-semibold">NRC:</span> ${e.nrc}</div>
                  <div><span class="font-semibold">Profile picture:</span> Optional</div>
                </div>
              </div>
            </div>

            <div class="bg-white/10 rounded-2xl p-5 space-y-3">
              <h3 class="text-lg font-semibold">Important</h3>
              <p class="text-sm text-gray-200">
                Phone number is required for Zambia customers to confirm bookings quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function A(){const e=[{id:"CNTF-201",title:"Booking confirmed",message:"Your trip for Feb 16, 2026 has been confirmed.",time:"5 mins ago",type:"success"},{id:"CNTF-202",title:"Quote received",message:"A driver sent a quote for your wedding booking.",time:"25 mins ago",type:"new"},{id:"CNTF-203",title:"Payment reminder",message:"Please complete payment to secure your booking.",time:"1 hour ago",type:"reminder"}],t={new:"bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",success:"bg-emerald-100 text-emerald-700",reminder:"bg-amber-100 text-amber-700"};return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${r()}

        <div class="flex-1 space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Notifications</h2>
              <p class="mt-2 text-gray-200">Stay updated on your bookings and quotes.</p>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg rounded-2xl">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-messages">
                Messages
              </a>
            </div>
          </div>

          <div class="space-y-4 mt-2">
            ${e.map(s=>`
            <div class="bg-white text-black rounded-2xl shadow-md p-5 flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${t[s.type]}">
                  ${s.title}
                </span>
                <span class="text-xs text-gray-500">${s.time}</span>
              </div>
              <p class="text-sm text-gray-700">${s.message}</p>
            </div>
          `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function M(){const e=[{id:"CMSG-101",name:"Dispatch Team",preview:"Your driver is on the way to the pickup location.",time:"10 mins ago",unread:!0},{id:"CMSG-102",name:"Assigned Driver",preview:"Please confirm the pickup time.",time:"30 mins ago",unread:!1}];return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${r()}

        <div class="flex-1 space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Messages</h2>
              <p class="mt-2 text-gray-200">Chat with your driver and support.</p>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg rounded-2xl">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-messages">
                Messages
              </a>
            </div>
          </div>

          <div class="space-y-4 mt-2">
            ${e.map(t=>`
            <div class="bg-white text-black rounded-2xl shadow-md p-5 flex items-start gap-4">
              <div class="w-11 h-11 rounded-full bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)] flex items-center justify-center font-semibold">
                ${t.name.split(" ").slice(0,2).map(s=>s[0]).join("")}
              </div>
              <div class="flex-1 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-semibold">${t.name}</div>
                  <div class="text-xs text-gray-500">${t.time}</div>
                </div>
                <p class="text-sm text-gray-600">${t.preview}</p>
              </div>
              ${t.unread?'<span class="mt-1 h-2.5 w-2.5 rounded-full btn-accent"></span>':""}
            </div>
          `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function y(){const e=[{id:"BKG-801",event:"Wedding",date:"Feb 16, 2026",time:"8:30 AM",pickup:"Ikeja, Lagos",dropoff:"Lekki Phase 1",status:"Upcoming"},{id:"BKG-802",event:"Corporate Event",date:"Feb 18, 2026",time:"6:00 AM",pickup:"Maryland, Lagos",dropoff:"Victoria Island",status:"Completed"},{id:"BKG-803",event:"Church Program",date:"Feb 20, 2026",time:"7:15 AM",pickup:"Surulere, Lagos",dropoff:"Ikeja, Lagos",status:"Cancelled"}],t={Upcoming:"bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)]",Completed:"bg-emerald-100 text-emerald-700",Cancelled:"bg-rose-100 text-rose-700"},s=i=>i.length?i.map(a=>`
          <div class="bg-white text-black rounded-2xl shadow-md p-5 space-y-3">
            <div class="flex items-center justify-between">
              <div class="text-sm font-semibold text-gray-500">${a.id}</div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${t[a.status]||"bg-gray-100 text-gray-700"}">
                ${a.status}
              </span>
            </div>
            <div class="text-lg font-semibold">${a.event}</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div><span class="font-semibold">Date:</span> ${a.date}</div>
              <div><span class="font-semibold">Time:</span> ${a.time}</div>
              <div><span class="font-semibold">Pickup:</span> ${a.pickup}</div>
              <div><span class="font-semibold">Drop-off:</span> ${a.dropoff}</div>
            </div>
          </div>
        `).join(""):`
        <div class="bg-white text-black rounded-2xl shadow-md p-5 text-sm text-gray-600">
          No bookings available yet.
        </div>
      `;return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${r()}

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
            ${s(e.filter(i=>i.status==="Upcoming"))}
          </div>

          <div data-trip-section="completed" class="space-y-4 hidden">
            ${s(e.filter(i=>i.status==="Completed"))}
          </div>

          <div data-trip-section="cancelled" class="space-y-4 hidden">
            ${s(e.filter(i=>i.status==="Cancelled"))}
          </div>

          <div data-trip-section="history" class="space-y-4 hidden">
            ${s(e)}
          </div>
        </div>
      </div>
    </section>
  `}const q=void 0;async function F(e){try{const t=await fetch(`${q}/api/bookings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){const s=await t.json();throw new Error(s.message||"Failed to submit booking")}return await t.json()}catch(t){throw console.error("Booking API error:",t),t}}function R(){const e=document.getElementById("bookingForm");if(!e)return;const t=e.querySelectorAll(".step");let s=1;const i=m=>{t.forEach(d=>{d.classList.add("hidden"),d.classList.remove("block")});const c=e.querySelector(`[data-step="${m}"]`);c.classList.remove("hidden"),c.classList.add("block")};i(s);const a=document.getElementById("pickup"),o=document.getElementById("dropoff"),n=e.querySelector("select"),l=document.getElementById("date"),p=document.getElementById("time"),k=document.getElementById("name"),$=document.getElementById("phone"),B=document.getElementById("email");document.getElementById("nextBtn").onclick=()=>{if(!a.value||!o.value){alert("Please fill pickup and drop-off locations");return}s=2,i(s)},document.getElementById("backBtn").onclick=()=>{s=1,i(s)},e.onsubmit=async m=>{m.preventDefault();const c={event_type:n.value,pickup_location:a.value,dropoff_location:o.value,trip_date:l.value,pickup_time:p.value,full_name:k.value,phone:$.value,email:B.value};console.log("Payload sent to API:",c);try{const d=await F(c);console.log("Booking successful:",d),alert("Booking submitted successfully!"),location.hash="#/drivers"}catch(d){alert("Failed to submit booking: "+d.message)}}}function f(){const e=Array.from(document.querySelectorAll("[data-trip-tab]")),t=Array.from(document.querySelectorAll("[data-trip-section]"));if(!e.length||!t.length)return;const s="flex-1 px-4 py-3 rounded-xl font-semibold btn-accent shadow-sm flex items-center justify-center gap-2",i="flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2";function a(n){e.forEach(l=>{const p=l.dataset.tripTab===n;l.className=p?s:i}),t.forEach(l=>{l.classList.toggle("hidden",l.dataset.tripSection!==n)})}e.forEach(n=>{n.addEventListener("click",()=>a(n.dataset.tripTab))});const o=document.querySelector("[data-trip-default]")?.dataset.tripDefault;a(o||e[0].dataset.tripTab)}const v={"/login":E,"/home":g,"/drivers":x,"/driver-dashboard":I,"/profile":C,"/customer-profile":D,"/customer-notifications":A,"/customer-messages":M,"/my-bookings":y,"/notifications":j,"/messages":S,"/my-trips":b};async function O(e){(!e||e==="/")&&(e="/home");const t=["/driver-dashboard","/profile","/notifications","/messages","/my-trips","/drivers"],s=["/home","/customer-profile","/customer-notifications","/customer-messages","/my-bookings"],i=t.some(o=>e===o)||e.startsWith("/booking/")||e.startsWith("/send-quote/"),a=s.some(o=>e===o);try{i?localStorage.setItem("appRole","driver"):a&&localStorage.setItem("appRole","customer")}catch{}if(e.startsWith("/booking/")){const o=e.split("/")[2]||"";return N(o)}if(e.startsWith("/send-quote/")){const o=e.split("/")[2]||"";return L(o)}if(!v[e])return"<h2 class='text-center'>404 – Page not found</h2>";if(e==="/drivers")try{const n=await(await fetch("https://jsonplaceholder.typicode.com/users")).json();return x(n)}catch{return"<p>Failed to load drivers.</p>"}if(e==="/home"){const o=g();return setTimeout(()=>{R()},0),o}if(e==="/my-trips"){const o=b();return setTimeout(()=>{f()},0),o}if(e==="/my-bookings"){const o=y();return setTimeout(()=>{f()},0),o}return v[e]()}function G(e){return`
    <div class="min-h-screen flex justify-center px-4 py-8">

      <div class="w-full max-w-md space-y-6">

        <!-- Top bar -->
        <header class="app-card px-5 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🚌</span>
            <div class="leading-tight">
              <div class="text-lg font-semibold tracking-wide text-white">
                BOOKINABUS
              </div>
              <div class="text-xs uppercase tracking-widest brand-accent">
                Event Transport Booking
              </div>
            </div>
          </div>

          <details class="relative">
            <summary class="list-none cursor-pointer w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-sm hover:bg-white/25 transition">
              👤
            </summary>
            <div class="absolute right-0 mt-3 w-48 rounded-xl menu-accent shadow-lg overflow-hidden">
              <a class="block px-4 py-3 text-sm font-medium transition" href="#/home">Login as user</a>
              <a class="block px-4 py-3 text-sm font-medium transition" href="#/driver-dashboard">Login as driver</a>
            </div>
          </details>
        </header>

        <!-- Injected pages -->
        <main class="app-card p-6 space-y-6">
          ${e??""}
        </main>

      </div>
    </div>
  `}async function h(){const t=window.location.hash.replace("#","")||"/home",s=await O(t),i=document.getElementById("app");i.innerHTML=G(s)}window.addEventListener("load",h);window.addEventListener("hashchange",h);function w(e){document.querySelectorAll("details[open]").forEach(t=>{t.contains(e.target)||t.removeAttribute("open")})}document.addEventListener("click",w);document.addEventListener("touchstart",w);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("✅ Service Worker registered:",e.scope)}).catch(e=>{console.error("❌ Service Worker failed:",e)})});async function W(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();for(const t of e)await t.unregister()}window.location.reload(!0)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("updateBtn");e&&e.addEventListener("click",W)});
