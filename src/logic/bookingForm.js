export function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return; // safety check

  const steps = form.querySelectorAll(".step");
  let currentStep = 1;

  const showStep = step => {
    steps.forEach(s => s.classList.remove("active"));
    form.querySelector(`[data-step="${step}"]`).classList.add("active");
  };

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

  form.onsubmit = e => {
    e.preventDefault();

    const data = {
      pickup: pickup.value,
      dropoff: dropoff.value,
      name: name.value,
      phone: phone.value
    };

    console.log("Booking data:", data);
    
    //Navigate to drivers page
    location.hash = "#/drivers";
  };
}
