const EMAILJS_SDK_URL = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

function getEmailJsConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_256256",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_klci2qs",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "2ce9C55MJ00qsaPFn",
  };
}

async function loadEmailJsSdk() {
  if (window.emailjs) return window.emailjs;

  await new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-emailjs-sdk="true"]');
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", () => reject(new Error("Failed to load EmailJS SDK")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = EMAILJS_SDK_URL;
    script.async = true;
    script.dataset.emailjsSdk = "true";
    script.onload = resolve;
    script.onerror = () => reject(new Error("Failed to load EmailJS SDK"));
    document.head.appendChild(script);
  });

  if (!window.emailjs) {
    throw new Error("EmailJS SDK not available");
  }

  return window.emailjs;
}

export async function sendContactMessage({ name, email, phone, message }) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing EmailJS config. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.");
  }

  const emailjs = await loadEmailJsSdk();

  return emailjs.send(
    serviceId,
    templateId,
    {
      // Canonical keys used by many EmailJS templates
      name,
      email,
      phone,
      // Alternative/common template variable names
      user_name: name,
      user_email: email,
      user_phone: phone,
      message_text: message,
      // Existing keys already used in this project
      from_name: name,
      from_email: email,
      phone_number: phone,
      message,
    },
    { publicKey }
  );
}

export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("contactStatus");
  const submitBtn = document.getElementById("contactSubmitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName")?.value?.trim() || "";
    const email = document.getElementById("contactEmail")?.value?.trim() || "";
    const phone = document.getElementById("contactPhone")?.value?.trim() || "";
    const message = document.getElementById("contactMessage")?.value?.trim() || "";

    if (status) status.textContent = "Sending...";
    if (submitBtn) submitBtn.setAttribute("disabled", "true");

    try {
      await sendContactMessage({ name, email, phone, message });
      if (status) status.textContent = "Message sent successfully.";
      form.reset();
    } catch (error) {
      console.error("Contact message send error:", error);
      if (status) status.textContent = `Failed to send message: ${error.message}`;
    } finally {
      if (submitBtn) submitBtn.removeAttribute("disabled");
    }
  });
}
