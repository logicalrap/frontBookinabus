const INSTALL_STATE_KEY = "bukabus-installed";
const APP_PROTOCOL_URL = "web+bookinabus://open/home";
const APP_FALLBACK_HASH = "#/home";

function getManualInstallMessage() {
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  if (isIOS) {
    return "To install: tap Share, then 'Add to Home Screen'.";
  }

  if (isAndroid) {
    return "To install: open browser menu (3 dots) and tap 'Install app' or 'Add to Home screen'.";
  }

  return "To install: open browser menu and choose 'Install app'.";
}

function setInstallMode(button) {
  if (!button) return;
  button.textContent = "Install App";
  button.removeAttribute("disabled");
  button.classList.remove("opacity-60", "cursor-not-allowed");
  button.onclick = async () => {
    if (!window.__deferredInstallPrompt) {
      window.alert(getManualInstallMessage());
      return;
    }
    window.__deferredInstallPrompt.prompt();
    const { outcome } = await window.__deferredInstallPrompt.userChoice;
    if (outcome === "accepted") {
      window.__deferredInstallPrompt = null;
    }
  };
}

function setOpenMode(button) {
  if (!button) return;
  button.textContent = "Open App";
  button.removeAttribute("disabled");
  button.classList.remove("opacity-60", "cursor-not-allowed");
  button.onclick = () => {
    openInstalledApp();
  };
}

function openInstalledApp() {
  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  ) {
    window.location.hash = APP_FALLBACK_HASH;
    return;
  }

  let fallbackRan = false;
  const fallbackToWeb = () => {
    if (fallbackRan) return;
    fallbackRan = true;
    window.location.hash = APP_FALLBACK_HASH;
  };

  const fallbackTimer = window.setTimeout(fallbackToWeb, 1200);

  const onPageHidden = () => {
    // If browser leaves page, likely handed off to installed app.
    window.clearTimeout(fallbackTimer);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("pagehide", onPageHidden);
  };

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      onPageHidden();
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("pagehide", onPageHidden, { once: true });

  window.location.href = APP_PROTOCOL_URL;
}

export async function detectInstalled() {
  const storedInstalled = window.localStorage?.getItem(INSTALL_STATE_KEY) === "true";

  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  ) {
    try {
      window.localStorage?.setItem(INSTALL_STATE_KEY, "true");
    } catch {
      // ignore
    }
    return true;
  }

  if ("getInstalledRelatedApps" in navigator) {
    try {
      const related = await navigator.getInstalledRelatedApps();
      if (Array.isArray(related) && related.length > 0) {
        try {
          window.localStorage?.setItem(INSTALL_STATE_KEY, "true");
        } catch {
          // ignore
        }
        return true;
      }
    } catch {
      // ignore
    }
  }

  // Fallback so installed users still get "Open App" on browsers with unreliable APIs.
  if (storedInstalled) return true;

  return false;
}

export function registerInstallPromptHandler() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    window.__deferredInstallPrompt = event;
    try {
      // If install prompt is available, app is not currently installed.
      window.localStorage?.removeItem(INSTALL_STATE_KEY);
    } catch {
      // ignore
    }

    const installBtn = document.getElementById("installAppBtn");
    setInstallMode(installBtn);
  });

  window.addEventListener("appinstalled", () => {
    try {
      window.localStorage?.setItem(INSTALL_STATE_KEY, "true");
    } catch {
      // ignore
    }
    window.__deferredInstallPrompt = null;
    window.location.hash = "#/home";
  });
}

export function wireInstallButton({ isInstalled }) {
  const installBtn = document.getElementById("installAppBtn");
  const continueBrowserBtn = document.getElementById("continueBrowserBtn");

  if (continueBrowserBtn) {
    continueBrowserBtn.onclick = () => {
      window.location.hash = "#/home";
    };
  }

  if (!installBtn) return;
  setInstallMode(installBtn);

  if (isInstalled) {
    setOpenMode(installBtn);
    return;
  }
}
