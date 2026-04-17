(() => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.dataset.open === 'true';
      menu.dataset.open = (!open).toString();
      menu.hidden = open;
      toggle.setAttribute('aria-expanded', (!open).toString());
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        menu.dataset.open = 'false';
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // Header shadow on scroll
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 6
        ? '0 1px 0 rgba(11,11,12,0.06), 0 8px 24px rgba(11,11,12,0.06)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Form submission (client-side demo handler)
  const form = document.getElementById('partnerForm');
  if (form) {
    const success = form.querySelector('.form-success');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Submitting…';
      // Simulate request
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.textContent = 'Submit application';
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 700);
    });
  }
})();
