function getAppRole() {
  try {
    return localStorage.getItem("appRole") || "customer";
  } catch {
    return "customer";
  }
}

export default function MenuColumn() {
  const role = getAppRole();
  const isDriver = role === "driver";
  const profileHref = isDriver ? "#/profile" : "#/customer-profile";
  const notificationsHref = isDriver ? "#/notifications" : "#/customer-notifications";
  const tripsHref = isDriver ? "#/my-trips" : "#/my-bookings";

  return `
    <details class="relative z-[60]">
      <summary class="list-none cursor-pointer inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition ring-1 ring-white/20">
        D
      </summary>
      <div class="absolute right-0 mt-3 w-52 rounded-2xl menu-accent shadow-xl overflow-hidden z-[60]">
        <a class="block px-4 py-3 text-sm font-medium transition" href="${profileHref}">Profile</a>
        <a class="block px-4 py-3 text-sm font-medium transition" href="${notificationsHref}">Notifications</a>
        <a class="block px-4 py-3 text-sm font-medium transition" href="${tripsHref}">My ${isDriver ? "Trips" : "Bookings"}</a>
      </div>
    </details>
  `;
}
