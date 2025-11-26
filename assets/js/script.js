/**
 * ChainSync - Enhanced JavaScript for smooth UI/UX
 * Refreshed with fluid animations, smooth transitions, and modern interactions
 * Version 3.0.0
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    scrollThreshold: 50,
    navHideThreshold: 200,
    revealThreshold: 0.1,
    parallaxSpeed: 0.35,
    counterDuration: 2500,
    loaderMinDuration: 600,
    smoothScrollDuration: 1000,
    debounceDelay: 16 // ~60fps
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    console.log('ChainSync: Initializing enhanced experience v3.0...');

    // Show page loader initially
    createPageLoader();

    // Core functionality
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initRevealAnimations();
    initButtonEffects();
    initImageHandling();
    initSmoothScroll();
    initParallax();
    initCounterAnimations();
    initCursorEffects();
    initAccessibility();

    // Hide loader when everything is ready
    window.addEventListener('load', hidePageLoader);

    console.log('ChainSync: Enhanced experience loaded successfully');
  }

  /* ==========================================
     Page Loader
     ========================================== */
  function createPageLoader() {
    if (document.querySelector('.page-loader')) return;

    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-spinner"></div>
      <div class="loader-text">Loading</div>
    `;
    document.body.appendChild(loader);
    document.body.classList.add('loading');
  }

  function hidePageLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    // Ensure minimum display time for smooth UX
    setTimeout(() => {
      // Add a smooth fade out effect
      loader.style.opacity = '0';
      loader.style.transform = 'scale(0.98)';

      document.body.classList.remove('loading');
      document.body.classList.add('loaded');

      // Wait for CSS transition before removing from DOM
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
        }, 700);
      }, 100);
    }, config.loaderMinDuration);
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
      if (scrollY > config.scrollThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Smooth hide/show on scroll
      if (scrollY > config.navHideThreshold) {
        if (scrollY > lastScrollY + 5) {
          navbar.classList.add('hidden');
        } else if (scrollY < lastScrollY - 5) {
          navbar.classList.remove('hidden');
        }
      } else {
        navbar.classList.remove('hidden');
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    // Throttled scroll handler for performance
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }, { passive: true });

    // Set active state based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = navbar.querySelectorAll('.nav-links a:not(.nav-cta)');

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
      mobileBtn.setAttribute('aria-expanded', 'false');
      mobileBtn.innerHTML = '☰';
      navContainer.appendChild(mobileBtn);
    }

    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', function() {
        const isOpen = navLinks.classList.toggle('mobile-open');
        this.innerHTML = isOpen ? '✕' : '☰';
        this.setAttribute('aria-expanded', isOpen);
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
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      threshold: config.revealThreshold,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';

          // Add stagger effect for grid items
          const parent = entry.target.parentElement;
          if (parent && (parent.classList.contains('feature-grid') || parent.classList.contains('grid-3'))) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
          }

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe cards and sections
    const animateElements = document.querySelectorAll(
      '.feature-card, .tech-card, .step-card, .stat-item, .scenario-card, .process-step'
    );

    animateElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      observer.observe(el);
    });
  }

  /* ==========================================
     Reveal Animations for Sections
     ========================================== */
  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // Handle stagger children
          if (entry.target.classList.contains('stagger-children')) {
            entry.target.classList.add('active');
          }

          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    });

    // Observe reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => {
      revealObserver.observe(el);
    });

    // Observe section titles and tags
    document.querySelectorAll('.section-tag, .section-title, .page-title').forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        revealObserver.observe(el);
      }
    });
  }

  /* ==========================================
     Button Effects (Ripple & Magnetic) - Enterprise Grade
     ========================================== */
  function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');

    buttons.forEach(btn => {
      if (window.getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }

      // Enhanced ripple effect with better performance
      btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          animation: rippleExpand 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          z-index: 1;
        `;

        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 700);
      });

      // Smoother magnetic effect with throttling
      let magneticRAF = null;
      btn.addEventListener('mousemove', function(e) {
        if (magneticRAF) return;

        magneticRAF = requestAnimationFrame(() => {
          const rect = this.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

          // Subtle movement for professional feel
          const moveX = x * 6;
          const moveY = y * 6;

          this.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-3px)`;
          magneticRAF = null;
        });
      });

      btn.addEventListener('mouseleave', function() {
        if (magneticRAF) {
          cancelAnimationFrame(magneticRAF);
          magneticRAF = null;
        }
        this.style.transform = '';
        this.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        setTimeout(() => {
          this.style.transition = '';
        }, 400);
      });

      // Keyboard accessibility
      btn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });

    // Add enhanced ripple animation
    if (!document.querySelector('#ripple-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation';
      style.textContent = `
        @keyframes rippleExpand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
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
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';

      const handleLoad = () => {
        img.style.opacity = '1';
      };

      const handleError = () => {
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';

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

          // Use smooth scroll with easing
          smoothScrollTo(targetPosition, 800);

          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  // Custom smooth scroll with easing - Enterprise grade
  function smoothScrollTo(targetPosition, duration = config.smoothScrollDuration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Handle edge cases
    if (Math.abs(distance) < 1) return;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Use a more sophisticated easing function
      const easeProgress = easeInOutQuart(progress);
      const run = startPosition + (distance * easeProgress);

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Ensure we end exactly at target
        window.scrollTo(0, targetPosition);
      }
    }

    // Smooth easing function for professional feel
    function easeInOutQuart(t) {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - 8 * (--t) * t * t * t;
    }

    requestAnimationFrame(animation);
  }

  /* ==========================================
     Parallax Effect for Hero Background
     ========================================== */
  function initParallax() {
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    const floatingShapes = document.querySelectorAll('.floating-shape');

    if (!hero) return;

    let ticking = false;

    function updateParallax() {
      const scrolled = window.pageYOffset;
      const heroHeight = hero.offsetHeight;

      if (scrolled < heroHeight) {
        if (heroBg) {
          heroBg.style.transform = `translateY(${scrolled * config.parallaxSpeed}px)`;
        }

        // Parallax for floating shapes at different speeds
        floatingShapes.forEach((shape, index) => {
          const speed = 0.2 + (index * 0.1);
          shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ==========================================
     Counter Animations for Stats
     ========================================== */
  function initCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (!statNumbers.length || !('IntersectionObserver' in window)) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
      // Store original text
      stat.dataset.target = stat.textContent;
      counterObserver.observe(stat);
    });
  }

  function animateCounter(element) {
    const target = element.dataset.target;
    const hasPercent = target.includes('%');
    const hasPlus = target.includes('+');
    const hasDollar = target.includes('$');
    const hasK = target.includes('K') || target.includes('k');
    const hasM = target.includes('M') || target.includes('m');

    // Extract number
    let number = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(number)) {
      element.textContent = target;
      return;
    }

    const duration = config.counterDuration;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = number * easeProgress;

      let displayValue = '';
      if (hasDollar) displayValue += '$';

      if (hasM) {
        displayValue += current.toFixed(1) + 'M';
      } else if (hasK) {
        displayValue += Math.round(current) + 'K';
      } else if (hasPercent) {
        displayValue += Math.round(current) + '%';
      } else {
        displayValue += Math.round(current);
      }

      if (hasPlus) displayValue += '+';

      element.textContent = displayValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target; // Ensure exact final value
      }
    }

    requestAnimationFrame(updateCounter);
  }

  /* ==========================================
     Cursor Effects (Optional)
     ========================================== */
  function initCursorEffects() {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(0, 102, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.15s ease, border-color 0.2s ease, width 0.2s ease, height 0.2s ease;
      transform: translate(-50%, -50%);
      mix-blend-mode: difference;
      display: none;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.display = 'block';
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    // Enlarge on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.borderColor = 'rgba(0, 212, 170, 0.8)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.borderColor = 'rgba(0, 102, 255, 0.5)';
      });
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
    });
  }

  /* ==========================================
     Form Enhancement
     ========================================== */
  function initFormEnhancement() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');

      inputs.forEach(input => {
        input.addEventListener('focus', function() {
          this.parentElement?.classList.add('focused');
        });

        input.addEventListener('blur', function() {
          if (!this.value) {
            this.parentElement?.classList.remove('focused');
          }
        });

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

  if (document.querySelector('form')) {
    initFormEnhancement();
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
        z-index: 9999;
        padding: 1em;
        background: #0066ff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 600;
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
    document.querySelectorAll('[onclick], .mobile-menu-btn').forEach(el => {
      if (!el.hasAttribute('tabindex') && el.tagName !== 'BUTTON' && el.tagName !== 'A') {
        el.setAttribute('tabindex', '0');
      }
    });
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
     Error Handling
     ========================================== */
  window.addEventListener('error', function(e) {
    console.warn('ChainSync: JavaScript error detected', e.message);
  }, true);

  // Expose public API
  window.ChainSync = {
    version: '3.0.0',
    refresh: init,
    smoothScrollTo: smoothScrollTo
  };

})();
