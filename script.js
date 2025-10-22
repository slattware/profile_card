document.addEventListener('DOMContentLoaded', function() {
  // Update time on Profile Card
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }

  // Contact form validation
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let isValid = true;

      // Reset error and success messages
      document.querySelectorAll('.error').forEach(el => el.textContent = '');
      const successMessage = document.querySelector('[data-testid="test-contact-success"]');
      successMessage.textContent = '';

      // Validate name
      const name = document.querySelector('[data-testid="test-contact-name"]').value.trim();
      if (!name) {
        document.querySelector('[data-testid="test-contact-error-name"]').textContent = 'Full name is required';
        isValid = false;
      }

      // Validate email
      const email = document.querySelector('[data-testid="test-contact-email"]').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Email is required';
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Please enter a valid email';
        isValid = false;
      }

      // Validate subject
      const subject = document.querySelector('[data-testid="test-contact-subject"]').value.trim();
      if (!subject) {
        document.querySelector('[data-testid="test-contact-error-subject"]').textContent = 'Subject is required';
        isValid = false;
      }

      // Validate message
      const message = document.querySelector('[data-testid="test-contact-message"]').value.trim();
      if (!message) {
        document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message is required';
        isValid = false;
      } else if (message.length < 10) {
        document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message must be at least 10 characters';
        isValid = false;
      }

      // Show success message if valid
      if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
      }
    });
  }
});