import Login from "./views/login.js";
import Home from "./views/home.js";
import Drivers from "./views/driver/drivers.js";
import DriverDashboard from "./views/driver/driverDashboard.js";
import DriverProfile from "./views/driver/driverProfile.js";
import BookingDetails from "./views/driver/bookingDetails.js";
import SendQuote from "./views/driver/sendQuote.js";
import Notifications from "./views/driver/notifications.js";
import Messages from "./views/driver/messages.js";
import MyTrips from "./views/driver/myTrips.js";
import CustomerProfile from "./views/customer/customerProfile.js";
import CustomerNotifications from "./views/customer/customerNotifications.js";
import CustomerMessages from "./views/customer/customerMessages.js";
import MyBookings from "./views/customer/myBookings.js";
import InstallApp from "./views/installApp.js";
import { initBookingForm } from "./logic/bookingForm.js";
import { initTripsTabs } from "./logic/trips.js";

// route table
const routes = {
  "/login": Login,
  "/home": Home,
  "/drivers": Drivers,
  "/driver-dashboard": DriverDashboard,
  "/profile": DriverProfile,
  "/customer-profile": CustomerProfile,
  "/customer-notifications": CustomerNotifications,
  "/customer-messages": CustomerMessages,
  "/my-bookings": MyBookings,
  "/install-bukabus": InstallApp,
  "/notifications": Notifications,
  "/messages": Messages,
  "/my-trips": MyTrips
};

export async function loadRoute(path) {

  if (!path || path === "/") path = "/home";

  // Set role based on current path so shared menu routes correctly
  const driverPrefixes = ["/driver-dashboard", "/profile", "/notifications", "/messages", "/my-trips", "/drivers"];
  const customerPrefixes = ["/home", "/customer-profile", "/customer-notifications", "/customer-messages", "/my-bookings"];
  const isDriverRoute =
    driverPrefixes.some((p) => path === p) ||
    path.startsWith("/booking/") ||
    path.startsWith("/send-quote/");
  const isCustomerRoute = customerPrefixes.some((p) => path === p);

  try {
    if (isDriverRoute) {
      localStorage.setItem("appRole", "driver");
    } else if (isCustomerRoute) {
      localStorage.setItem("appRole", "customer");
    }
  } catch {
    // ignore storage errors
  }

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
  // CUSTOMER BOOKINGS
  // ===============================
  if (path === "/my-bookings") {
    const html = MyBookings();

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
