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
      .register("/sw.js")
      .then(() => console.log("✅ Service Worker registered"))
      .catch((err) =>
        console.log("❌ Service Worker failed:", err)
      );
  });
}

