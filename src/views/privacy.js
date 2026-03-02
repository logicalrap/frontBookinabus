export default function Privacy() {
  const appName = "Bukabus";
  const lastUpdated = "March 2, 2026";
  const contactEmail = "bukabuses@gmail.com";
  const contactPhone = "Not provided";
  const contactAddress = "Not provided";

  return `
    <section class="app-page">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
        <header class="rounded-2xl border border-white/20 bg-gradient-to-br from-white/16 to-white/6 p-6 sm:p-8 shadow-lg">
          <p class="text-xs uppercase tracking-widest text-[var(--color-secondary-heading)] font-semibold">Legal</p>
          <h1 class="mt-2 text-3xl sm:text-4xl font-semibold text-white">Privacy Policy</h1>
          <p class="mt-3 text-white/85">
            This Privacy Policy explains how ${appName} collects, uses, shares, and protects personal information.
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
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">1. Who We Are</h2>
            <p class="mt-3 leading-relaxed">
              ${appName} ("we," "our," or "us") is a connection platform operating in the Republic of Zambia. We connect users ("Customers")
              with bus owners and drivers ("Transport Providers") who have buses available for private hire.
            </p>
            <p class="mt-3 leading-relaxed">
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">2. Information We Collect</h2>
            <h3 class="mt-4 text-lg font-semibold text-white">2.1 Information from Customers</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Full name.</li>
              <li>Phone number.</li>
              <li>Travel date, route, group size, and pickup location.</li>
              <li>IP address, device type, and app version.</li>
              <li>App usage data.</li>
            </ul>
            <h3 class="mt-5 text-lg font-semibold text-white">2.2 Information from Transport Providers</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Full name and business name.</li>
              <li>Phone number and alternate contact number.</li>
              <li>Bus details, including capacity, type, features, and photos.</li>
              <li>Routes served.</li>
              <li>Optional licensing and insurance information.</li>
              <li>IP address and device information.</li>
              <li>Communications with us.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">3. How We Collect Your Information</h2>
            <ul class="mt-3 list-disc pl-5 space-y-2 leading-relaxed">
              <li>When you submit a "Find a Bus" request.</li>
              <li>When you register as a Transport Provider.</li>
              <li>When you contact us for support.</li>
              <li>When you update your profile or listing.</li>
              <li>Automatically through Firebase, including device and usage data.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">4. How We Use Your Information</h2>
            <ul class="mt-3 list-disc pl-5 space-y-2 leading-relaxed">
              <li>To connect Customers with Transport Providers.</li>
              <li>To allow Transport Providers to contact Customers by phone.</li>
              <li>To display Transport Provider listings.</li>
              <li>To improve app performance and user experience.</li>
              <li>To respond to inquiries and support requests.</li>
              <li>To detect and prevent fraud or misuse.</li>
              <li>To comply with legal obligations in Zambia.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">5. Data Sharing</h2>
            <h3 class="mt-4 text-lg font-semibold text-white">5.1 Transport Providers</h3>
            <p class="mt-2 leading-relaxed">When you submit a request, we share your name and phone number with Transport Providers so they can contact you.</p>
            <h3 class="mt-4 text-lg font-semibold text-white">5.2 Service Providers</h3>
            <p class="mt-2 leading-relaxed">We use Google Firebase for app hosting, database, authentication, and analytics.</p>
            <h3 class="mt-4 text-lg font-semibold text-white">5.3 Legal Obligations</h3>
            <p class="mt-2 leading-relaxed">We may disclose data if required by law enforcement, court order, or regulatory authorities in Zambia.</p>
            <h3 class="mt-4 text-lg font-semibold text-white">5.4 Business Transfers</h3>
            <p class="mt-2 leading-relaxed">If ${appName} is sold, merged, or acquired, your data may be transferred to new owners.</p>
            <h3 class="mt-4 text-lg font-semibold text-white">5.5 Advertising</h3>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>We may share limited technical information with advertising partners, such as device type, location, and usage patterns.</li>
              <li>We do not share names, phone numbers, or direct contact details with advertisers.</li>
              <li>If you click an advertisement, the advertiser may collect data under its own privacy policy.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">6. We Do Not Sell Your Data</h2>
            <p class="mt-3 leading-relaxed">
              We do not sell, rent, or trade personal information to third parties for marketing purposes.
              We also do not share data with data brokers or unrelated third parties.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">7. Data Security</h2>
            <p class="mt-3 leading-relaxed">
              We implement reasonable security measures, including secure servers, encryption, and access controls.
              However, no online system is 100% secure.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">8. Data Retention</h2>
            <ul class="mt-3 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Customer request data: retained for up to 1 year.</li>
              <li>Active Transport Provider data: retained while the listing is active.</li>
              <li>Inactive Transport Provider data: deleted after 1 year of inactivity.</li>
              <li>Support inquiries: retained for up to 1 year.</li>
            </ul>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">9. Your Rights</h2>
            <p class="mt-3 leading-relaxed">Under Zambian law, you may have the right to:</p>
            <ul class="mt-2 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Access your personal data.</li>
              <li>Correct inaccurate personal data.</li>
              <li>Request deletion of your data.</li>
              <li>Object to certain data uses.</li>
              <li>Restrict processing.</li>
              <li>Request data portability.</li>
            </ul>
            <p class="mt-3 leading-relaxed">
              To exercise your rights, email
              <a class="font-semibold text-[var(--color-secondary-heading)] hover:underline" href="mailto:${contactEmail}">${contactEmail}</a>.
              We aim to respond within 30 days.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">10. Children's Privacy</h2>
            <p class="mt-3 leading-relaxed">${appName} is not intended for individuals under 18 years of age. We do not knowingly collect personal data from children under 18.</p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">11. Third-Party Links</h2>
            <p class="mt-3 leading-relaxed">
              Our app may contain links to third-party websites. Once you leave our app, this Privacy Policy no longer applies to those websites.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">12. International Data Transfers</h2>
            <p class="mt-3 leading-relaxed">
              We use Google Firebase, which may store or process data on servers outside Zambia, including in the United States or Europe.
              By using ${appName}, you consent to these transfers.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">13. Changes to This Privacy Policy</h2>
            <p class="mt-3 leading-relaxed">
              We may update this Privacy Policy from time to time. The "Last Updated" date shows when revisions were made.
              Continued use of ${appName} after updates indicates acceptance of the revised policy.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">14. Payments</h2>
            <p class="mt-3 leading-relaxed">
              ${appName} does not handle payments. We do not collect or process mobile money, bank transfer, or card payment information.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">15. NRC Numbers</h2>
            <p class="mt-3 leading-relaxed">
              We do not currently collect NRC numbers. If this changes, we will update this policy and request consent where required.
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">16. Contact Us</h2>
            <p class="mt-3 leading-relaxed">
              <span class="font-semibold">${appName}</span><br />
              Email:
              <a class="font-semibold text-[var(--color-secondary-heading)] hover:underline" href="mailto:${contactEmail}">${contactEmail}</a><br />
              Phone: ${contactPhone}<br />
              Address: ${contactAddress}
            </p>
          </article>

          <article class="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
            <h2 class="text-xl font-semibold text-[var(--color-secondary-heading)]">17. Complaints</h2>
            <p class="mt-3 leading-relaxed">
              If you have concerns about how we handle your personal data, contact us using the details above.
              We will review your complaint and respond within a reasonable period.
            </p>
          </article>
        </div>

        <aside class="rounded-2xl border border-[var(--color-secondary-heading)]/50 bg-[var(--color-secondary-heading)]/10 p-5 sm:p-6">
          <h2 class="text-lg sm:text-xl font-semibold text-[var(--color-secondary-heading)]">18. Summary</h2>
          <ul class="mt-3 list-disc pl-5 space-y-2 leading-relaxed text-white/90">
            <li>We collect names, phone numbers, and travel details.</li>
            <li>We share customer phone numbers with Transport Providers so they can call.</li>
            <li>We use Firebase to run and secure the platform.</li>
            <li>We do not sell personal data.</li>
            <li>We do not handle payments.</li>
            <li>You can request access, correction, or deletion of your data.</li>
          </ul>
          <p class="mt-4 font-semibold text-white">By using ${appName}, you acknowledge that you have read and understood this Privacy Policy.</p>
        </aside>
      </div>
    </section>
  `;
}
