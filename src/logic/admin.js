import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth } from "../firebase.js";
import { db } from "../firebase.js";

export async function loginAdmin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in:", userCredential.user);
    window.location.hash = "#/bravobravo256";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

export function initAdminLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email")?.value?.trim() || "";
    const password = document.getElementById("password")?.value || "";
    loginAdmin(email, password);
  });
}

export async function logoutAdmin() {
  try {
    await signOut(auth);
    window.location.hash = "#/bravobravo256-login";
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
}

export function initAdminPanel() {
  const logoutBtn = document.getElementById("adminLogoutBtn");
  const bookingsList = document.getElementById("adminBookingsList");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutAdmin();
    });
  }

  if (bookingsList) {
    loadAdminBookings(bookingsList);
  }
}

// Escapes text before injecting it into HTML to avoid accidental markup injection.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Formats Firestore timestamp (or fallback value) into a readable date string.
function formatCreatedAt(createdAt) {
  if (!createdAt) return "N/A";
  if (typeof createdAt.toDate === "function") {
    return createdAt.toDate().toLocaleString();
  }
  return String(createdAt);
}

// Fetches bookings from Firestore and renders them inside the admin bookings container.
async function loadAdminBookings(container) {
  container.innerHTML = `<div class="text-white/70">Loading bookings...</div>`;

  try {
    // Query bookings sorted by newest first so admins see recent requests at the top.
    const bookingsQuery = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(bookingsQuery);

    if (snapshot.empty) {
      container.innerHTML = `<div class="text-white/70">No bookings found.</div>`;
      return;
    }

    const cards = snapshot.docs.map((doc) => {
      const b = doc.data();
      const fullName = escapeHtml(b.full_name || b.name || "N/A");
      const phone = escapeHtml(b.phone || "N/A");
      const email = escapeHtml(b.email || "N/A");
      const route = escapeHtml(
        b.route || `${b.pickup_location || "N/A"} -> ${b.dropoff_location || "N/A"}`
      );
      const tripDate = escapeHtml(b.trip_date || b.date || "N/A");
      const pickupTime = escapeHtml(b.pickup_time || "N/A");
      const eventType = escapeHtml(b.event_type || "N/A");
      const createdAt = escapeHtml(formatCreatedAt(b.createdAt));

      return `
        <article class="rounded-xl bg-white/10 border border-white/20 p-4">
          <div class="text-sm text-white/60 mb-2">Booking ID: ${escapeHtml(doc.id)}</div>
          <h3 class="text-lg font-semibold text-white">${fullName}</h3>
          <div class="text-sm text-white/80 mt-2">Phone: ${phone}</div>
          <div class="text-sm text-white/80">Email: ${email}</div>
          <div class="text-sm text-white/80">Route: ${route}</div>
          <div class="text-sm text-white/80">Trip Date: ${tripDate}</div>
          <div class="text-sm text-white/80">Pickup Time: ${pickupTime}</div>
          <div class="text-sm text-white/80">Event: ${eventType}</div>
          <div class="text-xs text-white/60 mt-3">Created: ${createdAt}</div>
        </article>
      `;
    });

    container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${cards.join("")}</div>`;
  } catch (error) {
    console.error("Failed to load bookings:", error);
    container.innerHTML = `<div class="text-red-300">Failed to load bookings: ${escapeHtml(error.message)}</div>`;
  }
}
