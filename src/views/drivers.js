export default function Drivers(drivers = []) {
  return `
    <h2>Bus Drivers</h2>
    <ul>
      ${drivers
        .map(driver => `<li>${driver.name} – ${driver.email}</li>`)
        .join("")}
    </ul>
  `;
}
