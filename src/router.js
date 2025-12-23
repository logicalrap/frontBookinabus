import Login from "./views/login.js";
import Home from "./views/home.js";
import Drivers from "./views/drivers.js";
import { initBookingForm } from "./logic/bookingForm.js";

// Route table
const routes = {
  "/login": Login,
  "/home": Home,
  "/drivers": Drivers
};

export async function loadRoute(path) {
  const app = document.getElementById("app");

  // Default route
  if (!path || path === "/") path = "/login";

  // 404
  if (!routes[path]) {
    app.innerHTML = "<h2>404 – Page not found</h2>";
    return;
  }

  // 🔥 Drivers page (needs API data)
  if (path === "/drivers") {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      app.innerHTML = Drivers(data);
      return;
    } catch (err) {
      app.innerHTML = "<p>Failed to load drivers.</p>";
      return;
    }
  }

  // 🔥 Home page (needs booking form logic)
  if (path === "/home") {
    app.innerHTML = Home();
    initBookingForm(); // attach logic AFTER render
    return;
  }

  // Normal pages (Login)
  app.innerHTML = routes[path]();
}
