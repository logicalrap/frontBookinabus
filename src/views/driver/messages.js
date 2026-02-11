
export default function Messages() {
  const threads = [
    {
      id: "MSG-301",
      name: "Dispatch Team",
      preview: "Your driver assignment for REQ-2041 is confirmed.",
      time: "3 mins ago",
      unread: true
    },
    {
      id: "MSG-302",
      name: "Amina Yusuf",
      preview: "Please confirm pickup at Ikeja by 8:15 AM.",
      time: "25 mins ago",
      unread: true
    },
    {
      id: "MSG-303",
      name: "David Okoye",
      preview: "Thanks for the quote. Is there a discount for return trips?",
      time: "1 hr ago",
      unread: false
    },
    {
      id: "MSG-304",
      name: "Grace Bello",
      preview: "We may adjust the pickup time by 15 minutes.",
      time: "Yesterday",
      unread: false
    }
  ];

  return `
    <section class="app-page">
      <div>

        <div class="space-y-6">
          <header class="flex flex-col gap-2">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Messages</h2>
            </div>
          </header>

          <div class="sticky top-0 z-10 bg-[var(--color-primary)] shadow-lg ">
            <div class="flex justify-center gap-2 px-4 py-3">
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold  transition text-center" href="#/notifications">
                Notifications
              </a>
              <a class="flex-1 max-w-[200px] px-4 py-2 rounded-lg font-semibold btn-accent transition text-center" href="#/messages">
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







