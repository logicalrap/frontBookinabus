export function initTripsTabs() {
  const tabs = Array.from(document.querySelectorAll("[data-trip-tab]"));
  const sections = Array.from(document.querySelectorAll("[data-trip-section]"));

  if (!tabs.length || !sections.length) return;

  const activeClass =
    "flex-1 px-4 py-3 rounded-xl font-semibold btn-accent shadow-sm flex items-center justify-center gap-2";
  const inactiveClass =
    "flex-1 px-4 py-3 rounded-xl font-semibold bg-white/15 text-white hover:bg-white/20 transition flex items-center justify-center gap-2";

  function setActive(tabId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tripTab === tabId;
      tab.className = isActive ? activeClass : inactiveClass;
    });

    sections.forEach((section) => {
      section.classList.toggle("hidden", section.dataset.tripSection !== tabId);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActive(tab.dataset.tripTab));
  });

  setActive("new");
}
