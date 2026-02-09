import Login from "./views/login.js";
import Home from "./views/home.js";
import Drivers from "./views/drivers.js";
import DriverDashboard from "./views/driverDashboard.js";
import DriverProfile from "./views/driverProfile.js";
import BookingDetails from "./views/bookingDetails.js";
import SendQuote from "./views/sendQuote.js";
import Notifications from "./views/notifications.js";
import Messages from "./views/messages.js";
import MyTrips from "./views/myTrips.js";
import { initBookingForm } from "./logic/bookingForm.js";
import { initTripsTabs } from "./logic/trips.js";

// route table
const routes = {
  "/login": Login,
  "/home": Home,
  "/drivers": Drivers,
  "/driver-dashboard": DriverDashboard,
  "/profile": DriverProfile,
  "/notifications": Notifications,
  "/messages": Messages,
  "/my-trips": MyTrips
};

export async function loadRoute(path) {

  if (!path || path === "/") path = "/home";

  // Dynamic booking details route
  if (path.startsWith("/booking/")) {
    const requestId = path.split("/")[2] || "";
    return BookingDetails(requestId);
  }

  // Dynamic send-quote route
  if (path.startsWith("/send-quote/")) {
    const requestId = path.split("/")[2] || "";
    return SendQuote(requestId);
  }

  // 404
  if (!routes[path]) {
    return "<h2 class='text-center'>404 – Page not found</h2>";
  }

  // ===============================
  // DRIVERS (fetch API)
  // ===============================
  if (path === "/drivers") {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return Drivers(data); // RETURN instead of inject
    } catch (err) {
      return "<p>Failed to load drivers.</p>";
    }
  }

  // ===============================
  // HOME
  // ===============================
  if (path === "/home") {
    const html = Home();

    // delay JS attach until DOM inserted
    setTimeout(() => {
      initBookingForm();
    }, 0);

    return html;
  }

  // ===============================
  // MY TRIPS
  // ===============================
  if (path === "/my-trips") {
    const html = MyTrips();

    setTimeout(() => {
      initTripsTabs();
    }, 0);

    return html;
  }

  // ===============================
  // LOGIN + others
  // ===============================
  return routes[path]();
}
