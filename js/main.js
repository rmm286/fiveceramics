document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownTrigger = dropdown ? dropdown.querySelector(':scope > a') : null;

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a:not(.nav-dropdown > a)').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
          toggle.classList.remove('open');
          navLinks.classList.remove('open');
        }
      });
    });
  }

  if (dropdownTrigger && dropdown) {
    dropdownTrigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 700) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  }
});
