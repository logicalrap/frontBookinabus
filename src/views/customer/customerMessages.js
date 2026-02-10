import CustomerMenuColumn from "../../components/CustomerMenuColumn.js";

export default function CustomerMessages() {
  const threads = [
    {
      id: "CMSG-101",
      name: "Dispatch Team",
      preview: "Your driver is on the way to the pickup location.",
      time: "10 mins ago",
      unread: true
    },
    {
      id: "CMSG-102",
      name: "Assigned Driver",
      preview: "Please confirm the pickup time.",
      time: "30 mins ago",
      unread: false
    }
  ];

  return `
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4">
        ${CustomerMenuColumn()}

        <div class="flex-1 space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Messages</h2>
              <p class="mt-2 text-gray-200">Chat with your driver and support.</p>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg rounded-2xl">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/customer-messages">
                Messages
              </a>
            </div>
          </div>

          <div class="space-y-4 mt-2">
            ${threads
              .map(
                (thread) => `
            <div class="bg-white text-black rounded-2xl shadow-md p-5 flex items-start gap-4">
              <div class="w-11 h-11 rounded-full bg-[var(--color-primary-action)]/10 text-[var(--color-primary-action)] flex items-center justify-center font-semibold">
                ${thread.name
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </div>
              <div class="flex-1 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-semibold">${thread.name}</div>
                  <div class="text-xs text-gray-500">${thread.time}</div>
                </div>
                <p class="text-sm text-gray-600">${thread.preview}</p>
              </div>
              ${
                thread.unread
                  ? `<span class="mt-1 h-2.5 w-2.5 rounded-full btn-accent"></span>`
                  : ""
              }
            </div>
          `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
