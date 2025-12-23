export default function Home() {
  return `
    <section class="booking">
      <h1>BookinaBus Charter Booking</h1>

      <form id="bookingForm">

        <!-- STEP 1 -->
        <div class="step active" data-step="1">
          <h3>Trip Details</h3>

             

        <div class="row">
        <div class="field">
          <label>Event Type</label>
          <select required>
            <option value="">Select event type</option>
            <option>Church Program</option>
            <option>Wedding</option>
            <option>School Trip</option>
            <option>Funeral</option>
            <option>Sports Team</option>
            <option>Corporate Event</option>
            <option>Custom</option>
          </select>
        </div>
            
        </div>

          <div class="row">
            <div class="field">
              <label>Pickup Location</label>
              <input id="pickup" type="text" required />
            </div>

            <div class="field">
              <label>Drop-off Location</label>
              <input id="dropoff" type="text" required />
            </div>
          </div>

          <div class="row">
            <div class="field">
              <label>Trip Date</label>
              <input id="date" type="date" required />
            </div>

            <div class="field">
              <label>Pickup Time</label>
              <input id="time" type="time" required />
            </div>
          </div>

          <button type="button" id="nextBtn" class="btn">
            Next
          </button>
        </div>

        <!-- STEP 2 -->
        <div class="step" data-step="2">
          <h3>Contact Information</h3>

          <div class="row">
            <div class="field">
              <label>Full Name</label>
              <input id="name" type="text" required />
            </div>

            <div class="field">
              <label>Phone Number</label>
              <input id="phone" type="tel" required />
            </div>
          </div>

          <div class="row">
            <div class="field">
              <label>Email (optional)</label>
              <input id="email" type="email" />
            </div>
          </div>

          <div class="actions">
            <button type="button" id="backBtn" class="btn secondary">
              Back
            </button>

            <button type="submit" class="btn">
              Request Quote
            </button>
          </div>
        </div>

      </form>
    </section>
  `;
}
