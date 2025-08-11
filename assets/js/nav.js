// /assets/js/nav.js
(function () {
  const toggleBtn = document.querySelector('[data-nav-toggle]');
  const drawer = document.querySelector('[data-drawer]');
  const backdrop = document.querySelector('[data-backdrop]');
  if (!toggleBtn || !drawer || !backdrop) return;

  const body = document.body;
  const focusableSel = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;

  function openDrawer() {
    lastFocused = document.activeElement;
    body.classList.add('nav-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.hidden = false;

    // Focus management
    const first = drawer.querySelector(focusableSel);
    first && first.focus();

    // Close on ESC
    document.addEventListener('keydown', onKeyDown);
    // Trap focus
    document.addEventListener('focus', trap, true);
  }

  function closeDrawer() {
    body.classList.remove('nav-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.hidden = true;

    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('focus', trap, true);

    // Return focus
    lastFocused && lastFocused.focus();
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') closeDrawer();
  }

  function trap(e) {
    if (!body.classList.contains('nav-open')) return;
    if (!drawer.contains(e.target)) {
      const first = drawer.querySelector(focusableSel);
      first && first.focus();
    }
  }

  // Toggle
  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('nav-open')) closeDrawer();
    else openDrawer();
  });

  // Click outside
  backdrop.addEventListener('click', closeDrawer);

  // Close when a link is clicked (navigating to subpage)
  drawer.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) closeDrawer();
  });

  // Ensure it starts closed, even if browser restored a previous scroll/DOM
  closeDrawer();
})(); 