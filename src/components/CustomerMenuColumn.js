export default function CustomerMenuColumn() {
  return `
    <details class="relative z-[60]">
      <summary class="list-none cursor-pointer inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition ring-1 ring-white/20">
        C
      </summary>
      <div class="absolute right-0 mt-3 w-52 rounded-2xl menu-accent shadow-xl overflow-hidden z-[60]">
        <a class="block mx-2 my-2 px-4 py-3 text-sm font-bold rounded-xl text-center shadow-md bg-[#0b5cff]" href="#/home">Find a bus</a>
        <a class="block px-4 py-3 text-sm font-medium transition" href="#/customer-profile">Profile</a>
        <a class="block px-4 py-3 text-sm font-medium transition" href="#/customer-notifications">Notifications</a>
        <a class="block px-4 py-3 text-sm font-medium transition" href="#/my-bookings">My Bookings</a>
      </div>
    </details>
  `;
}
