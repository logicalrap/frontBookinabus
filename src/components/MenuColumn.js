export default function MenuColumn() {
  return `
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
          <a class="block px-4 py-3 text-sm font-medium transition" href="#/profile">Profile</a>
          <a class="block px-4 py-3 text-sm font-medium transition" href="#/notifications">Notifications</a>
          <a class="block px-4 py-3 text-sm font-medium transition" href="#/my-trips">My Trips</a>
        </div>
      </details>
    </div>
  `;
}
