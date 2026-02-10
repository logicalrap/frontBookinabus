import CustomerMenuColumn from "../../components/CustomerMenuColumn.js";

export default function CustomerProfile() {
  const customer = {
    name: "Amina Yusuf",
    phone: "+260 97 123 4567",
    email: "amina.yusuf@example.com",
    nrc: "123456/78/1"
  };

  return `
    <section class="max-w-[900px] mx-auto mt-8 p-6 app-card">
      <div class="flex items-start gap-4 min-w-0">
        ${CustomerMenuColumn()}

        <div class="flex-1 space-y-6 min-w-0">
          <header class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-2xl font-semibold text-[var(--color-secondary-heading)]">Customer Profile</h2>
              <p class="mt-2 text-gray-200">Keep your details accurate for quick bookings.</p>
            </div>
            <button class="px-4 py-2 rounded-lg font-semibold btn-primary transition">Edit Profile</button>
          </header>

          <div class="space-y-5">
            <div class="flex items-center gap-4 bg-white/10 rounded-2xl p-5 min-w-0">
              <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-semibold">
                AY
              </div>
              <div class="min-w-0">
                <div class="text-xl font-semibold">${customer.name}</div>
                <div class="text-sm text-gray-200">Customer</div>
                <div class="text-sm text-gray-200 break-words">Zambia</div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="bg-white/10 rounded-2xl p-5 space-y-3">
                <h3 class="text-lg font-semibold">Contact Info</h3>
                <div class="text-sm text-gray-100 space-y-2">
                  <div><span class="font-semibold">Full name:</span> ${customer.name}</div>
                  <div><span class="font-semibold">Phone number:</span> ${customer.phone}</div>
                  <div class="break-words"><span class="font-semibold">Email:</span> ${customer.email}</div>
                </div>
              </div>

              <div class="bg-white/10 rounded-2xl p-5 space-y-3">
                <h3 class="text-lg font-semibold">Identification</h3>
                <div class="text-sm text-gray-100 space-y-2">
                  <div><span class="font-semibold">NRC:</span> ${customer.nrc}</div>
                  <div><span class="font-semibold">Profile picture:</span> Optional</div>
                </div>
              </div>
            </div>

            <div class="bg-white/10 rounded-2xl p-5 space-y-3">
              <h3 class="text-lg font-semibold">Important</h3>
              <p class="text-sm text-gray-200">
                Phone number is required for Zambia customers to confirm bookings quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
