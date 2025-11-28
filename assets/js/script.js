/**
 * ChainSync - Complete UI Revamp JavaScript
 * Enhanced interactions with counter animations, dynamic effects, and modern UX
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
    console.log('ChainSync: Initializing revamped experience...');

    // Core functionality
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initButtonEffects();
    initImageHandling();
    initSmoothScroll();
    initParallax();
    initCounterAnimations();
    initCardAnimations();

    console.log('ChainSync: Revamped experience loaded successfully');
  }

  /* ==========================================
     Navigation - Dark Theme with Glow
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

      // Auto-hide on scroll down (only on desktop)
      if (window.innerWidth > 768 && scrollY > 300) {
        if (scrollY > lastScrollY + 10) {
          // Scrolling down
          navbar.style.transform = 'translateY(-100%)';
        } else if (scrollY < lastScrollY - 10) {
          // Scrolling up
          navbar.style.transform = 'translateY(0)';
        }
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    // Throttled scroll handler
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavbar();
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
     Mobile Menu - Enhanced
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
          if (mobileBtn) {
            mobileBtn.innerHTML = '☰';
            mobileBtn.setAttribute('aria-expanded', 'false');
          }
          document.body.style.overflow = '';
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (navContainer && !navContainer.contains(e.target) && navLinks.classList.contains('mobile-open')) {
          navLinks.classList.remove('mobile-open');
          if (mobileBtn) {
            mobileBtn.innerHTML = '☰';
            mobileBtn.setAttribute('aria-expanded', 'false');
          }
          document.body.style.overflow = '';
        }
      });
    }
  }

  /* ==========================================
     Scroll Animations with Stagger Effect
     ========================================== */
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';

          // Add stagger effect for grid items
          const parent = entry.target.parentElement;
          if (parent && (parent.classList.contains('feature-grid') || parent.classList.contains('grid-3'))) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.15}s`;
          }

          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe cards and sections
    const animateElements = document.querySelectorAll(
      '.feature-card, .tech-card, .step-card, .stat-item, .scenario-card, .process-node'
    );

    animateElements.forEach((el) => {
      // Set initial state
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px) scale(0.95)';
      el.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';

      observer.observe(el);
    });
  }

  /* ==========================================
     Counter Animations for Stats
     ========================================== */
  function initCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          animateCounter(entry.target);
          entry.target.dataset.counted = 'true';
          counterObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    statNumbers.forEach(stat => {
      counterObserver.observe(stat);
    });
  }

  function animateCounter(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const hasMinus = text.includes('-');
    const hasHours = text.includes('hrs');
    const hasM = text.includes('M');

    // Extract number
    let numberMatch = text.match(/[\d.]+/);
    if (!numberMatch) return;

    const targetNumber = parseFloat(numberMatch[0]);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;

      if (step >= steps) {
        current = targetNumber;
        clearInterval(timer);
      }

      let displayValue = current.toFixed(targetNumber % 1 !== 0 ? 1 : 0);

      // Add suffix back
      if (hasPercent) displayValue += '%';
      if (hasPlus) displayValue = displayValue + '+';
      if (hasM) displayValue = displayValue.split('.')[0] + 'M+';
      if (hasHours) displayValue += 'hrs';

      element.textContent = displayValue;
    }, duration / steps);
  }

  /* ==========================================
     Card Hover 3D Effect
     ========================================== */
  function initCardAnimations() {
    const cards = document.querySelectorAll('.feature-card, .tech-card, .scenario-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  /* ==========================================
     Button Effects - Enhanced Ripple
     ========================================== */
  function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');

    buttons.forEach(btn => {
      // Ensure button has proper positioning
      if (window.getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }

      // Add ripple effect on click
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
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          animation: rippleEffect 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        `;

        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 800);
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
    if (!document.querySelector('#ripple-effect-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-effect-animation';
      style.textContent = `
        @keyframes rippleEffect {
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
     Image Handling with Context Icons
     ========================================== */
  function initImageHandling() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
      // Add loading state
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.6s ease';

      const handleLoad = () => {
        img.style.opacity = '1';
      };

      const handleError = () => {
        // Create fallback with contextual icon
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';

        const alt = img.alt.toLowerCase();
        let icon = '🖼️';

        if (alt.includes('water')) icon = '💧';
        else if (alt.includes('waste')) icon = '♻️';
        else if (alt.includes('remediation') || alt.includes('environment')) icon = '🌱';
        else if (alt.includes('data') || alt.includes('dashboard')) icon = '📊';
        else if (alt.includes('icon') || alt.includes('tech')) icon = '⚙️';

        fallback.innerHTML = `<span style="font-size: 4rem; filter: drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3));">${icon}</span>`;
        fallback.style.cssText = `
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 100px;
          min-height: 100px;
          background: linear-gradient(135deg, #f7f9fc 0%, #e6f9f5 100%);
          border-radius: 16px;
          border: 2px dashed rgba(139, 92, 246, 0.3);
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
     Smooth Scroll for Anchors
     ========================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;

        const targetId = href.substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          e.preventDefault();
          const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 30;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /* ==========================================
     Parallax Effect for Hero
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
        // Parallax for background
        if (heroBg) {
          const bgOffset = scrolled * 0.5;
          heroBg.style.transform = `translateY(${bgOffset}px)`;
        }

        // Individual parallax for shapes
        floatingShapes.forEach((shape, index) => {
          const speed = 0.3 + (index * 0.1);
          const offset = scrolled * speed;
          shape.style.transform = `translateY(${offset}px)`;
        });
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
     Process Node Animations
     ========================================== */
  function initProcessNodeAnimations() {
    const processNodes = document.querySelectorAll('.process-node, .process-step');

    processNodes.forEach((node, index) => {
      node.addEventListener('mouseenter', function() {
        // Pulse effect on hover
        const icon = this.querySelector('.node-icon, .step-icon');
        if (icon) {
          icon.style.animation = 'pulse 0.6s ease-in-out';
          setTimeout(() => {
            icon.style.animation = '';
          }, 600);
        }
      });
    });

    // Add pulse animation
    if (!document.querySelector('#pulse-animation')) {
      const style = document.createElement('style');
      style.id = 'pulse-animation';
      style.textContent = `
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  initProcessNodeAnimations();

  /* ==========================================
     Form Enhancement
     ========================================== */
  function initFormEnhancement() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');

      inputs.forEach(input => {
        // Focus effects
        input.addEventListener('focus', function() {
          this.parentElement?.classList.add('focused');
          this.style.borderColor = '#8b5cf6';
          this.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
        });

        input.addEventListener('blur', function() {
          if (!this.value) {
            this.parentElement?.classList.remove('focused');
          }
          this.style.borderColor = '';
          this.style.boxShadow = '';
        });

        // Real-time validation
        input.addEventListener('input', function() {
          if (this.validity.valid) {
            this.style.borderColor = '#00f0ff';
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
     Cursor Trail Effect (Optional Enhancement)
     ========================================== */
  function initCursorTrail() {
    // Only on desktop and not on touch devices
    if (window.innerWidth < 768 || ('ontouchstart' in window)) {
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    let mouseX = 0;
    let mouseY = 0;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 60;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        if (this.size > 0.1) this.size -= 0.05;
      }

      draw() {
        ctx.fillStyle = `rgba(139, 92, 246, ${this.life / 60})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create particles occasionally
      if (Math.random() > 0.8) {
        particles.push(new Particle(mouseX, mouseY));
      }
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Resize canvas
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  // Uncomment to enable cursor trail
  // initCursorTrail();

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

        console.log('ChainSync Performance Metrics:');
        console.log(`  Total Page Load: ${pageLoadTime}ms`);
        console.log(`  Server Response: ${connectTime}ms`);
        console.log(`  DOM Rendering: ${renderTime}ms`);
      }, 0);
    });
  }

  /* ==========================================
     Accessibility Enhancements
     ========================================== */
  function initAccessibility() {
    // Skip to content link
    if (!document.querySelector('.skip-to-content')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-to-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.style.cssText = `
        position: absolute;
        left: -9999px;
        z-index: 9999;
        padding: 1em 1.5em;
        background: linear-gradient(135deg, #8b5cf6 0%, #00f0ff 100%);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
      `;
      skipLink.addEventListener('focus', function() {
        this.style.left = '20px';
        this.style.top = '20px';
      });
      skipLink.addEventListener('blur', function() {
        this.style.left = '-9999px';
      });
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Ensure interactive elements are keyboard accessible
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
    console.warn('ChainSync: Error detected -', e.message);
  }, true);

  // Expose public API
  window.ChainSync = {
    version: '3.0.0',
    theme: 'dark-vibrant',
    refresh: init,
    enableCursorTrail: initCursorTrail
  };

})();
