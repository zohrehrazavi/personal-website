// Mobile Menu Functionality for Subpages - Performance Optimized
document.addEventListener('DOMContentLoaded', function() {
  // Cache DOM elements for better performance
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    // Create backdrop if it doesn't exist
    let backdrop = document.querySelector('.mobile-menu-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'mobile-menu-backdrop';
      document.body.appendChild(backdrop);
    }
    
    // Use passive event listeners for better performance
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      backdrop.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }, { passive: false });
    
    // Close menu when clicking on a link - use event delegation
    mobileMenu.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on backdrop
    backdrop.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close menu when clicking outside - use passive listener
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target) && !backdrop.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }, { passive: true });
  }
}); 