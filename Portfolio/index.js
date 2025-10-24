// Set current year in footer
(function setYear() {
  var yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();

// Initialize ScrollSpy after content loads
document.addEventListener('DOMContentLoaded', function () {
  var mainNav = document.getElementById('mainNav');
  if (mainNav && typeof bootstrap !== 'undefined') {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 80
    });
  }
});

// Minimal client-side handling for contact form
(function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    var formData = new FormData(form);
    var payload = Object.fromEntries(formData.entries());

    console.log('Contact form submitted:', payload);

    form.reset();
    form.classList.remove('was-validated');

    // Provide lightweight feedback
    var button = form.querySelector('button[type="submit"]');
    if (button) {
      var original = button.textContent;
      button.disabled = true;
      button.textContent = 'Sent!';
      setTimeout(function () {
        button.disabled = false;
        button.textContent = original;
      }, 1500);
    }
  });
})();


