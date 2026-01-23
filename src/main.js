import "./style.css";
import "./styles/booking.css";

//import { initBookingForm } from "./logic/bookingForm.js";


import { loadRoute } from "./router.js";

// Router handler
function router() {
  const hash = window.location.hash.replace("#", "");
  const path = hash || "/login"; // default page
  loadRoute(path);
}

// Initialize SPA
window.addEventListener("load", router);
window.addEventListener("hashchange", router);

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        console.log("✅ Service Worker registered:", registration.scope);
      })
      .catch((err) => {
        console.error("❌ Service Worker failed:", err);
      });
  });
}


async function forceUpdate() {
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();

    for (const reg of registrations) {
      await reg.unregister();
    }
  }

  // Reload WITHOUT cache
  window.location.reload(true);
}

document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.getElementById("updateBtn");

  if (updateBtn) {
    updateBtn.addEventListener("click", forceUpdate);
  }
});

