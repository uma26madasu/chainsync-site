// Enhanced image handling for existing assets
function initImageHandling() {
  // Add loading states to all images
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Set initial loading state
    img.dataset.loaded = 'false';
    
    // Handle successful image load
    img.addEventListener('load', function() {
      this.dataset.loaded = 'true';
      this.style.opacity = '1';
    });
    
    // Handle image load errors gracefully
    img.addEventListener('error', function() {
      console.warn(`Image failed to load: ${this.src}`);
      
      // Create fallback based on the image path and alt text
      const alt = this.alt.toLowerCase();
      const src = this.src.toLowerCase();
      let fallbackContent = '';
      
      // Determine appropriate fallback based on image context
      if (src.includes('dashboard') || alt.includes('dashboard')) {
        fallbackContent = `
          <div class="dashboard-placeholder">
            <div class="placeholder-icon">📊</div>
            <div class="placeholder-text">Dashboard Preview</div>
          </div>
        `;
      } else if (src.includes('data-flow') || alt.includes('data flow')) {
        fallbackContent = `
          <div class="data-flow-placeholder">
            <div class="flow-step">📡</div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">🧠</div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">⚡</div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">📊</div>
          </div>
        `;
      } else if (src.includes('icon') || this.parentElement.classList.contains('feature-icon') || this.parentElement.classList.contains('tech-icon')) {
        // For icons, just hide the img and let CSS handle the fallback
        this.style.display = 'none';
        return;
      } else {
        fallbackContent = `
          <div class="image-placeholder">
            <div class="placeholder-icon">🖼️</div>
            <div class="placeholder-text">${this.alt || 'Image'}</div>
          </div>
        `;
      }
      
      // Create and insert fallback element
      const fallback = document.createElement('div');
      fallback.className = 'image-fallback';
      fallback.innerHTML = fallbackContent;
      
      // Apply appropriate styles based on image context
      if (this.classList.contains('img-fluid')) {
        fallback.style.cssText = `
          width: 100%;
          min-height: 200px;
          background: #f8faff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #e5e7eb;
          color: #6b7280;
          text-align: center;
        `;
      } else if (this.classList.contains('data-flow-diagram')) {
        fallback.style.cssText = `
          width: 100%;
          min-height: 300px;
          background: #f8faff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #e5e7eb;
          margin: 40px auto;
        `;
      }
      
      // Replace the broken image with fallback
      this.parentNode.replaceChild(fallback, this);
    });
    
    // Trigger load event if image is already cached
    if (img.complete && img.naturalHeight !== 0) {
      img.dispatchEvent(new Event('load'));
    }
  });
  
  // Add styles for fallback elements if they don't exist
  if (!document.querySelector('#image-fallback-styles')) {
    const fallbackStyles = document.createElement('style');
    fallbackStyles.id = 'image-fallback-styles';
    fallbackStyles.textContent = `
      .dashboard-placeholder,
      .image-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .data-flow-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
      }
      
      .placeholder-icon,
      .flow-step {
        font-size: 2rem;
      }
      
      .flow-arrow {
        font-size: 1.5rem;
        color: #00d4aa;
      }
      
      .placeholder-text {
        font-size: 0.9rem;
        font-weight: 500;
      }
      
      @media (max-width: 768px) {
        .data-flow-placeholder {
          flex-direction: column;
          gap: 10px;
        }
        
        .flow-arrow {
          transform: rotate(90deg);
        }
      }
    `;
    document.head.appendChild(fallbackStyles);
  }
}

// Initialize image handling
initImageHandling();// ChainSync Website - Enhanced JavaScript
document.addEventListener("DOMContentLoaded", function () {
  console.log("ChainSync Site Loaded");
  
  // Initialize all functionality
  initNavigation();
  initScrollEffects();
  initAnimations();
  initFormHandling();
  initMobileMenu();
});

// Navigation functionality
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });
  
  // Smooth scroll for anchor links
  navLinks.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('mobile-menu-open');
      this.textContent = navLinks.classList.contains('mobile-menu-open') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('mobile-menu-open');
        mobileMenuBtn.textContent = '☰';
      }
    });
    
    // Close mobile menu when window is resized
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('mobile-menu-open');
        mobileMenuBtn.textContent = '☰';
      }
    });
  }
}

// Scroll effects and animations
function initScrollEffects() {
  // Parallax effect for hero backgrounds
  const heroSections = document.querySelectorAll('.hero, .page-hero');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    heroSections.forEach(hero => {
      const rate = scrolled * -0.5;
      if (hero.querySelector('.hero-bg, .animated-bg')) {
        hero.querySelector('.hero-bg, .animated-bg').style.transform = `translateY(${rate}px)`;
      }
    });
  });
  
  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Stagger animations for child elements
        const children = entry.target.querySelectorAll('.feature-card, .tech-card, .step-card, .stat-item');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animate-in');
          }, index * 100);
        });
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.feature-card, .tech-card, .step-card, .process-step, .timeline-item');
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// Enhanced animations
function initAnimations() {
  // Counter animation for stats
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const isPercentage = finalValue.includes('%');
        const isTime = finalValue.includes('hrs') || finalValue.includes('hr');
        const isMoney = finalValue.includes(') || finalValue.includes('M');
        
        let numericValue = parseFloat(finalValue.replace(/[^\d.-]/g, ''));
        
        if (numericValue && numericValue > 0) {
          let currentValue = 0;
          const increment = numericValue / 60; // 60 frames for smooth animation
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
              currentValue = numericValue;
              clearInterval(timer);
            }
            
            let displayValue = Math.floor(currentValue);
            if (isPercentage) {
              target.textContent = displayValue + '%';
            } else if (isTime) {
              target.textContent = displayValue + (finalValue.includes('hrs') ? 'hrs' : 'hr');
            } else if (isMoney) {
              target.textContent = ' + displayValue + (finalValue.includes('M') ? 'M+' : '');
            } else {
              target.textContent = displayValue;
            }
          }, 16); // ~60fps
        }
        
        observer.unobserve(target);
      }
    });
  };
  
  const counterObserver = new IntersectionObserver(animateCounters, {
    threshold: 0.5
  });
  
  statNumbers.forEach(stat => {
    counterObserver.observe(stat);
  });
  
  // Floating animation for shapes
  const floatingShapes = document.querySelectorAll('.floating-shape, .gradient-orb');
  floatingShapes.forEach((shape, index) => {
    const randomDelay = Math.random() * 2;
    const randomDuration = 6 + Math.random() * 4;
    shape.style.animationDelay = randomDelay + 's';
    shape.style.animationDuration = randomDuration + 's';
  });
  
  // Process flow animation
  const processNodes = document.querySelectorAll('.process-node');
  if (processNodes.length > 0) {
    let currentActive = 0;
    
    setInterval(() => {
      processNodes.forEach(node => node.classList.remove('active'));
      processNodes[currentActive].classList.add('active');
      currentActive = (currentActive + 1) % processNodes.length;
    }, 3000);
  }
}

// Form handling
function initFormHandling() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        showNotification('Thank you! We\'ll be in touch soon.', 'success');
        
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
        
        this.reset();
      }, 2000);
    });
  });
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Add notification styles if they don't exist
  if (!document.querySelector('#notification-styles')) {
    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
      }
      
      .notification.show {
        transform: translateX(0);
      }
      
      .notification-content {
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .notification-success {
        border-left: 4px solid #00d4aa;
      }
      
      .notification-info {
        border-left: 4px solid #0066ff;
      }
      
      .notification-icon {
        font-weight: bold;
        font-size: 16px;
      }
      
      .notification-success .notification-icon {
        color: #00d4aa;
      }
      
      .notification-info .notification-icon {
        color: #0066ff;
      }
      
      .notification-message {
        flex: 1;
        font-size: 14px;
      }
      
      .notification-close {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #999;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .notification-close:hover {
        color: #333;
      }
    `;
    document.head.appendChild(styles);
  }
  
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Performance optimizations
const optimizedScrollHandler = throttle(function() {
  const scrolled = window.pageYOffset;
  const heroSections = document.querySelectorAll('.hero, .page-hero');
  
  heroSections.forEach(hero => {
    const heroHeight = hero.offsetHeight;
    if (scrolled < heroHeight) {
      const rate = scrolled * -0.3;
      const bg = hero.querySelector('.hero-bg, .animated-bg');
      if (bg) {
        bg.style.transform = `translateY(${rate}px)`;
      }
    }
  });
}, 16);

// Replace the scroll event in initScrollEffects with the optimized version
window.removeEventListener('scroll', initScrollEffects);
window.addEventListener('scroll', optimizedScrollHandler);

// Lazy loading for images (if any are added later)
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Initialize lazy loading
initLazyLoading();

// Add mobile-specific styles
const mobileStyles = `
  @media (max-width: 768px) {
    .nav-links.mobile-menu-open {
      display: flex;
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 20px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      z-index: 999;
    }
    
    .nav-links.mobile-menu-open a {
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      text-align: center;
    }
    
    .nav-links.mobile-menu-open a:last-child {
      border-bottom: none;
    }
  }
`;

// Add mobile styles to head if they don't exist
if (!document.querySelector('#mobile-menu-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'mobile-menu-styles';
  styleSheet.textContent = mobileStyles;
  document.head.appendChild(styleSheet);
}

// Error handling for missing elements
window.addEventListener('error', function(e) {
  console.warn('ChainSync JS Warning:', e.message);
});

// Accessibility improvements
function initAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #0066ff;
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10001;
    transition: top 0.3s;
  `;
  
  skipLink.addEventListener('focus', function() {
    this.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main content ID if it doesn't exist
  const main = document.querySelector('main') || document.querySelector('.hero, .page-hero');
  if (main && !main.id) {
    main.id = 'main-content';
  }
  
  // Keyboard navigation for buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// Initialize accessibility features
initAccessibility();

console.log("ChainSync website fully loaded with enhanced features!");
