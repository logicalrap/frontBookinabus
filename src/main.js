import "./style.css";
import "./styles/booking.css";

import { loadRoute } from "./router.js";
import AppShell from "./components/AppShell.js";
import {
  detectInstalled,
  registerInstallPromptHandler,
  wireInstallButton
} from "./logic/app-installation.js";

// =============================
// ROUTER
// =============================
async function router() {
  const hasExplicitHash = window.location.hash.length > 0;
  const hash = window.location.hash.replace("#", "");
  const path = hash || "/home";

  const isInstalled = await detectInstalled();

  // Only auto-redirect on first visit (no explicit hash)
  if (!hasExplicitHash) {
    if (isInstalled) {
      window.location.hash = "#/home";
      return;
    }
    window.location.hash = "#/install-bukabus";
    return;
  }

  // wait for route
  const pageContent = await loadRoute(path);

  const app = document.getElementById("app");
  const hideTopBar = path === "/install-bukabus";
  app.innerHTML = AppShell(pageContent, { hideTopBar });

  if (path === "/install-bukabus") {
    wireInstallButton({ isInstalled });
  }
}


// Run on load + navigation
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
registerInstallPromptHandler();

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
