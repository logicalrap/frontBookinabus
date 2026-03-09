import { db } from "../firebase.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

async function saveBooking(data) {
  await addDoc(collection(db, "bookings"), {
    event_type: data.event_type,
    pickup_location: data.pickup_location,
    dropoff_location: data.dropoff_location,
    route: `${data.pickup_location} -> ${data.dropoff_location}`,
    trip_date: data.trip_date,
    pickup_time: data.pickup_time,
    full_name: data.full_name,
    phone: data.phone,
    email: data.email || "",
    createdAt: serverTimestamp(),
  });
}

export function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const steps = form.querySelectorAll(".step");
  let currentStep = 1;

  const showStep = step => {
    steps.forEach(s => {
      s.classList.add("hidden");
      s.classList.remove("block");
    });

    const activeStep = form.querySelector(`[data-step="${step}"]`);
    activeStep.classList.remove("hidden");
    activeStep.classList.add("block");
  };

  // initial render
  showStep(currentStep);

  const pickup = document.getElementById("pickup");
  const dropoff = document.getElementById("dropoff");
  const eventType = form.querySelector("select");
  const date = document.getElementById("date");
  const time = document.getElementById("time");
  const nameField = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  document.getElementById("nextBtn").onclick = () => {
    if (!pickup.value || !dropoff.value) {
      alert("Please fill pickup and drop-off locations");
      return;
    }
    currentStep = 2;
    showStep(currentStep);
  };

  document.getElementById("backBtn").onclick = () => {
    currentStep = 1;
    showStep(currentStep);
  };

  form.onsubmit = async e => {
    e.preventDefault();

    const bookingData = {
      event_type: eventType.value,
      pickup_location: pickup.value,
      dropoff_location: dropoff.value,
      trip_date: date.value,
      pickup_time: time.value,
      full_name: nameField.value,
      phone: phone.value,
      email: email.value,
    };

    console.log("Payload sent to Firestore:", bookingData);

    try {
      await saveBooking(bookingData);
      console.log("Booking saved to Firestore");
      alert("Booking request sent!");
      location.hash = "#/drivers";
    } catch (err) {
      console.error("Error adding booking:", err);
      alert("Failed to save booking: " + err.message);
    }
  };
}
