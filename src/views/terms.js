export default function Terms() {
  const appName = "Bukabus";
  const lastUpdated = "March 2, 2026";
  const contactEmail = "bukabuses@gmail.com";

  return `
    <section class="app-page">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
        <header class="rounded-2xl border border-white/20 bg-gradient-to-br from-white/16 to-white/6 p-6 sm:p-8 shadow-lg">
          <p class="text-xs uppercase tracking-widest text-[var(--color-secondary-heading)] font-semibold">Legal</p>
          <h1 class="mt-2 text-3xl sm:text-4xl font-semibold text-white">Terms and Conditions</h1>
          <p class="mt-3 text-white/85">
            These Terms explain how ${appName} works and define the responsibilities of Customers and Transport Providers.
          </p>
          <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div class="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
              <span class="text-white/70">Last Updated:</span>
              <span class="ml-2 font-semibold text-white">${lastUpdated}</span>
            </div>
            <div class="rounded-xl border border-white/20 bg-white/10 px-4 py-3 break-all">
              <span class="text-white/70">Contact Email:</span>
              <a class="ml-2 font-semibold text-[var(--color-secondary-heading)] hover:underline" href="mailto:${contactEmail}">${contactEmail}</a>
            </div>
          </div>
        </header>

        <div class="space-y-4 text-white/90">
          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">1. Introduction</h2>
            <p class="mt-3 leading-relaxed">
              ${appName} ("we," "our," or "us") is a connection platform operating in the Republic of Zambia. Our sole purpose is to help users ("Customers")
              find and connect with bus owners and drivers ("Transport Providers") who have a whole bus available for private hire.
            </p>
            <p class="mt-3 leading-relaxed">
              We are not a transport company. We do not own, operate, or manage buses. We do not arrange transport, set prices, handle payments, or negotiate terms.
              We only provide a digital space where Customers can find Transport Providers and initiate contact.
            </p>
            <p class="mt-3 leading-relaxed">
              By using ${appName}, you agree to these Terms and Conditions. If you do not agree, please do not use the platform.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">2. How the Platform Works</h2>
            <h3 class="mt-4 text-lg font-semibold text-white">2.1 Request System</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Customers submit a form with trip requirements, including date, route, and group size.</li>
              <li>Clicking "Find a Bus" sends a request only and does not confirm a booking.</li>
              <li>The request becomes visible to Transport Providers on the platform.</li>
              <li>Interested Transport Providers may call the Customer using the provided phone number.</li>
              <li>All negotiations, including price and trip details, happen directly between the Customer and the Transport Provider.</li>
            </ul>
            <h3 class="mt-5 text-lg font-semibold text-white">2.2 Directory Listings</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Some Transport Providers are listed directly on the platform.</li>
              <li>Customers can view provider contact details and call them directly.</li>
              <li>All negotiations and agreements happen directly between Customers and Transport Providers.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">3. Our Role: What We Do and Do Not Do</h2>
            <h3 class="mt-4 text-lg font-semibold text-white">3.1 What We Do</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Provide a form for Customers to submit bus-hire requests.</li>
              <li>Make requests visible to Transport Providers.</li>
              <li>Display directory listings of Transport Providers.</li>
              <li>Facilitate initial connection between users.</li>
            </ul>
            <h3 class="mt-5 text-lg font-semibold text-white">3.2 What We Do Not Do</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Book buses on behalf of Customers.</li>
              <li>Confirm driver availability.</li>
              <li>Set or negotiate prices.</li>
              <li>Handle payments of any kind.</li>
              <li>Create contracts between Customers and Transport Providers.</li>
              <li>Inspect buses or verify driver credentials.</li>
              <li>Guarantee that any Transport Provider will respond.</li>
              <li>Monitor or record calls between Customers and Transport Providers.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">4. "Find a Bus" Button Clarification</h2>
            <p class="mt-3 leading-relaxed">Clicking "Find a Bus" means you are submitting a request for drivers to contact you.</p>
            <p class="mt-3 leading-relaxed">Clicking "Find a Bus" does not mean:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Your bus is booked.</li>
              <li>You have a contract with any driver.</li>
              <li>Any payment is due.</li>
              <li>${appName} has arranged transport for you.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">5. Customer Responsibilities</h2>
            <ul class="mt-3 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Provide accurate and truthful information, including a working phone number.</li>
              <li>Answer calls from interested Transport Providers.</li>
              <li>Conduct your own negotiations directly with Transport Providers.</li>
              <li>Verify the bus, driver, and insurance before agreeing to any hire.</li>
              <li>Make all payments directly to Transport Providers at your own risk.</li>
              <li>Understand that ${appName} is not a party to any agreement you reach with a Transport Provider.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">6. Transport Provider Responsibilities</h2>
            <p class="mt-3 leading-relaxed">As a Transport Provider, you represent and warrant that:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>You hold all licenses, permits, and insurance required under Zambian law.</li>
              <li>You are solely responsible for responding to customer requests professionally.</li>
              <li>You are solely responsible for all communications with Customers.</li>
              <li>You are solely responsible for passenger and vehicle safety.</li>
              <li>You will handle all negotiations and payments directly with Customers.</li>
              <li>You will not engage in fraudulent, misleading, or illegal conduct.</li>
            </ul>
            <p class="mt-3 leading-relaxed">${appName} may remove any Transport Provider that violates these responsibilities.</p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">7. Payments</h2>
            <p class="mt-3 leading-relaxed">${appName} does not collect, process, or facilitate payments of any kind, including:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Cash payments.</li>
              <li>Mobile money transactions.</li>
              <li>Bank transfers.</li>
              <li>Card payments.</li>
            </ul>
            <p class="mt-3 leading-relaxed">All payments are strictly between Customers and Transport Providers.</p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">8. Limitation of Liability</h2>
            <p class="mt-3 leading-relaxed">To the fullest extent permitted by the laws of the Republic of Zambia:</p>
            <h3 class="mt-4 text-lg font-semibold text-white">8.1 Neutral Platform</h3>
            <p class="mt-2 leading-relaxed">${appName} is a neutral platform and does not endorse, screen, verify, or guarantee Transport Providers.</p>
            <h3 class="mt-4 text-lg font-semibold text-white">8.2 No Liability for Transport Services</h3>
            <p class="mt-2 leading-relaxed">We are not liable for claims, damages, injuries, losses, or expenses arising from:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Accidents, injuries, or death during transport.</li>
              <li>Mechanical failures or vehicle breakdowns.</li>
              <li>Delays, no-shows, or cancellations by Transport Providers.</li>
              <li>Lost, stolen, or damaged property.</li>
              <li>Disputes over pricing, payments, or agreements.</li>
              <li>Unlicensed, uninsured, or unqualified drivers.</li>
              <li>Illegal activity by any Transport Provider.</li>
              <li>The quality or safety of any vehicle.</li>
            </ul>
            <h3 class="mt-4 text-lg font-semibold text-white">8.3 No Liability for Communications</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Failed calls or miscommunication between users.</li>
              <li>Incorrect contact details provided by either party.</li>
              <li>Transport Providers failing to respond to requests.</li>
              <li>Any verbal or offline agreement between users.</li>
            </ul>
            <h3 class="mt-4 text-lg font-semibold text-white">8.4 Platform Only</h3>
            <p class="mt-2 leading-relaxed">You acknowledge that ${appName} only provides a connection platform and is not responsible for user transactions or agreements.</p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">9. Disclaimer of Warranties</h2>
            <p class="mt-3 leading-relaxed">The platform is provided on an "AS IS" and "AS AVAILABLE" basis without express or implied warranties, including:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>That Transport Providers will respond to requests.</li>
              <li>The accuracy of any listing information.</li>
              <li>The reliability, safety, or legality of any provider service.</li>
              <li>Uninterrupted availability of the platform.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">10. Reporting Concerns</h2>
            <p class="mt-3 leading-relaxed">We encourage users to report:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Fake or misleading listings.</li>
              <li>Harassment or abusive behavior.</li>
              <li>Fraudulent driver activity.</li>
            </ul>
            <p class="mt-3 leading-relaxed">
              We may remove listings or ban users who violate these Terms. To report a concern, email
              <a class="font-semibold text-[var(--color-secondary-heading)] hover:underline" href="mailto:${contactEmail}">${contactEmail}</a>.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">10.1 Advertising</h2>
            <p class="mt-3 leading-relaxed">${appName} may display third-party advertisements to support and improve the platform.</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>We do not endorse advertised products or services unless explicitly stated.</li>
              <li>Advertisers are solely responsible for ad content.</li>
              <li>Your interactions with advertisers are solely between you and the advertiser.</li>
              <li>${appName} is not responsible for loss or damage resulting from advertisements.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">11. Privacy</h2>
            <p class="mt-3 leading-relaxed">Our Privacy Policy explains how we collect, use, and protect personal information.</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>We collect your name, phone number, and travel requirements.</li>
              <li>We share your phone number with Transport Providers when you submit a request.</li>
              <li>We do not sell your personal data.</li>
              <li>We use Firebase for secure storage.</li>
            </ul>
            <p class="mt-3 leading-relaxed">By using ${appName}, you agree to our Privacy Policy.</p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">12. Changes to These Terms</h2>
            <p class="mt-3 leading-relaxed">We may update these Terms from time to time. Significant changes may be communicated by:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Posting a notice in the app.</li>
              <li>Updating the "Last Updated" date on this page.</li>
            </ul>
            <p class="mt-3 leading-relaxed">Continued use of ${appName} after updates means you accept the revised Terms.</p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">13. Governing Law</h2>
            <p class="mt-3 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the Republic of Zambia.
              Disputes arising from these Terms are subject to the exclusive jurisdiction of the courts of Zambia.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">14. Contact Information</h2>
            <p class="mt-3 leading-relaxed">For any questions about these Terms:</p>
            <p class="mt-2 leading-relaxed">
              <span class="font-semibold">${appName}</span><br />
              Email:
              <a class="font-semibold text-[var(--color-secondary-heading)] hover:underline" href="mailto:${contactEmail}">${contactEmail}</a>
            </p>
          </article>
        </div>

        <aside class="rounded-2xl border border-[var(--color-secondary-heading)]/50 bg-[var(--color-secondary-heading)]/10 p-5 sm:p-6">
          <h2 class="text-lg sm:text-xl font-semibold text-[var(--color-secondary-heading)]">15. Important Legal Notice</h2>
          <p class="mt-3 leading-relaxed text-white/90">
            ${appName} is a connection platform only. We do not book or confirm buses, handle payments, set prices, negotiate terms, or operate vehicles.
          </p>
          <p class="mt-3 leading-relaxed text-white/90">
            When you click "Find a Bus," you only submit a request for drivers to contact you. No booking is confirmed until you and the Transport Provider
            reach a direct agreement by phone or in person.
          </p>
          <p class="mt-3 leading-relaxed text-white/90">
            All agreements are between you and the Transport Provider. You agree to indemnify and hold ${appName} harmless from claims, damages, losses, or
            expenses arising from your platform use or agreements with Transport Providers.
          </p>
          <p class="mt-4 font-semibold text-white">By using ${appName}, you accept these Terms.</p>
        </aside>
      </div>
    </section>
  `;
}
