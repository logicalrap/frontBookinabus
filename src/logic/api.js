// src/logic/api.js

const API_URL = import.meta.env.VITE_API_URL; // dynamic from .env

export async function createBooking(bookingData) {
  try {
    const response = await fetch(`${API_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to submit booking");
    }

    return await response.json(); // return Laravel response
  } catch (err) {
    console.error("Booking API error:", err);
    throw err; // propagate error
  }
}
