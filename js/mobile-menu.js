// Mobile Menu Functionality for Subpages - Performance Optimized
document.addEventListener('DOMContentLoaded', function() {
  // Cache DOM elements for better performance
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    // Use passive event listeners for better performance
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    }, { passive: false });
    
    // Close menu when clicking on a link - use event delegation
    mobileMenu.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
    
    // Close menu when clicking outside - use passive listener
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    }, { passive: true });
  }
}); 