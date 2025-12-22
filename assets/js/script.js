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
    console.log('ChainSync: Initializing NEXT-GENERATION experience...');

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
    initDynamicParticles();
    initTextAnimations();
    initCustomCursor();
    initMagneticElements();
    initScrollColorShift();
    initParticleExplosions();
    initMorphingBlobs();
    initAdvanced3DTilt();
    initTextRevealEffects();
    initSmoothScrollSnap();

    // NEXT-GENERATION FEATURES
    initWebGLWaterRipple();
    initThreeJSScene();
    initCinematicScroll();
    initSVGMorphing();
    initEnvironmentalAudio();
    initWebGLShaderBackground();
    initLiquidText();
    initParallaxDepthLayers();
    initGlitchEffects();
    initInfiniteScroll3D();

    console.log('ChainSync: NEXT-GENERATION experience loaded successfully');
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
          }, 300);
        }
      }, 200);
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
    // Skip fade-in on use-cases page
    if (document.body.classList.contains('use-cases-page')) {
      return;
    }

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
    // Skip animations on use-cases page
    if (document.body.classList.contains('use-cases-page')) {
      return;
    }

    const animateElements = document.querySelectorAll(
      '.feature-card, .tech-card, .step-card, .stat-item, .process-node'
    );

    // Fallback: Show all elements after timeout to prevent blank screens
    const fallbackTimeout = setTimeout(() => {
      animateElements.forEach(el => {
        if (el.style.opacity === '0') {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, 800);

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
      }, 1000);
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
    // Skip 3D card animations on use-cases page for performance
    if (document.body.classList.contains('use-cases-page')) {
      return;
    }

    const cards = document.querySelectorAll('.feature-card, .tech-card');

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
    const cards = document.querySelectorAll('.feature-card');

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
    // Skip scroll triggers on use-cases page
    if (document.body.classList.contains('use-cases-page')) {
      return;
    }

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
     Dynamic Particle Background
     ========================================== */
  function initDynamicParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create floating particles container
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    `;
    hero.insertBefore(particleContainer, hero.firstChild);

    // Create particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 2;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const left = Math.random() * 100;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        left: ${left}%;
        bottom: -10%;
        animation: floatUp ${duration}s ${delay}s infinite ease-in-out;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      `;

      particleContainer.appendChild(particle);
    }

    // Add animation
    if (!document.querySelector('#float-up-animation')) {
      const style = document.createElement('style');
      style.id = 'float-up-animation';
      style.textContent = `
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) translateX(${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* ==========================================
     Text Wave Animations
     ========================================== */
  function initTextAnimations() {
    const titles = document.querySelectorAll('.hero-title, .page-title');

    titles.forEach(title => {
      const text = title.textContent;
      title.innerHTML = '';

      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.cssText = `
          display: inline-block;
          animation: letterWave 3s ease-in-out ${index * 0.05}s infinite;
        `;
        title.appendChild(span);
      });
    });

    // Add letter wave animation
    if (!document.querySelector('#letter-wave-animation')) {
      const style = document.createElement('style');
      style.id = 'letter-wave-animation';
      style.textContent = `
        @keyframes letterWave {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* ==========================================
     Custom Animated Cursor with Trail
     ========================================== */
  function initCustomCursor() {
    if (window.innerWidth < 768 || 'ontouchstart' in window) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';

    cursor.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(0, 180, 216, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10001;
      transition: all 0.15s ease;
      mix-blend-mode: difference;
    `;

    cursorDot.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: rgba(0, 180, 216, 1);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10002;
      box-shadow: 0 0 20px rgba(0, 180, 216, 0.8);
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotX = e.clientX;
      dotY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = cursorX - 20 + 'px';
      cursor.style.top = cursorY - 20 + 'px';
      cursorDot.style.left = dotX - 4 + 'px';
      cursorDot.style.top = dotY - 4 + 'px';

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Expand cursor on hover
    document.querySelectorAll('a, button, .feature-card, .btn-primary, .btn-secondary').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.borderColor = 'rgba(82, 183, 136, 0.8)';
        cursorDot.style.background = 'rgba(82, 183, 136, 1)';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.borderColor = 'rgba(0, 180, 216, 0.5)';
        cursorDot.style.background = 'rgba(0, 180, 216, 1)';
      });
    });
  }

  /* ==========================================
     Magnetic Elements (Pull toward cursor)
     ========================================== */
  function initMagneticElements() {
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .feature-card, .step-icon');

    magneticElements.forEach(el => {
      el.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Stronger magnetic pull
        const moveX = x * 0.3;
        const moveY = y * 0.3;

        this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        this.style.transition = 'none';
      });

      el.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    });
  }

  /* ==========================================
     Scroll-Based Color Shifting
     ========================================== */
  function initScrollColorShift() {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const scroll = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scroll / maxScroll;

      // Shift colors based on scroll
      const hue = 180 + (scrollPercent * 60); // Blue to green shift
      document.documentElement.style.setProperty('--scroll-hue', hue);

      // Add class for scroll effects
      if (scroll > lastScroll && scroll > 100) {
        document.body.classList.add('scrolling-down');
      } else {
        document.body.classList.remove('scrolling-down');
      }

      lastScroll = scroll;
    }, { passive: true });
  }

  /* ==========================================
     Particle Explosion on Click
     ========================================== */
  function initParticleExplosions() {
    document.addEventListener('click', (e) => {
      createExplosion(e.clientX, e.clientY);
    });

    function createExplosion(x, y) {
      const particleCount = 15;
      const colors = ['#0077B6', '#00B4D8', '#52B788', '#74C69D'];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 100 + Math.random() * 100;

        particle.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: 8px;
          height: 8px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          box-shadow: 0 0 10px currentColor;
        `;

        document.body.appendChild(particle);

        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;

        let posX = 0;
        let posY = 0;
        let opacity = 1;

        function animateParticle() {
          posX += dx * 0.016;
          posY += dy * 0.016 + 2; // gravity
          opacity -= 0.02;

          particle.style.transform = `translate(${posX}px, ${posY}px) scale(${opacity})`;
          particle.style.opacity = opacity;

          if (opacity > 0) {
            requestAnimationFrame(animateParticle);
          } else {
            particle.remove();
          }
        }

        animateParticle();
      }
    }
  }

  /* ==========================================
     Morphing Blob Backgrounds
     ========================================== */
  function initMorphingBlobs() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.3;
    `;
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;

    class Blob {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 100 + Math.random() * 200;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(${Math.random() * 50}, ${150 + Math.random() * 50}, ${200 + Math.random() * 55}, 0.3)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const blobs = Array.from({ length: 5 }, () => new Blob());

    function animateBlobs() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });
      requestAnimationFrame(animateBlobs);
    }

    animateBlobs();

    window.addEventListener('resize', () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    });
  }

  /* ==========================================
     Advanced 3D Tilt Effects
     ========================================== */
  function initAdvanced3DTilt() {
    const cards = document.querySelectorAll('.feature-card, .scenario-card, .tech-card');

    cards.forEach(card => {
      card.style.transformStyle = 'preserve-3d';
      card.style.transition = 'transform 0.1s ease-out';

      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(1.05, 1.05, 1.05)
          translateZ(20px)
        `;

        // Add shine effect
        const shine = this.querySelector('.card-shine') || document.createElement('div');
        if (!shine.classList.contains('card-shine')) {
          shine.className = 'card-shine';
          shine.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              ${Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90}deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.3) 50%,
              rgba(255,255,255,0) 100%
            );
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
          `;
          this.appendChild(shine);
        }
        shine.style.opacity = '1';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        const shine = this.querySelector('.card-shine');
        if (shine) {
          shine.style.opacity = '0';
        }
      });
    });
  }

  /* ==========================================
     Text Reveal with Split Animation
     ========================================== */
  function initTextRevealEffects() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const text = entry.target;
          const content = text.textContent;
          text.textContent = '';
          text.style.opacity = '1';

          content.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.cssText = `
              display: inline-block;
              opacity: 0;
              transform: translateY(20px) rotateX(-90deg);
              animation: revealChar 0.5s ease forwards ${i * 0.02}s;
            `;
            text.appendChild(span);
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-title').forEach(title => {
      observer.observe(title);
    });

    // Add keyframes
    if (!document.querySelector('#reveal-char-animation')) {
      const style = document.createElement('style');
      style.id = 'reveal-char-animation';
      style.textContent = `
        @keyframes revealChar {
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* ==========================================
     Smooth Scroll with Momentum
     ========================================== */
  function initSmoothScrollSnap() {
    let currentScroll = window.pageYOffset;
    let targetScroll = currentScroll;
    let isScrolling = false;

    window.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > 50) {
        e.preventDefault();
        targetScroll += e.deltaY * 2;
        targetScroll = Math.max(0, Math.min(targetScroll, document.documentElement.scrollHeight - window.innerHeight));

        if (!isScrolling) {
          isScrolling = true;
          smoothScroll();
        }
      }
    }, { passive: false });

    function smoothScroll() {
      currentScroll += (targetScroll - currentScroll) * 0.1;

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        window.scrollTo(0, currentScroll);
        requestAnimationFrame(smoothScroll);
      } else {
        window.scrollTo(0, targetScroll);
        isScrolling = false;
      }
    }
  }

  /* ==========================================
     Error Handling
     ========================================== */
  window.addEventListener('error', function(e) {
    console.warn('ChainSync: Error detected -', e.message);
  }, true);

  /* ==========================================
     NEXT-GENERATION FEATURES
     ========================================== */

  /* WebGL Water Ripple Effect */
  function initWebGLWaterRipple() {
    const hero = document.querySelector('.hero');
    if (!hero || window.innerWidth < 768) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
      opacity: 0.6;
    `;
    hero.insertBefore(canvas, hero.firstChild);

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;

    // Simple water ripple shader
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;
      uniform vec2 mouse;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        vec2 p = uv * 2.0 - 1.0;

        float dist = length(p - mouse);
        float ripple = sin(dist * 20.0 - time * 3.0) * 0.5 + 0.5;
        ripple *= smoothstep(1.5, 0.0, dist);

        vec3 color = vec3(0.0, 0.47, 0.71) * (1.0 + ripple * 0.5);
        gl_FragColor = vec4(color, ripple * 0.3);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const mouseLocation = gl.getUniformLocation(program, 'mouse');

    let mouseX = 0, mouseY = 0;
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    let startTime = Date.now();
    function render() {
      const time = (Date.now() - startTime) * 0.001;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    }
    render();

    window.addEventListener('resize', () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    });
  }

  /* Three.js 3D Environmental Scene */
  function initThreeJSScene() {
    if (window.innerWidth < 768 || typeof THREE === 'undefined') return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    // We'll use vanilla JS to create a 3D-like effect without Three.js dependency
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 3;
      perspective: 1000px;
    `;
    hero.insertBefore(particleContainer, hero.firstChild);

    class Particle3D {
      constructor() {
        this.element = document.createElement('div');
        this.x = Math.random() * 100;
        this.y = Math.random() * 100;
        this.z = Math.random() * 1000 - 500;
        this.size = Math.random() * 4 + 1;
        this.speedZ = Math.random() * 2 + 0.5;
        this.color = ['#00B4D8', '#52B788', '#74C69D'][Math.floor(Math.random() * 3)];

        this.element.style.cssText = `
          position: absolute;
          width: ${this.size}px;
          height: ${this.size}px;
          background: ${this.color};
          border-radius: 50%;
          box-shadow: 0 0 ${this.size * 4}px ${this.color};
        `;
        particleContainer.appendChild(this.element);
      }

      update() {
        this.z += this.speedZ;
        if (this.z > 500) {
          this.z = -500;
          this.x = Math.random() * 100;
          this.y = Math.random() * 100;
        }

        const scale = 500 / (500 + this.z);
        const x = (this.x - 50) * scale + 50;
        const y = (this.y - 50) * scale + 50;
        const opacity = Math.max(0, 1 - Math.abs(this.z) / 500);

        this.element.style.left = x + '%';
        this.element.style.top = y + '%';
        this.element.style.transform = `scale(${scale})`;
        this.element.style.opacity = opacity;
      }
    }

    const particles = Array.from({ length: 50 }, () => new Particle3D());

    function animate() {
      particles.forEach(p => p.update());
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* Cinematic Scroll Animations */
  function initCinematicScroll() {
    const sections = document.querySelectorAll('section');
    let currentSection = 0;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'scale(1)';
          entry.target.style.opacity = '1';
          entry.target.style.filter = 'blur(0px)';
        } else {
          entry.target.style.transform = 'scale(0.95)';
          entry.target.style.opacity = '0.7';
          entry.target.style.filter = 'blur(2px)';
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(section);
    });

    // Parallax scroll effect for hero elements
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroTitle = document.querySelector('.hero-title');
      const heroSubtitle = document.querySelector('.hero-subtitle');

      if (heroTitle) {
        heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroTitle.style.opacity = Math.max(0, 1 - scrolled / 500);
      }
      if (heroSubtitle) {
        heroSubtitle.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSubtitle.style.opacity = Math.max(0, 1 - scrolled / 600);
      }
    }, { passive: true });
  }

  /* SVG Morphing Animations */
  function initSVGMorphing() {
    // Create animated SVG shapes that morph
    const shapes = document.querySelectorAll('.floating-shape, .gradient-orb');

    shapes.forEach((shape, index) => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
      `;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      const morphStates = [
        'M0,100 C30,80 50,120 100,100 L100,200 L0,200 Z',
        'M0,100 C50,60 70,140 100,100 L100,200 L0,200 Z',
        'M0,100 C20,90 80,110 100,100 L100,200 L0,200 Z'
      ];

      let currentState = 0;

      path.setAttribute('d', morphStates[0]);
      path.setAttribute('fill', window.getComputedStyle(shape).background || '#00B4D8');
      path.setAttribute('opacity', '0.3');

      svg.appendChild(path);
      if (shape.parentNode) {
        shape.parentNode.insertBefore(svg, shape);
      }

      setInterval(() => {
        currentState = (currentState + 1) % morphStates.length;
        path.setAttribute('d', morphStates[currentState]);
      }, 3000 + index * 1000);
    });
  }

  /* Environmental Audio Feedback */
  function initEnvironmentalAudio() {
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      function playTone(frequency, duration, volume = 0.1) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      }

      // Subtle water drop sound on click
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary') || e.target.closest('.feature-card')) {
          playTone(523.25, 0.1, 0.05); // C5 note
        }
      });

      // Ambient background tone
      const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
      buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          playTone(659.25, 0.08, 0.03); // E5 note
        });
      });
    }
  }

  /* WebGL Shader Background */
  function initWebGLShaderBackground() {
    const sections = document.querySelectorAll('.features-section, .how-it-works-section');

    sections.forEach(section => {
      const canvas = document.createElement('canvas');
      canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.4;
      `;
      section.insertBefore(canvas, section.firstChild);

      const ctx = canvas.getContext('2d');
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;

      let time = 0;
      function animate() {
        time += 0.01;

        const gradient = ctx.createLinearGradient(
          canvas.width / 2 + Math.sin(time) * 200,
          0,
          canvas.width / 2 - Math.sin(time) * 200,
          canvas.height
        );

        gradient.addColorStop(0, `rgba(0, 180, 216, ${0.1 + Math.sin(time) * 0.05})`);
        gradient.addColorStop(0.5, `rgba(82, 183, 136, ${0.08 + Math.cos(time) * 0.04})`);
        gradient.addColorStop(1, `rgba(116, 198, 157, ${0.06 + Math.sin(time * 0.5) * 0.03})`);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        requestAnimationFrame(animate);
      }
      animate();
    });
  }

  /* Liquid Text Effect */
  function initLiquidText() {
    const titles = document.querySelectorAll('.section-title');

    titles.forEach(title => {
      title.style.backgroundClip = 'text';
      title.style.webkitBackgroundClip = 'text';
      title.style.backgroundSize = '200% 200%';

      let hue = 0;
      setInterval(() => {
        hue = (hue + 1) % 360;
        const gradient = `linear-gradient(
          ${hue}deg,
          hsl(${hue}, 70%, 50%),
          hsl(${(hue + 60) % 360}, 70%, 50%),
          hsl(${(hue + 120) % 360}, 70%, 50%)
        )`;
        title.style.background = gradient;
      }, 50);
    });
  }

  /* Parallax Depth Layers */
  function initParallaxDepthLayers() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const layers = [
      { selector: '.hero-title', speed: 0.5, depth: 100 },
      { selector: '.hero-subtitle', speed: 0.7, depth: 80 },
      { selector: '.hero-actions', speed: 0.9, depth: 60 },
      { selector: '.floating-shape', speed: 0.3, depth: 120 }
    ];

    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = (e.clientX - centerX) / centerX;
      const mouseY = (e.clientY - centerY) / centerY;

      layers.forEach(layer => {
        const elements = document.querySelectorAll(layer.selector);
        elements.forEach(el => {
          const x = mouseX * layer.depth * layer.speed;
          const y = mouseY * layer.depth * layer.speed;
          el.style.transform = `translate(${x}px, ${y}px) translateZ(0)`;
        });
      });
    });
  }

  /* Glitch Effects */
  function initGlitchEffects() {
    const sectionTags = document.querySelectorAll('.section-tag');

    sectionTags.forEach(tag => {
      tag.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
          this.style.animation = 'glitch 0.3s';
        }, 10);
      });
    });

    if (!document.querySelector('#glitch-animation')) {
      const style = document.createElement('style');
      style.id = 'glitch-animation';
      style.textContent = `
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* Infinite Scroll 3D */
  function initInfiniteScroll3D() {
    const cards = document.querySelectorAll('.feature-card, .tech-card');

    window.addEventListener('scroll', () => {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const scrollProgress = 1 - (rect.top / window.innerHeight);

        if (scrollProgress > 0 && scrollProgress < 1) {
          const rotateX = (scrollProgress - 0.5) * 20;
          const scale = 0.9 + scrollProgress * 0.1;
          card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            scale(${scale})
            translateZ(${scrollProgress * 20}px)
          `;
        }
      });
    }, { passive: true });
  }

  // Expose public API
  window.ChainSync = {
    version: '5.0.0',
    theme: 'next-generation-immersive',
    refresh: init,
    enableCursorTrail: initCursorTrail
  };

})();
