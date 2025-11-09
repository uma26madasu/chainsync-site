/**
 * ChainSync - Enhanced JavaScript for smooth UI/UX
 * Modern animations, interactions, and user experience enhancements
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    console.log('ChainSync: Initializing enhanced experience...');

    // Core functionality
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initButtonEffects();
    initImageHandling();
    initSmoothScroll();
    initParallax();

    console.log('ChainSync: Enhanced experience loaded successfully');
  }

  /* ==========================================
     Navigation Enhancement
     ========================================== */
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScrollY = window.pageYOffset;
    let ticking = false;

    function updateNavbar() {
      const scrollY = window.pageYOffset;

      // Add scrolled class for enhanced styling
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide navbar on scroll down, show on scroll up (optional enhancement)
      if (scrollY > 200) {
        if (scrollY > lastScrollY) {
          // Scrolling down
          navbar.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          navbar.style.transform = 'translateY(0)';
        }
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    // Throttled scroll handler for performance
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavbar();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Set active state based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = navbar.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.includes(currentPage) || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ==========================================
     Mobile Menu
     ========================================== */
  function initMobileMenu() {
    let mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');

    // Create mobile menu button if it doesn't exist
    if (!mobileBtn && navContainer) {
      mobileBtn = document.createElement('button');
      mobileBtn.className = 'mobile-menu-btn';
      mobileBtn.setAttribute('aria-label', 'Toggle menu');
      mobileBtn.innerHTML = '☰';
      navContainer.appendChild(mobileBtn);
    }

    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', function() {
        const isOpen = navLinks.classList.toggle('mobile-open');
        this.innerHTML = isOpen ? '✕' : '☰';
        this.setAttribute('aria-expanded', isOpen);

        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close menu when clicking on a link
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
          mobileBtn.innerHTML = '☰';
          mobileBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && navLinks.classList.contains('mobile-open')) {
          navLinks.classList.remove('mobile-open');
          mobileBtn.innerHTML = '☰';
          mobileBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    }
  }

  /* ==========================================
     Scroll Animations (Intersection Observer)
     ========================================== */
  function initScrollAnimations() {
    // Check if browser supports Intersection Observer
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';

          // Add stagger effect for grid items
          const parent = entry.target.parentElement;
          if (parent && parent.classList.contains('feature-grid')) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
          }

          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe cards and sections
    const animateElements = document.querySelectorAll(
      '.feature-card, .tech-card, .step-card, .stat-item, .scenario-card'
    );

    animateElements.forEach((el) => {
      // Set initial state
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

      observer.observe(el);
    });
  }

  /* ==========================================
     Button Effects (Ripple)
     ========================================== */
  function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');

    buttons.forEach(btn => {
      // Ensure button has proper positioning for ripple effect
      if (window.getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }

      // Add ripple effect on click
      btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          z-index: 1;
        `;

        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      });

      // Keyboard accessibility
      btn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });

    // Add ripple animation to stylesheet if not present
    if (!document.querySelector('#ripple-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation';
      style.textContent = `
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* ==========================================
     Image Handling & Fallbacks
     ========================================== */
  function initImageHandling() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
      // Add loading state
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';

      const handleLoad = () => {
        img.style.opacity = '1';
      };

      const handleError = () => {
        // Create fallback element
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';

        // Choose icon based on alt text
        const alt = img.alt.toLowerCase();
        let icon = '🖼️';

        if (alt.includes('water')) icon = '💧';
        else if (alt.includes('waste')) icon = '♻️';
        else if (alt.includes('remediation') || alt.includes('environment')) icon = '🌱';
        else if (alt.includes('data') || alt.includes('dashboard')) icon = '📊';
        else if (alt.includes('icon')) icon = '🔧';

        fallback.innerHTML = `<span style="font-size: 3rem;">${icon}</span>`;
        fallback.style.cssText = `
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          min-height: 80px;
          background: linear-gradient(135deg, #f8faff 0%, #e6f9f5 100%);
          border-radius: 12px;
          border: 2px dashed #e5e7eb;
          margin: 0 auto;
        `;

        if (img.parentNode) {
          img.parentNode.replaceChild(fallback, img);
        }
      };

      if (img.complete && img.naturalHeight > 0) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);
      }
    });
  }

  /* ==========================================
     Smooth Scroll for Anchor Links
     ========================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const targetId = href.substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          e.preventDefault();
          const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /* ==========================================
     Parallax Effect for Hero Background
     ========================================== */
  function initParallax() {
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');

    if (!hero || !heroBg) return;

    let ticking = false;

    function updateParallax() {
      const scrolled = window.pageYOffset;
      const heroHeight = hero.offsetHeight;

      if (scrolled < heroHeight) {
        const offset = scrolled * 0.4;
        heroBg.style.transform = `translateY(${offset}px)`;
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ==========================================
     Form Enhancement (for contact page)
     ========================================== */
  function initFormEnhancement() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');

      inputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
          this.parentElement?.classList.add('focused');
        });

        input.addEventListener('blur', function() {
          if (!this.value) {
            this.parentElement?.classList.remove('focused');
          }
        });

        // Real-time validation feedback
        input.addEventListener('input', function() {
          if (this.validity.valid) {
            this.style.borderColor = '#00d4aa';
          } else if (this.value) {
            this.style.borderColor = '#ff6b6b';
          } else {
            this.style.borderColor = '#e5e7eb';
          }
        });
      });
    });
  }

  // Initialize form enhancement if forms exist
  if (document.querySelector('form')) {
    initFormEnhancement();
  }

  /* ==========================================
     Performance Monitoring
     ========================================== */
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('ChainSync Performance:');
        console.log(`  Page Load: ${pageLoadTime}ms`);
        console.log(`  Server Response: ${connectTime}ms`);
        console.log(`  DOM Rendering: ${renderTime}ms`);
      }, 0);
    });
  }

  /* ==========================================
     Accessibility Enhancements
     ========================================== */
  function initAccessibility() {
    // Add skip to content link
    if (!document.querySelector('.skip-to-content')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-to-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.style.cssText = `
        position: absolute;
        left: -9999px;
        z-index: 999;
        padding: 1em;
        background: #0066ff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
      `;
      skipLink.addEventListener('focus', function() {
        this.style.left = '10px';
        this.style.top = '10px';
      });
      skipLink.addEventListener('blur', function() {
        this.style.left = '-9999px';
      });
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('[onclick], .mobile-menu-btn');
    interactiveElements.forEach(el => {
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }
    });
  }

  initAccessibility();

  /* ==========================================
     Error Handling
     ========================================== */
  window.addEventListener('error', function(e) {
    console.warn('ChainSync: JavaScript error detected', e.message);
  }, true);

  // Expose public API for external scripts if needed
  window.ChainSync = {
    version: '2.0.0',
    refresh: init
  };

})();
