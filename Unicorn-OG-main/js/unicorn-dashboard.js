document.addEventListener('DOMContentLoaded', function () {
  // Function to fetch real-time unicorn health data
  function fetchUnicornHealth() {
    // Replace these values with actual API calls to get real-time data
    const energyValue = Math.floor(Math.random() * 101);
    const happinessValue = Math.floor(Math.random() * 101);
    const healthValue = Math.floor(Math.random() * 101);

    // Update the dashboard with the fetched values
    document.getElementById('energy-value').textContent = `${energyValue}%`;
    document.getElementById('happiness-value').textContent = `${happinessValue}%`;
    document.getElementById('health-value').textContent = `${healthValue}%`;
  }

  // Fetch unicorn health data every 5 seconds (adjust as needed)
  setInterval(fetchUnicornHealth, 5000);

  // Initial fetch when the page loads
  fetchUnicornHealth();
});
