import "./style.css";
import "./styles/booking.css";

import { loadRoute } from "./router.js";
import AppShell from "./components/AppShell.js";

// =============================
// ROUTER
// =============================
async function router() {
  const hash = window.location.hash.replace("#", "");
  const path = hash || "/home";

  // wait for route
  const pageContent = await loadRoute(path);

  const app = document.getElementById("app");
  app.innerHTML = AppShell(pageContent);
}


// Run on load + navigation
window.addEventListener("load", router);
window.addEventListener("hashchange", router);

// Close open menus when clicking/tapping outside
function closeMenusOnOutsideClick(event) {
  document.querySelectorAll("details[open]").forEach((detail) => {
    if (!detail.contains(event.target)) {
      detail.removeAttribute("open");
    }
  });
}

document.addEventListener("click", closeMenusOnOutsideClick);
document.addEventListener("touchstart", closeMenusOnOutsideClick);


// =============================
// SERVICE WORKER
// =============================
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


// =============================
// FORCE UPDATE BUTTON (PWA)
// =============================
async function forceUpdate() {
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();

    for (const reg of registrations) {
      await reg.unregister();
    }
  }

  window.location.reload(true);
}

document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.getElementById("updateBtn");

  if (updateBtn) {
    updateBtn.addEventListener("click", forceUpdate);
  }
});
