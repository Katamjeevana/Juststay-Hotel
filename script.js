
const done = document.getElementById('done');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (done) {
  done.addEventListener('click', () => {
    nav.classList.add('active');
    close.classList.add('active');
    done.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
    close.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  });
}