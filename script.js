
document.addEventListener('DOMContentLoaded', function() {
  const done = document.getElementById('done');
  const nav = document.getElementById('navbar');
  const close = document.getElementById('close');

  if (done) {
    done.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      nav.classList.add('active');
      close.classList.add('active');
      done.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (close) {
    close.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.remove('active');
      close.classList.remove('active');
      done.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (nav.classList.contains('active') && 
        !e.target.closest('#navbar') && 
        !e.target.closest('#mobile')) {
      nav.classList.remove('active');
      close.classList.remove('active');
      done.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});