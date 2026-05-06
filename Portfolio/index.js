// Set current year in footer
(function setYear() {
  var yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
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

    // Provide lightweight feedback with better UX
    var button = form.querySelector('button[type="submit"]');
    if (button) {
      var original = button.textContent;
      button.disabled = true;
      button.classList.add('btn-success');
      button.classList.remove('btn-primary');
      button.textContent = '✓ Message Sent!';
      
      setTimeout(function () {
        button.disabled = false;
        button.classList.remove('btn-success');
        button.classList.add('btn-primary');
        button.textContent = original;
      }, 2500);
    }
    
    // Show success alert
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = '<strong>Success!</strong> Thanks for reaching out. I\'ll get back to you soon. <button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
    form.parentElement.insertBefore(alertDiv, form.nextSibling);
    
    // Auto-dismiss alert after 5 seconds
    setTimeout(function() {
      alertDiv.remove();
    }, 5000);
  });
})();

// Minimal client-side handling for project images error fallback
(function() {
  document.querySelectorAll('.project-img').forEach(function(img) {
    img.addEventListener('error', function() {
      console.warn('Project image failed to load:', img.getAttribute('alt'), img.src);
      img.src = 'https://via.placeholder.com/800x450?text=Image+unavailable';
      img.style.backgroundColor = '#e9ecef';
    });
  });
})();


