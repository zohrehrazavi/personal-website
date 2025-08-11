// Responsive Layout Manager for Portfolio
// Ensures the flower navigation looks perfect on all screen sizes

class ResponsiveLayout {
  constructor() {
    this.init();
  }

  init() {
    // Apply layout on page load
    window.addEventListener('load', () => this.applyLayout());
    
    // Apply layout on window resize
    window.addEventListener('resize', () => this.applyLayout());
    
    // Apply layout immediately if DOM is already loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.applyLayout());
    } else {
      this.applyLayout();
    }
  }

  applyLayout() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const aspectRatio = screenWidth / screenHeight;

    // Mobile screens (768px and below) - Let CSS handle this
    if (screenWidth <= 768) {
      this.applyMobileLayout();
      return;
    }

    // Large desktop screens (1600px+) - Keep original layout
    if (screenWidth > 1600) {
      this.applyLargeScreenLayout();
    }
    // Medium desktop/laptop screens (1200px - 1600px)
    else if (screenWidth > 1200) {
      this.applyMediumScreenLayout();
    }
    // Standard laptop screens (1024px - 1200px)
    else if (screenWidth > 1024) {
      this.applyStandardLaptopLayout();
    }
    // Small laptop screens (900px - 1024px)
    else if (screenWidth > 900) {
      this.applySmallLaptopLayout();
    }
    // 13-inch laptop screens (specific detection)
    else if (screenWidth > 768 && screenHeight <= 900) {
      this.apply13InchLayout();
    }
  }

  applyLargeScreenLayout() {
    // Keep original 50/50 split with large flower
    this.setPanelLayout('50%', '50%');
    this.setFlowerSize(600, 300, 320, 260);
    this.setTextSizes('16vw', '1.6vw');
  }

  applyMediumScreenLayout() {
    // Slight adjustment to prevent overlap
    this.setPanelLayout('48%', '52%');
    this.setFlowerSize(500, 250, 280, 220);
    this.setTextSizes('14vw', '1.4vw');
  }

  applyStandardLaptopLayout() {
    // Optimized for standard laptops
    this.setPanelLayout('48%', '52%');
    this.setFlowerSize(450, 220, 250, 200);
    this.setTextSizes('13vw', '1.3vw');
  }

  applySmallLaptopLayout() {
    // Critical overlap prevention
    this.setPanelLayout('50%', '50%');
    this.setFlowerSize(400, 200, 220, 180);
    this.setTextSizes('12vw', '1.2vw');
  }

  apply13InchLayout() {
    // Specific optimization for 13-inch screens
    console.log('Applying 13-inch layout with tight flower positioning');
    this.setPanelLayout('55%', '45%');
    this.setFlowerSize(350, 175, 190, 25);
    this.setTextSizes('11vw', '1.1vw');
  }

  applyMobileLayout() {
    // Mobile layout handled by CSS media queries
    // Reset any JavaScript-applied styles to let CSS take over
    const leftPanel = document.querySelector('.left-panel');
    const rightPanel = document.querySelector('.right-panel');
    const circleMenu = document.querySelector('.circle-menu');
    const centerAvatar = document.querySelector('.center-avatar');
    const circleButtons = document.querySelectorAll('.circle-button');
    
    if (leftPanel) leftPanel.style.flex = '';
    if (rightPanel) rightPanel.style.flex = '';
    if (circleMenu) {
      circleMenu.style.width = '';
      circleMenu.style.height = '';
    }
    if (centerAvatar) {
      centerAvatar.style.width = '';
      centerAvatar.style.height = '';
    }
    
    // Reset all button transforms to let CSS handle mobile positioning
    circleButtons.forEach(button => {
      button.style.width = '';
      button.style.height = '';
      button.style.transform = '';
    });
    
    console.log('Mobile layout - CSS media queries handling');
  }

  setPanelLayout(leftFlex, rightFlex) {
    const leftPanel = document.querySelector('.left-panel');
    const rightPanel = document.querySelector('.right-panel');
    
    if (leftPanel && rightPanel) {
      leftPanel.style.flex = `0 0 ${leftFlex}`;
      rightPanel.style.flex = `0 0 ${rightFlex}`;
    }
  }

  setFlowerSize(menuSize, avatarSize, buttonSize, translateDistance) {
    const circleMenu = document.querySelector('.circle-menu');
    const centerAvatar = document.querySelector('.center-avatar');
    const circleButtons = document.querySelectorAll('.circle-button');
    
    if (circleMenu) {
      circleMenu.style.width = `${menuSize}px`;
      circleMenu.style.height = `${menuSize}px`;
    }
    
    if (centerAvatar) {
      centerAvatar.style.width = `${avatarSize}px`;
      centerAvatar.style.height = `${avatarSize}px`;
    }
    
    // Update all navigation buttons
    circleButtons.forEach(button => {
      button.style.width = `${buttonSize}px`;
      button.style.height = `${buttonSize}px`;
      
      // Update transform to maintain flower shape
      const currentTransform = button.style.transform;
      const newTransform = currentTransform.replace(/translate\([^)]+\)/, `translate(${translateDistance}px)`);
      button.style.transform = newTransform;
    });
  }

  setTextSizes(headingSize, textSize) {
    const nameHeading = document.querySelector('.left-panel h1');
    const titleText = document.querySelector('.left-panel p');
    
    if (nameHeading) {
      nameHeading.style.fontSize = headingSize;
    }
    
    if (titleText) {
      titleText.style.fontSize = textSize;
    }
  }
}

// Initialize responsive layout
new ResponsiveLayout(); 