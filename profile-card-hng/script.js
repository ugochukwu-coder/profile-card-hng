
// ===============================
// Live Time Script (Vanilla JS)
// ===============================

// Select the element where time will appear
const getTime = document.querySelector('#time');

// Function to update time in milliseconds
function updateTime() {
  getTime.textContent = Date.now(); // current timestamp
}

// Initial render
updateTime();

// Optional: update every second
setInterval(updateTime, 1000);