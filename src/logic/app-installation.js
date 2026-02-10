export async function detectInstalled() {
  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  ) {
    return true;
  }

  if ("getInstalledRelatedApps" in navigator) {
    try {
      const related = await navigator.getInstalledRelatedApps();
      if (Array.isArray(related) && related.length > 0) {
        return true;
      }
    } catch {
      // ignore
    }
  }

  return false;
}

export function registerInstallPromptHandler() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    window.__deferredInstallPrompt = event;

    const installBtn = document.getElementById("installAppBtn");
    if (installBtn) {
      installBtn.removeAttribute("disabled");
      installBtn.classList.remove("opacity-60", "cursor-not-allowed");
    }
  });

  window.addEventListener("appinstalled", () => {
    window.__deferredInstallPrompt = null;
    window.location.hash = "#/home";
  });
}

export function wireInstallButton({ isInstalled }) {
  const installBtn = document.getElementById("installAppBtn");
  if (!installBtn) return;

  if (isInstalled) {
    installBtn.textContent = "Open App";
    installBtn.removeAttribute("disabled");
    installBtn.classList.remove("opacity-60", "cursor-not-allowed");
    installBtn.addEventListener("click", () => {
      window.location.hash = "#/home";
    });
    return;
  }

  installBtn.addEventListener("click", async () => {
    if (!window.__deferredInstallPrompt) {
      return;
    }
    window.__deferredInstallPrompt.prompt();
    const { outcome } = await window.__deferredInstallPrompt.userChoice;
    if (outcome === "accepted") {
      window.__deferredInstallPrompt = null;
    }
  });
}
