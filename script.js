// script.js
document.addEventListener('DOMContentLoaded', function() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
  
});