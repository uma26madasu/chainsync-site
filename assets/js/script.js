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
    initPageLoader();
    initScrollProgress();
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initButtonEffects();
    initImageHandling();
    initSmoothScroll();
    initParallax();
    initCounterAnimations();
    initCardAnimations();
    initFadeInSections();
    initRevealOnLoad();
    initInteractiveTooltips();
    initClickableCards();
    initProgressBars();
    initHoverEffects();
    initScrollTriggers();

    console.log('ChainSync: Revamped experience loaded successfully');
  }

  /* ==========================================
     Page Loader
     ========================================== */
  function initPageLoader() {
    // Create loader if it doesn't exist
    if (!document.querySelector('.page-loader')) {
      const loader = document.createElement('div');
      loader.className = 'page-loader';
      loader.innerHTML = `
        <div class="loader-content">
          <div class="loader-logo">ChainSync</div>
          <div class="loader-spinner"></div>
        </div>
      `;
      document.body.insertBefore(loader, document.body.firstChild);
    }

    const loader = document.querySelector('.page-loader');

    window.addEventListener('load', () => {
      setTimeout(() => {
        if (loader) {
          loader.classList.add('loaded');
          // Remove from DOM after transition
          setTimeout(() => {
            loader.remove();
          }, 500);
        }
      }, 800);
    });
  }

  /* ==========================================
     Scroll Progress Indicator
     ========================================== */
  function initScrollProgress() {
    // Create progress bar if it doesn't exist
    if (!document.querySelector('.scroll-progress')) {
      const progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      document.body.appendChild(progressBar);
    }

    const progressBar = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.pageYOffset / windowHeight) * 100;

      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    }, { passive: true });
  }

  /* ==========================================
     Reveal Elements on Load
     ========================================== */
  function initRevealOnLoad() {
    const revealElements = document.querySelectorAll('.reveal-on-load');

    revealElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('revealed');
      }, 100 * index);
    });
  }

  /* ==========================================
     Fade In Sections on Scroll
     ========================================== */
  function initFadeInSections() {
    if (!('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      section.classList.add('fade-in-section');
    });

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
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
    const animateElements = document.querySelectorAll(
      '.feature-card, .tech-card, .step-card, .stat-item, .scenario-card, .process-node'
    );

    // Fallback: Show all elements after timeout to prevent blank screens
    const fallbackTimeout = setTimeout(() => {
      animateElements.forEach(el => {
        if (el.style.opacity === '0') {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, 2000);

    if (!('IntersectionObserver' in window)) {
      // No IntersectionObserver support - show everything immediately
      animateElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      });
      clearTimeout(fallbackTimeout);
      return;
    }

    const observerOptions = {
      threshold: 0.05, // Lower threshold for better trigger
      rootMargin: '0px 0px -50px 0px' // Less aggressive margin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';

          // Add stagger effect for grid items
          const parent = entry.target.parentElement;
          if (parent && (parent.classList.contains('feature-grid') || parent.classList.contains('grid-3') || parent.classList.contains('use-cases-section'))) {
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
    animateElements.forEach((el) => {
      // Set initial state
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px) scale(0.95)';
      el.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';

      observer.observe(el);

      // Individual fallback for each element
      setTimeout(() => {
        if (el.style.opacity === '0') {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
        }
      }, 3000);
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
     Card Hover 3D Effect - Ultra Smooth
     ========================================== */
  function initCardAnimations() {
    const cards = document.querySelectorAll('.feature-card, .tech-card, .scenario-card');

    cards.forEach(card => {
      let cardX = 0, cardY = 0;
      let currentX = 0, currentY = 0;
      let rafId = null;

      // Smooth interpolation
      function lerp(start, end, factor) {
        return start + (end - start) * factor;
      }

      function updateCardTransform() {
        currentX = lerp(currentX, cardX, 0.1);
        currentY = lerp(currentY, cardY, 0.1);

        const rotateX = currentY * -8;
        const rotateY = currentX * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) translateZ(0)`;

        // Continue animation if there's still movement
        if (Math.abs(currentX - cardX) > 0.01 || Math.abs(currentY - cardY) > 0.01) {
          rafId = requestAnimationFrame(updateCardTransform);
        }
      }

      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        cardX = (x - centerX) / centerX;
        cardY = (y - centerY) / centerY;

        if (!rafId) {
          rafId = requestAnimationFrame(updateCardTransform);
        }
      });

      card.addEventListener('mouseleave', function() {
        cardX = 0;
        cardY = 0;

        // Smooth return to original position
        function resetTransform() {
          currentX = lerp(currentX, 0, 0.15);
          currentY = lerp(currentY, 0, 0.15);

          const rotateX = currentY * -8;
          const rotateY = currentX * 8;
          const lift = Math.max(0, 8 - Math.abs(currentX * 8) - Math.abs(currentY * 8));

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-${lift}px) translateZ(0)`;

          if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
            requestAnimationFrame(resetTransform);
          } else {
            card.style.transform = '';
            rafId = null;
          }
        }

        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        requestAnimationFrame(resetTransform);
      });

      // Add smooth transition
      card.style.transition = 'box-shadow 0.4s ease, transform 0.08s ease-out';
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
     Smooth Scroll for Anchors - Ultra Fluid
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

          // Ultra-smooth custom easing scroll
          smoothScrollTo(targetPosition, 800);

          // Update URL
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });

    // Custom smooth scroll with easing
    function smoothScrollTo(targetPosition, duration) {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function easeInOutCubic(t) {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
  }

  /* ==========================================
     Parallax Effect for Hero - Ultra Smooth
     ========================================== */
  function initParallax() {
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    const floatingShapes = document.querySelectorAll('.floating-shape');

    if (!hero) return;

    let ticking = false;
    let lastScrollY = 0;
    let currentScrollY = 0;

    // Smooth interpolation for fluid motion
    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function updateParallax() {
      const scrolled = window.pageYOffset;
      const heroHeight = hero.offsetHeight;

      // Smooth scroll interpolation for fluid motion
      currentScrollY = lerp(currentScrollY, scrolled, 0.1);

      if (currentScrollY < heroHeight) {
        // Parallax for background with smooth easing
        if (heroBg) {
          const bgOffset = currentScrollY * 0.4;
          heroBg.style.transform = `translateY(${bgOffset}px) translateZ(0)`;
          heroBg.style.transition = 'transform 0.1s ease-out';
        }

        // Individual parallax for shapes with varying speeds
        floatingShapes.forEach((shape, index) => {
          const speed = 0.2 + (index * 0.15);
          const offset = currentScrollY * speed;
          const rotation = currentScrollY * 0.05 * (index % 2 === 0 ? 1 : -1);
          shape.style.transform = `translateY(${offset}px) rotate(${rotation}deg) translateZ(0)`;
          shape.style.transition = 'transform 0.1s ease-out';
        });
      }

      // Continue animation loop if there's still motion
      if (Math.abs(currentScrollY - scrolled) > 0.5) {
        requestAnimationFrame(updateParallax);
      } else {
        ticking = false;
      }
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });

    // Start initial animation loop
    requestAnimationFrame(updateParallax);
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
     Interactive Tooltips
     ========================================== */
  function initInteractiveTooltips() {
    // Add tooltips to stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
      const label = item.querySelector('.stat-label')?.textContent || '';
      const number = item.querySelector('.stat-number')?.textContent || '';

      if (label && number) {
        item.setAttribute('data-tooltip', `Goal: ${number} ${label}`);
        item.style.position = 'relative';
        item.style.cursor = 'help';
      }
    });

    // Add tooltips to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      card.setAttribute('data-card-index', index + 1);
      card.style.cursor = 'pointer';
    });

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'interactive-tooltip';
    tooltip.style.cssText = `
      position: fixed;
      background: linear-gradient(135deg, #1B4332 0%, #0077B6 100%);
      color: white;
      padding: 12px 20px;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 600;
      pointer-events: none;
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 10000;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      white-space: nowrap;
    `;
    document.body.appendChild(tooltip);

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-tooltip]');
      if (target) {
        const text = target.getAttribute('data-tooltip');
        tooltip.textContent = text;
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
      }
    });

    document.addEventListener('mousemove', (e) => {
      const target = e.target.closest('[data-tooltip]');
      if (target) {
        tooltip.style.left = e.clientX + 20 + 'px';
        tooltip.style.top = e.clientY + 20 + 'px';
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-tooltip]');
      if (target) {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(-10px)';
      }
    });
  }

  /* ==========================================
     Clickable Cards with Pulse Effect
     ========================================== */
  function initClickableCards() {
    const cards = document.querySelectorAll('.scenario-card, .feature-card');

    cards.forEach(card => {
      // Add click effect
      card.addEventListener('click', function(e) {
        // Don't trigger if clicking a link
        if (e.target.tagName === 'A') return;

        // Create pulse effect
        const pulse = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        pulse.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          animation: cardPulse 0.8s ease-out;
          z-index: 0;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(pulse);

        setTimeout(() => pulse.remove(), 800);
      });

      // Add subtle scale on click
      card.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
      });

      card.addEventListener('mouseup', function() {
        this.style.transform = '';
      });
    });

    // Add animation
    if (!document.querySelector('#card-pulse-animation')) {
      const style = document.createElement('style');
      style.id = 'card-pulse-animation';
      style.textContent = `
        @keyframes cardPulse {
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* ==========================================
     Animated Progress Bars
     ========================================== */
  function initProgressBars() {
    // Look for elements that could have progress indicators
    const responseComparisons = document.querySelectorAll('.response-comparison');

    responseComparisons.forEach(comparison => {
      const beforeBox = comparison.querySelector('.before-box');
      const afterBox = comparison.querySelector('.after-box');

      if (beforeBox && afterBox) {
        // Add progress bars
        addProgressBar(beforeBox, 30, '#E76F51'); // 30% for slow response
        addProgressBar(afterBox, 95, '#52B788'); // 95% for fast response
      }
    });

    function addProgressBar(element, percentage, color) {
      const progressContainer = document.createElement('div');
      progressContainer.style.cssText = `
        width: 100%;
        height: 8px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-top: 16px;
        overflow: hidden;
      `;

      const progressBar = document.createElement('div');
      progressBar.style.cssText = `
        height: 100%;
        width: 0%;
        background: ${color};
        border-radius: 4px;
        transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 10px ${color};
      `;

      progressContainer.appendChild(progressBar);
      element.appendChild(progressContainer);

      // Animate when in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              progressBar.style.width = percentage + '%';
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(element);
    }
  }

  /* ==========================================
     Enhanced Hover Effects
     ========================================== */
  function initHoverEffects() {
    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

    buttons.forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const moveX = x * 0.1;
        const moveY = y * 0.1;

        this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
      });

      btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });

    // Add glow effect to icons
    const icons = document.querySelectorAll('.feature-icon, .scenario-icon, .check-icon');
    icons.forEach(icon => {
      icon.style.transition = 'all 0.3s ease';

      icon.parentElement?.addEventListener('mouseenter', function() {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.filter = 'drop-shadow(0 8px 24px rgba(0, 180, 216, 0.4))';
      });

      icon.parentElement?.addEventListener('mouseleave', function() {
        icon.style.transform = '';
        icon.style.filter = '';
      });
    });

    // Add tilt effect to process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
      step.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.03)';
        this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });

      step.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  /* ==========================================
     Scroll-Triggered Animations
     ========================================== */
  function initScrollTriggers() {
    // Animate section tags as they appear
    const sectionTags = document.querySelectorAll('.section-tag');

    sectionTags.forEach(tag => {
      tag.style.opacity = '0';
      tag.style.transform = 'translateX(-50px) scale(0.8)';
      tag.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });

    const tagObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0) scale(1)';
          }, 100);
          tagObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    sectionTags.forEach(tag => tagObserver.observe(tag));

    // Animate benefits list items
    const benefitItems = document.querySelectorAll('.benefits-list li');

    benefitItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-30px)';
      item.style.transition = 'all 0.5s ease';
    });

    const benefitsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('li');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateX(0)';
            }, index * 100);
          });
          benefitsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const benefitsLists = document.querySelectorAll('.benefits-list');
    benefitsLists.forEach(list => benefitsObserver.observe(list));

    // Add scroll-based parallax to floating shapes
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll('.floating-shape');

      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }, { passive: true });
  }

  /* ==========================================
     Error Handling
     ========================================== */
  window.addEventListener('error', function(e) {
    console.warn('ChainSync: Error detected -', e.message);
  }, true);

  // Expose public API
  window.ChainSync = {
    version: '3.1.0',
    theme: 'environmental-interactive',
    refresh: init,
    enableCursorTrail: initCursorTrail
  };

})();
