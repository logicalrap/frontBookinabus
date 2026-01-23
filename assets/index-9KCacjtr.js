(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function h(){return`
    <section class="max-w-[420px] mx-auto mt-16 p-6 app-card">

      <!-- Header -->
      <header class="text-center mb-8">
        <h1 class="text-2xl font-semibold">
          BookinaBus
        </h1>
        <p class="mt-2 text-sm text-gray-200">
          Login to continue
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
  `}function u(){return`
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">

      <!-- Header -->
      <header class="text-center mb-8">
        <h1 class="text-2xl font-semibold">
          BookinaBus
        </h1>
        <h3 class="mt-2 px-4 py-2 rounded-md text-lg font-medium bg-black">
          Event Transport Booking
        </h3>
      </header>

      <form id="bookingForm" class="space-y-6">

        <!-- STEP 1 -->
        <div class="step block" data-step="1">

          <h3 class="bg-black px-4 py-2 rounded-md mb-6 text-lg font-medium">
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
            class="w-full p-3 rounded-lg font-medium transition hover:opacity-90 btn-primary"
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
              class="flex-1 p-3 rounded-lg transition hover:opacity-90 bg-gray-600 text-black"
            >
              Back
            </button>

            <button
              type="submit"
              class="flex-1 p-3 rounded-lg font-medium transition hover:opacity-90 btn-primary"
            >
              Request Quote
            </button>
          </div>

        </div>

      </form>
    </section>
  `}function m(e=[]){const t=e.slice(0,8),n=e.slice(3);return`
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
      ${n.length>0?`
        <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-[900px] w-[90%] bg-[var(--color-primary)] text-white text-center p-4 font-medium rounded-lg shadow-md">
          Other drivers will contact you shortly
        </div>
      `:""}
      
    </section>
  `}const x="http://localhost:8080";async function w(e){try{const t=await fetch(`${x}/api/bookings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){const n=await t.json();throw new Error(n.message||"Failed to submit booking")}return await t.json()}catch(t){throw console.error("Booking API error:",t),t}}function k(){const e=document.getElementById("bookingForm");if(!e)return;const t=e.querySelectorAll(".step");let n=1;const i=d=>{t.forEach(a=>{a.classList.add("hidden"),a.classList.remove("block")});const s=e.querySelector(`[data-step="${d}"]`);s.classList.remove("hidden"),s.classList.add("block")};i(n);const o=document.getElementById("pickup"),r=document.getElementById("dropoff"),l=e.querySelector("select"),b=document.getElementById("date"),f=document.getElementById("time"),g=document.getElementById("name"),v=document.getElementById("phone"),y=document.getElementById("email");document.getElementById("nextBtn").onclick=()=>{if(!o.value||!r.value){alert("Please fill pickup and drop-off locations");return}n=2,i(n)},document.getElementById("backBtn").onclick=()=>{n=1,i(n)},e.onsubmit=async d=>{d.preventDefault();const s={event_type:l.value,pickup_location:o.value,dropoff_location:r.value,trip_date:b.value,pickup_time:f.value,full_name:g.value,phone:v.value,email:y.value};console.log("Payload sent to API:",s);try{const a=await w(s);console.log("Booking successful:",a),alert("Booking submitted successfully!"),location.hash="#/drivers"}catch(a){alert("Failed to submit booking: "+a.message)}}}const c={"/login":h,"/home":u,"/drivers":m};async function B(e){const t=document.getElementById("app");if((!e||e==="/")&&(e="/login"),!c[e]){t.innerHTML="<h2>404 – Page not found</h2>";return}if(e==="/drivers")try{const i=await(await fetch("https://jsonplaceholder.typicode.com/users")).json();t.innerHTML=m(i);return}catch{t.innerHTML="<p>Failed to load drivers.</p>";return}if(e==="/home"){t.innerHTML=u(),k();return}t.innerHTML=c[e]()}function p(){const t=window.location.hash.replace("#","")||"/login";B(t)}window.addEventListener("load",p);window.addEventListener("hashchange",p);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("✅ Service Worker registered:",e.scope)}).catch(e=>{console.error("❌ Service Worker failed:",e)})});async function E(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();for(const t of e)await t.unregister()}window.location.reload(!0)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("updateBtn");e&&e.addEventListener("click",E)});
