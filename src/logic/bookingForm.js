import { createBooking } from "./api.js";

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

    console.log("Payload sent to API:", bookingData);

    try {
      const result = await createBooking(bookingData);
      console.log("Booking successful:", result);
      alert("Booking submitted successfully!");
      location.hash = "#/drivers";
    } catch (err) {
      alert("Failed to submit booking: " + err.message);
    }
  };
}
