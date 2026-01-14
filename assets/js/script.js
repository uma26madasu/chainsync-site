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

    // Chatbot
    initChatbot();

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
     Dynamic Particle Background - DISABLED PER USER REQUEST
     ========================================== */
  function initDynamicParticles() {
    // User requested no particle effects - completely disabled
    return;
  }

  /* ==========================================
     Text Wave Animations - DISABLED (CAUSED TEXT SPACING ISSUES)
     ========================================== */
  function initTextAnimations() {
    // DISABLED - This was splitting text into characters and breaking word spacing
    return;
  }

  /* ==========================================
     Custom Animated Cursor with Trail - DISABLED PER USER REQUEST
     ========================================== */
  function initCustomCursor() {
    // User requested removal of custom cursor (blue dot and red circle)
    return;
  }

  /* ==========================================
     Magnetic Elements (Pull toward cursor) - DISABLED
     ========================================== */
  function initMagneticElements() {
    // Disabled magnetic effects
    return;
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
     Particle Explosion on Click - DISABLED PER USER REQUEST
     ========================================== */
  function initParticleExplosions() {
    // User requested no particle effects - completely disabled
    return;
  }

  /* ==========================================
     Morphing Blob Backgrounds - DISABLED PER USER REQUEST
     ========================================== */
  function initMorphingBlobs() {
    // User requested no water/ripple/blob effects - completely disabled
    return;
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
     Text Reveal with Split Animation - DISABLED (CAUSED TEXT SPACING ISSUES)
     ========================================== */
  function initTextRevealEffects() {
    // DISABLED - This was splitting text into characters and breaking word spacing
    return;
  }

  /* ==========================================
     Smooth Scroll with Momentum - DISABLED (CAUSES LAG)
     ========================================== */
  function initSmoothScrollSnap() {
    // Disabled - custom scroll handling causes lag and janky scrolling
    return;
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

  /* WebGL Water Ripple Effect - SIMPLIFIED */
  function initWebGLWaterRipple() {
    const hero = document.querySelector('.hero');
    // Disabled WebGL water ripple for performance
    // Keeping the function but returning early
    return;

    /*if (!hero || window.innerWidth < 768) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
      opacity: 0.3;
    `;
    hero.insertBefore(canvas, hero.firstChild);

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;*/

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

  /* Three.js 3D Environmental Scene - DISABLED PER USER REQUEST */
  function initThreeJSScene() {
    // User requested no particle/water effects - completely disabled
    return;
  }

  /* Cinematic Scroll Animations - SIMPLIFIED */
  function initCinematicScroll() {
    // Simplified - removed blur filters that caused performance issues
    // Only keep simple parallax for hero
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const heroTitle = document.querySelector('.hero-title');
          const heroSubtitle = document.querySelector('.hero-subtitle');

          if (scrolled < 500) { // Only animate when hero is visible
            if (heroTitle) {
              heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
              heroTitle.style.opacity = Math.max(0, 1 - scrolled / 500);
            }
            if (heroSubtitle) {
              heroSubtitle.style.transform = `translateY(${scrolled * 0.5}px)`;
              heroSubtitle.style.opacity = Math.max(0, 1 - scrolled / 600);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* SVG Morphing Animations - DISABLED FOR PERFORMANCE */
  function initSVGMorphing() {
    // Disabled - caused performance issues
    return;
  }

  /* Environmental Audio Feedback - DISABLED (CAUSES LAG) */
  function initEnvironmentalAudio() {
    // Disabled - Web Audio API causes performance issues
    return;
  }

  /* WebGL Shader Background - DISABLED FOR PERFORMANCE */
  function initWebGLShaderBackground() {
    // Disabled - caused performance issues with multiple canvas animations
    return;
  }

  /* Liquid Text Effect - DISABLED FOR PERFORMANCE */
  function initLiquidText() {
    // Disabled - caused performance issues
    return;
  }

  /* Parallax Depth Layers - DISABLED (CAUSES LAG) */
  function initParallaxDepthLayers() {
    // Disabled - mousemove events on every frame cause severe lag
    return;
  }

  /* Glitch Effects - DISABLED */
  function initGlitchEffects() {
    // Disabled for performance
    return;
  }

  /* Infinite Scroll 3D - DISABLED FOR PERFORMANCE */
  function initInfiniteScroll3D() {
    // Disabled - caused performance issues with transforms on every scroll
    return;
  }

  /* ==========================================
     Chatbot Functionality - Enhanced
     ========================================== */
  function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    if (!chatbotToggle || !chatbotWindow) {
      return; // Chatbot not present on this page
    }

    let isOpen = false;
    let conversationStarted = false;
    let conversationHistory = []; // Track conversation for context
    let messageCount = 0;
    let feedbackGiven = false;

    // EmailJS Configuration
    // IMPORTANT: Replace these with your EmailJS credentials from https://www.emailjs.com/
    const EMAILJS_CONFIG = {
      publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
      serviceID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      templateID: 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
    };

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
      try {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('EmailJS initialized successfully');
      } catch (e) {
        console.error('EmailJS initialization failed:', e);
      }
    }

    // Email sending function
    function sendEmailViaEmailJS(toEmail, subject, content, type = 'transcript') {
      if (typeof emailjs === 'undefined') {
        console.warn('EmailJS not loaded');
        return Promise.reject('EmailJS not available');
      }

      if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
        console.warn('EmailJS not configured. Please add your credentials.');
        // Still track the lead locally
        return Promise.resolve({ status: 'saved_locally' });
      }

      // Email template parameters
      const templateParams = {
        to_email: toEmail,
        to_name: toEmail.split('@')[0],
        subject: subject,
        message: content,
        transcript: content,
        type: type,
        timestamp: new Date().toLocaleString()
      };

      return emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams
      ).then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          return response;
        },
        (error) => {
          console.error('Email sending failed:', error);
          throw error;
        }
      );
    }

    // Toggle chatbot
    function toggleChatbot() {
      isOpen = !isOpen;
      chatbotToggle.classList.toggle('open', isOpen);
      chatbotWindow.classList.toggle('open', isOpen);

      if (isOpen && chatbotInput) {
        setTimeout(() => chatbotInput.focus(), 300);
      }
    }

    // Event listeners
    chatbotToggle.addEventListener('click', toggleChatbot);
    if (chatbotClose) {
      chatbotClose.addEventListener('click', toggleChatbot);
    }

    // Enhanced keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        toggleChatbot();
      }
      // Cmd/Ctrl + K to toggle chatbot
      if ((e.metaKey || e.ctrlKey) && e.key === 'k' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        toggleChatbot();
      }
    });

    // Add enhanced toolbar to chatbot header
    addEnhancedToolbar();

    // Initialize analytics
    initAnalytics();

    // Helper Functions
    function addEnhancedToolbar() {
      const chatbotHeader = chatbotWindow.querySelector('.chatbot-header');
      if (!chatbotHeader || document.getElementById('chatbot-toolbar')) return;

      const toolbar = document.createElement('div');
      toolbar.id = 'chatbot-toolbar';
      toolbar.style.cssText = `
        display: flex;
        gap: 8px;
        margin-left: auto;
        margin-right: 8px;
      `;

      toolbar.innerHTML = `
        <button id="browse-topics-btn" title="Browse Topics" style="background: none; border: none; color: white; cursor: pointer; font-size: 16px; padding: 4px 8px;">📚</button>
        <button id="export-chat-btn" title="Export Conversation" style="background: none; border: none; color: white; cursor: pointer; font-size: 16px; padding: 4px 8px;">📥</button>
        <button id="restart-chat-btn" title="Start Over" style="background: none; border: none; color: white; cursor: pointer; font-size: 16px; padding: 4px 8px;">🔄</button>
      `;

      chatbotHeader.insertBefore(toolbar, chatbotClose);

      // Event listeners for toolbar buttons
      document.getElementById('browse-topics-btn').addEventListener('click', showTopicBrowser);
      document.getElementById('export-chat-btn').addEventListener('click', exportConversation);
      document.getElementById('restart-chat-btn').addEventListener('click', restartConversation);
    }

    function initAnalytics() {
      // Initialize analytics in localStorage if not exists
      if (!localStorage.getItem('chatbot_analytics')) {
        localStorage.setItem('chatbot_analytics', JSON.stringify({
          totalConversations: 0,
          topicCounts: {},
          feedbackCounts: { positive: 0, negative: 0 }
        }));
      }
    }

    function trackQuestion(topic) {
      try {
        const analytics = JSON.parse(localStorage.getItem('chatbot_analytics') || '{}');
        analytics.topicCounts = analytics.topicCounts || {};
        analytics.topicCounts[topic] = (analytics.topicCounts[topic] || 0) + 1;
        localStorage.setItem('chatbot_analytics', JSON.stringify(analytics));
      } catch (e) {
        console.error('Analytics error:', e);
      }
    }

    function trackFeedback(isPositive) {
      try {
        const analytics = JSON.parse(localStorage.getItem('chatbot_analytics') || '{}');
        analytics.feedbackCounts = analytics.feedbackCounts || { positive: 0, negative: 0 };
        if (isPositive) {
          analytics.feedbackCounts.positive++;
        } else {
          analytics.feedbackCounts.negative++;
        }
        localStorage.setItem('chatbot_analytics', JSON.stringify(analytics));
      } catch (e) {
        console.error('Analytics error:', e);
      }
    }

    function showTopicBrowser() {
      const topics = [
        { emoji: '❓', title: 'What is ChainSync?', message: 'What is ChainSync?' },
        { emoji: '⚙️', title: 'How does it work?', message: 'How does it work?' },
        { emoji: '🏛️', title: 'Government benefits', message: 'Government benefits' },
        { emoji: '💧', title: 'Water treatment help', message: 'Water treatment help' },
        { emoji: '📡', title: 'Monitoring system', message: 'Tell me about monitoring' },
        { emoji: '⚡', title: 'Response time', message: 'How fast is the response?' },
        { emoji: '📊', title: 'Benefits & ROI', message: 'What are the benefits?' },
        { emoji: '🔧', title: 'Technology stack', message: 'Tell me about the technology' },
        { emoji: '💰', title: 'Pricing', message: 'How much does it cost?' },
        { emoji: '🔗', title: 'Integration', message: 'How does integration work?' },
        { emoji: '🚨', title: 'Use cases', message: 'Show me use cases' },
        { emoji: '🚀', title: 'Get started', message: 'How do I get started?' }
      ];

      const browserHTML = `
        <div style="padding: 16px;">
          <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Browse Topics</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; max-height: 400px; overflow-y: auto;">
            ${topics.map(topic => `
              <button class="topic-browse-btn" data-message="${topic.message}" style="
                padding: 12px;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                background: white;
                cursor: pointer;
                text-align: left;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                gap: 8px;
              ">
                <span style="font-size: 20px;">${topic.emoji}</span>
                <span style="font-size: 13px; font-weight: 500;">${topic.title}</span>
              </button>
            `).join('')}
          </div>
          <button id="close-topic-browser" style="
            width: 100%;
            margin-top: 16px;
            padding: 10px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: #f9fafb;
            cursor: pointer;
            font-weight: 500;
          ">Close</button>
        </div>
      `;

      chatbotInput.value = message;
      addMessage(browserHTML, 'bot');

      // Add event listeners to topic buttons
      setTimeout(() => {
        document.querySelectorAll('.topic-browse-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const msg = btn.getAttribute('data-message');
            chatbotInput.value = msg;
            sendMessage();
          });
          btn.addEventListener('mouseenter', (e) => {
            e.target.style.background = '#f0fdf4';
            e.target.style.borderColor = '#10b981';
          });
          btn.addEventListener('mouseleave', (e) => {
            e.target.style.background = 'white';
            e.target.style.borderColor = '#e5e7eb';
          });
        });

        document.getElementById('close-topic-browser')?.addEventListener('click', () => {
          document.querySelectorAll('.message.bot').forEach(msg => {
            if (msg.textContent.includes('Browse Topics')) {
              msg.remove();
            }
          });
        });
      }, 100);
    }

    function exportConversation() {
      const messages = Array.from(chatbotMessages.querySelectorAll('.message')).map(msg => {
        const sender = msg.classList.contains('user') ? 'You' : 'ChainSync';
        const text = msg.querySelector('.message-text')?.textContent || '';
        const time = msg.querySelector('.message-time')?.textContent || '';
        return `[${time}] ${sender}: ${text}`;
      }).join('\n\n');

      const exportOptions = `
        <div style="padding: 16px;">
          <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Export Conversation</h3>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <button id="copy-to-clipboard" style="padding: 10px; border: 1px solid #10b981; border-radius: 8px; background: white; cursor: pointer; font-weight: 500; color: #10b981;">
              📋 Copy to Clipboard
            </button>
            <button id="download-txt" style="padding: 10px; border: 1px solid #10b981; border-radius: 8px; background: white; cursor: pointer; font-weight: 500; color: #10b981;">
              💾 Download as TXT
            </button>
            <button id="email-transcript" style="padding: 10px; border: 1px solid #10b981; border-radius: 8px; background: white; cursor: pointer; font-weight: 500; color: #10b981;">
              📧 Email Transcript
            </button>
            <button id="print-chat" style="padding: 10px; border: 1px solid #10b981; border-radius: 8px; background: white; cursor: pointer; font-weight: 500; color: #10b981;">
              🖨️ Print
            </button>
          </div>
        </div>
      `;

      addMessage(exportOptions, 'bot');

      setTimeout(() => {
        document.getElementById('copy-to-clipboard')?.addEventListener('click', () => {
          navigator.clipboard.writeText(messages).then(() => {
            addMessage('✅ Copied to clipboard!', 'bot');
          });
        });

        document.getElementById('download-txt')?.addEventListener('click', () => {
          const blob = new Blob([messages], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `chainsync-conversation-${Date.now()}.txt`;
          a.click();
          URL.revokeObjectURL(url);
          addMessage('✅ Download started!', 'bot');
        });

        document.getElementById('email-transcript')?.addEventListener('click', () => {
          showEmailForm(messages);
        });

        document.getElementById('print-chat')?.addEventListener('click', () => {
          const printWindow = window.open('', '', 'height=600,width=800');
          printWindow.document.write('<html><head><title>ChainSync Conversation</title></head><body>');
          printWindow.document.write('<pre>' + messages + '</pre>');
          printWindow.document.write('</body></html>');
          printWindow.document.close();
          printWindow.print();
        });
      }, 100);
    }

    function showEmailForm(transcript) {
      const emailFormHTML = `
        <div style="padding: 16px;">
          <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Email Transcript</h3>
          <input type="email" id="email-input" placeholder="Enter your email" style="
            width: 100%;
            padding: 10px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            margin-bottom: 8px;
            font-size: 14px;
          ">
          <div style="display: flex; gap: 8px;">
            <button id="send-email-btn" style="
              flex: 1;
              padding: 10px;
              border: none;
              border-radius: 8px;
              background: #10b981;
              color: white;
              cursor: pointer;
              font-weight: 500;
            ">Send</button>
            <button id="cancel-email-btn" style="
              flex: 1;
              padding: 10px;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              background: white;
              cursor: pointer;
              font-weight: 500;
            ">Cancel</button>
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">We'll also send you information about ChainSync!</p>
        </div>
      `;

      addMessage(emailFormHTML, 'bot');

      setTimeout(() => {
        document.getElementById('send-email-btn')?.addEventListener('click', () => {
          const email = document.getElementById('email-input')?.value;
          if (email && email.includes('@')) {
            const sendBtn = document.getElementById('send-email-btn');
            sendBtn.textContent = 'Sending...';
            sendBtn.disabled = true;

            // Create formatted email content
            const emailContent = formatTranscriptForEmail(transcript);

            // Send email via EmailJS
            sendEmailViaEmailJS(
              email,
              'Your ChainSync Conversation + Early Access Info',
              emailContent,
              'transcript'
            ).then(() => {
              trackLead(email, transcript);
              addMessage(`✅ Transcript sent to ${email}! We'll also follow up with more information about ChainSync.`, 'bot');
            }).catch((error) => {
              console.error('Email error:', error);
              // Even if email fails, save the lead
              trackLead(email, transcript);
              if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
                addMessage(`✅ Thanks! We've saved your email (${email}). We'll reach out soon with your transcript and demo information!`, 'bot');
              } else {
                addMessage(`⚠️ Email saved! There was an issue sending, but we've recorded your request for ${email}. We'll follow up soon!`, 'bot');
              }
            });
          } else {
            addMessage('❌ Please enter a valid email address.', 'bot');
          }
        });

        document.getElementById('cancel-email-btn')?.addEventListener('click', () => {
          addMessage('Email cancelled.', 'bot');
        });
      }, 100);
    }

    function formatTranscriptForEmail(transcript) {
      return `
Hi there!

Thanks for chatting with our ChainSync assistant! Here's your conversation transcript:

${transcript}

---

WANT TO LEARN MORE ABOUT CHAINSYNC?

ChainSync is an intelligent environmental emergency response platform built with Python agents that:

• Detects threats in under 2 seconds
• Coordinates multi-agency responses automatically
• Ensures regulatory compliance with automated reporting
• Protects water, air, and land through real-time monitoring

We're currently in early access for government agencies, municipalities, and water treatment facilities.

NEXT STEPS:

Reply to this email to:
- Schedule a personalized demo
- Discuss your organization's needs
- Learn about pricing for government agencies
- Get access to our technical documentation

Or visit our website: https://chainsync-site-kohl.vercel.app/

Best regards,
The ChainSync Team

P.S. We're building ChainSync to help communities respond faster to environmental emergencies. Every second counts when protecting our water, air, and land.
      `.trim();
    }

    function trackLead(email, context) {
      try {
        const leads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]');
        leads.push({
          email,
          timestamp: new Date().toISOString(),
          context: context.substring(0, 500)
        });
        localStorage.setItem('chatbot_leads', JSON.stringify(leads));
        console.log('Lead captured:', email);
      } catch (e) {
        console.error('Lead tracking error:', e);
      }
    }

    function restartConversation() {
      if (confirm('Start a new conversation? This will clear the current chat.')) {
        chatbotMessages.innerHTML = `
          <div class="welcome-message" style="text-align: center; padding: 24px; color: #6b7280;">
            <div style="font-size: 48px; margin-bottom: 16px;">🌱</div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #1f2937;">Welcome to ChainSync!</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px;">I'm here to help you learn about environmental emergency response.</p>
            <div class="quick-replies">
              <button class="quick-reply-btn" data-message="What is ChainSync?">What is ChainSync?</button>
              <button class="quick-reply-btn" data-message="How does it work?">How does it work?</button>
              <button class="quick-reply-btn" data-message="Government benefits">Government benefits</button>
            </div>
          </div>
        `;
        conversationHistory = [];
        conversationStarted = false;
        messageCount = 0;
        feedbackGiven = false;

        // Re-attach quick reply listeners
        const quickReplyBtns = chatbotMessages.querySelectorAll('.quick-reply-btn');
        quickReplyBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const message = btn.getAttribute('data-message');
            chatbotInput.value = message;
            sendMessage();
          });
        });
      }
    }

    // Fuzzy matching function (Levenshtein distance)
    function levenshteinDistance(str1, str2) {
      const matrix = [];
      for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
      }
      for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
      }
      for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
          if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            );
          }
        }
      }
      return matrix[str2.length][str1.length];
    }

    function fuzzyMatch(input, keywords) {
      const threshold = 3; // Max edit distance
      for (const keyword of keywords) {
        const distance = levenshteinDistance(input.toLowerCase(), keyword.toLowerCase());
        if (distance <= threshold && keyword.length > 4) {
          return true;
        }
      }
      return false;
    }

    // Auto-resize textarea
    if (chatbotInput) {
      chatbotInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
      });
    }

    // Handle send message
    function sendMessage() {
      const message = chatbotInput.value.trim();
      if (!message) return;

      // Clear welcome message on first interaction
      if (!conversationStarted) {
        const welcomeMsg = chatbotMessages.querySelector('.welcome-message');
        if (welcomeMsg) {
          welcomeMsg.remove();
        }
        conversationStarted = true;
      }

      // Add user message
      addMessage(message, 'user');
      chatbotInput.value = '';
      chatbotInput.style.height = 'auto';

      // Show typing indicator
      showTypingIndicator();

      // Simulate bot response
      setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(message);
        addMessage(response.text, 'bot', response.quickReplies);
      }, 1000 + Math.random() * 1000);
    }

    // Add message to chat
    function addMessage(text, sender, quickReplies = null, responseKey = null) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${sender}`;
      messageCount++;

      const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
      });

      // Add feedback buttons for bot messages
      const feedbackHTML = sender === 'bot' && !text.includes('<button') ? `
        <div class="message-feedback" style="margin-top: 8px; display: flex; gap: 8px; align-items: center;">
          <button class="feedback-btn feedback-positive" data-feedback="positive" style="
            background: none;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s;
          " title="Helpful">👍</button>
          <button class="feedback-btn feedback-negative" data-feedback="negative" style="
            background: none;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s;
          " title="Not helpful">👎</button>
          <button class="copy-message-btn" style="
            background: none;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s;
            margin-left: auto;
          " title="Copy response">📋</button>
        </div>
      ` : '';

      messageDiv.innerHTML = `
        <div class="message-avatar">${sender === 'bot' ? '🌱' : '👤'}</div>
        <div class="message-content">
          <p class="message-text">${text}</p>
          <span class="message-time">${time}</span>
          ${feedbackHTML}
          ${quickReplies ? `
            <div class="quick-replies">
              ${quickReplies.map(reply => `
                <button class="quick-reply-btn" data-message="${reply}">${reply}</button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;

      chatbotMessages.appendChild(messageDiv);

      // Track conversation history
      if (sender === 'user' || sender === 'bot') {
        conversationHistory.push({
          sender,
          text,
          time,
          responseKey
        });
      }

      // Add event listeners to quick reply buttons
      if (quickReplies) {
        const quickReplyBtns = messageDiv.querySelectorAll('.quick-reply-btn');
        quickReplyBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const msg = btn.getAttribute('data-message');
            chatbotInput.value = msg;
            sendMessage();
          });
        });
      }

      // Add feedback button listeners
      if (sender === 'bot') {
        const feedbackBtns = messageDiv.querySelectorAll('.feedback-btn');
        feedbackBtns.forEach(btn => {
          btn.addEventListener('click', function() {
            const isPositive = this.getAttribute('data-feedback') === 'positive';
            trackFeedback(isPositive);

            // Visual feedback
            feedbackBtns.forEach(b => b.style.opacity = '0.3');
            this.style.opacity = '1';
            this.style.background = isPositive ? '#f0fdf4' : '#fef2f2';
            this.style.borderColor = isPositive ? '#10b981' : '#ef4444';
            this.disabled = true;

            // Show thank you message after feedback
            if (!feedbackGiven && messageCount > 3) {
              feedbackGiven = true;
              setTimeout(() => {
                addMessage("Thank you for your feedback! 🙏 Is there anything else you'd like to know about ChainSync?", 'bot', null, 'feedback_thanks');
              }, 500);
            }
          });
        });

        const copyBtn = messageDiv.querySelector('.copy-message-btn');
        if (copyBtn) {
          copyBtn.addEventListener('click', function() {
            const textContent = messageDiv.querySelector('.message-text').textContent;
            navigator.clipboard.writeText(textContent).then(() => {
              this.textContent = '✅';
              setTimeout(() => {
                this.textContent = '📋';
              }, 2000);
            });
          });
        }
      }

      // Ask for email after 5 messages
      if (messageCount === 5 && sender === 'bot' && !localStorage.getItem('chatbot_email_collected')) {
        setTimeout(() => {
          showLeadCapturePrompt();
        }, 2000);
      }

      // Scroll to bottom
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function showLeadCapturePrompt() {
      const promptHTML = `
        <div style="padding: 16px; background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); border-radius: 12px; border: 1px solid #10b981;">
          <h4 style="margin: 0 0 8px 0; font-size: 15px; font-weight: 600; color: #065f46;">Want to learn more?</h4>
          <p style="margin: 0 0 12px 0; font-size: 13px; color: #047857;">Enter your email to get a personalized demo and early access information!</p>
          <input type="email" id="lead-email-input" placeholder="your@email.com" style="
            width: 100%;
            padding: 10px;
            border: 1px solid #10b981;
            border-radius: 8px;
            margin-bottom: 8px;
            font-size: 14px;
          ">
          <div style="display: flex; gap: 8px;">
            <button id="submit-lead-btn" style="
              flex: 1;
              padding: 10px;
              border: none;
              border-radius: 8px;
              background: #10b981;
              color: white;
              cursor: pointer;
              font-weight: 500;
            ">Get Demo Info</button>
            <button id="skip-lead-btn" style="
              padding: 10px 16px;
              border: 1px solid #10b981;
              border-radius: 8px;
              background: white;
              cursor: pointer;
              font-weight: 500;
              color: #10b981;
            ">Maybe Later</button>
          </div>
        </div>
      `;

      addMessage(promptHTML, 'bot');

      setTimeout(() => {
        document.getElementById('submit-lead-btn')?.addEventListener('click', () => {
          const email = document.getElementById('lead-email-input')?.value;
          if (email && email.includes('@')) {
            const submitBtn = document.getElementById('submit-lead-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const context = conversationHistory.map(m => m.text).join('\n');

            // Send demo info email
            const demoEmailContent = formatDemoEmail(email, context);

            sendEmailViaEmailJS(
              email,
              'ChainSync Demo Information & Early Access',
              demoEmailContent,
              'demo'
            ).then(() => {
              trackLead(email, context);
              localStorage.setItem('chatbot_email_collected', 'true');
              addMessage(`🎉 Perfect! We've sent demo information to ${email}. In the meantime, feel free to continue asking questions!`, 'bot');
            }).catch((error) => {
              console.error('Email error:', error);
              trackLead(email, context);
              localStorage.setItem('chatbot_email_collected', 'true');
              if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
                addMessage(`✅ Thanks! We've saved your email (${email}). We'll reach out soon with demo information!`, 'bot');
              } else {
                addMessage(`🎉 Email saved! We'll send demo information to ${email} shortly. Feel free to continue asking questions!`, 'bot');
              }
            });
          } else {
            addMessage('❌ Please enter a valid email address.', 'bot');
          }
        });

        document.getElementById('skip-lead-btn')?.addEventListener('click', () => {
          localStorage.setItem('chatbot_email_collected', 'skip');
          addMessage('No problem! Feel free to continue exploring ChainSync.', 'bot');
        });
      }, 100);
    }

    function formatDemoEmail(email, conversationContext) {
      const name = email.split('@')[0];
      return `
Hi ${name}!

Thanks for your interest in ChainSync! We're excited to share more about how our intelligent environmental emergency response platform can help your organization.

WHAT IS CHAINSYNC?

ChainSync is built with Python-based intelligent agents that protect communities by:

• Detecting environmental threats in under 2 seconds
• Automatically coordinating multi-agency emergency responses
• Ensuring regulatory compliance with automated reporting
• Protecting water, air, and land through 24/7 real-time monitoring

PERFECT FOR:

✓ Government agencies (municipal, county, state, federal)
✓ Water treatment facilities
✓ Environmental protection departments
✓ Emergency management teams
✓ Public utilities

EARLY ACCESS PROGRAM:

We're currently onboarding early access partners. This includes:
- Personalized demo and implementation planning
- Special early adopter pricing for government agencies
- Direct access to our engineering team
- Grant application assistance

NEXT STEPS:

Reply to this email with:
1. Your organization type (government/utility/etc.)
2. Your primary environmental monitoring needs
3. Preferred time for a 30-minute demo call

We'll schedule a personalized demonstration and discuss how ChainSync can serve your specific needs.

Or visit our website: https://chainsync-site-kohl.vercel.app/
Contact us: https://chainsync-site-kohl.vercel.app/contact.html

Best regards,
The ChainSync Team

P.S. Based on your questions, you might be particularly interested in:
${conversationContext.includes('government') || conversationContext.includes('Government') ? '• Government compliance features\n• Multi-agency coordination' : ''}
${conversationContext.includes('water') || conversationContext.includes('Water') ? '• Water treatment monitoring\n• SCADA integration' : ''}
${conversationContext.includes('pricing') || conversationContext.includes('cost') ? '• Public sector pricing\n• ROI analysis' : ''}

---

ChainSync - Every second counts when protecting our environment
      `.trim();
    }

    // Show typing indicator
    function showTypingIndicator() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'typing-indicator';
      typingDiv.id = 'typing-indicator';
      typingDiv.innerHTML = `
        <div class="message-avatar">🌱</div>
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;
      chatbotMessages.appendChild(typingDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Hide typing indicator
    function hideTypingIndicator() {
      const typingIndicator = document.getElementById('typing-indicator');
      if (typingIndicator) {
        typingIndicator.remove();
      }
    }

    // Generate bot response based on user input
    function generateResponse(message) {
      const msg = message.toLowerCase();

      // Enhanced knowledge base for ChainSync with better matching
      const responses = {
        greeting: {
          keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
          text: "Hello! I'm the ChainSync Assistant. 👋<br><br>I'm here to help you understand how we're protecting the environment through intelligent emergency response.<br><br>What would you like to know?",
          quickReplies: ['What is ChainSync?', 'How does it work?', 'Government benefits']
        },
        whatIs: {
          keywords: ['what is chainsync', 'what is this', 'what do you do', 'what does chainsync do', 'tell me about chainsync', 'about chainsync'],
          text: "ChainSync is an <strong>intelligent environmental emergency response platform</strong>.<br><br>We help communities protect their water, land, and air by connecting sensors, teams, and stakeholders into one coordinated system.<br><br>When environmental threats occur—like chemical spills or contamination—ChainSync detects them instantly and orchestrates the response automatically.",
          quickReplies: ['How does it work?', 'Government benefits', 'Water treatment help']
        },
        howItWorks: {
          keywords: ['how does it work', 'how it works', 'process', 'explain', 'workflow', 'mechanism'],
          text: "ChainSync works in <strong>4 coordinated stages</strong>:<br><br>🔍 <strong>Detect</strong><br>Real-time sensors monitor environmental conditions<br><br>🧠 <strong>Analyze</strong><br>AI analyzes threat severity and selects response protocols<br><br>📢 <strong>Coordinate</strong><br>Automated notifications to teams, stakeholders, and regulators<br><br>🛡️ <strong>Protect</strong><br>Complete documentation and compliance tracking<br><br>All of this happens automatically in seconds!",
          quickReplies: ['Government benefits', 'Water treatment help', 'Response time']
        },
        features: {
          keywords: ['features', 'capabilities', 'what can it do', 'show me features', 'feature list', 'functions'],
          text: "ChainSync offers <strong>three core capabilities</strong>:<br><br>📊 <strong>Real-time Environmental Monitoring</strong><br>• Sensor integration<br>• Weather data fusion<br>• Instant threat detection<br><br>🤝 <strong>Intelligent Coordination</strong><br>• Automated team alerts<br>• Stakeholder updates<br>• Regulatory reporting<br><br>📝 <strong>Automated Documentation</strong><br>• Auto-generated reports<br>• Complete audit trails<br>• Compliance tracking",
          quickReplies: ['Monitoring details', 'Government benefits', 'Water treatment help']
        },
        government: {
          keywords: ['government', 'governments', 'public sector', 'municipal', 'city', 'county', 'federal', 'state', 'regulatory', 'agencies', 'EPA', 'environmental agency'],
          text: "<strong>ChainSync is a powerful tool for government agencies!</strong><br><br>We help:<br><br>• Ensure regulatory compliance automatically<br>• Coordinate multi-agency responses instantly<br>• Provide real-time reporting to elected officials and the public<br>• Reduce legal liability with complete audit trails<br>• Demonstrate environmental stewardship to constituents<br>• Save taxpayer money through faster response times<br><br>We integrate directly with EPA systems and state environmental databases.",
          quickReplies: ['Compliance features', 'Water treatment help', 'Cost savings']
        },
        waterTreatment: {
          keywords: ['water treatment', 'water plant', 'wastewater', 'treatment plant', 'drinking water', 'water system', 'water quality', 'water contamination', 'water safety'],
          text: "<strong>ChainSync for Water Treatment Facilities</strong> 💧<br><br>Critical capabilities:<br><br>• <strong>Real-time Monitoring:</strong> Water quality parameters (pH, turbidity, contaminants)<br>• <strong>Instant Alerts:</strong> When readings exceed safe thresholds<br>• <strong>Automated Notifications:</strong> To operators, management, and health officials<br>• <strong>EPA Compliance:</strong> Complete documentation automatically<br>• <strong>SCADA Integration:</strong> Works with your existing systems<br><br>We protect your community's drinking water 24/7.",
          quickReplies: ['Monitoring details', 'Government benefits', 'Response protocols']
        },
        waterUseCases: {
          keywords: ['water', 'chemical spill', 'contamination', 'pollution', 'runoff', 'discharge'],
          text: "<strong>Water Emergency Response</strong> 💧<br><br>ChainSync handles:<br><br>• Chemical spills<br>• Industrial discharge<br>• Agricultural runoff<br>• Infrastructure failures<br>• Treatment plant issues<br><br><strong>Our Process:</strong><br>• Detect contamination instantly<br>• Analyze threat levels with AI<br>• Coordinate across utilities & health departments<br>• Automate public notifications<br>• Track remediation in real-time<br>• Generate EPA-compliant reports",
          quickReplies: ['Water treatment help', 'Response time', 'Government benefits']
        },
        monitoring: {
          keywords: ['monitoring', 'sensors', 'detection', 'surveillance', 'tracking', 'real-time'],
          text: "<strong>Our Monitoring System</strong> 📡<br><br>Integrates with:<br><br>• Water quality sensors<br>• Air quality monitors<br>• Waste facility instruments<br>• Weather stations<br>• Industrial equipment<br><br><strong>Intelligent Analysis:</strong><br>• AI analyzes patterns continuously<br>• Detects anomalies instantly<br>• Predicts issues before emergencies<br>• 24/7 monitoring with redundancy",
          quickReplies: ['Sensor types', 'AI analysis', 'Integration process']
        },
        benefits: {
          keywords: ['benefits', 'advantages', 'why use', 'why chainsync', 'value', 'roi', 'return'],
          text: "<strong>Measurable Results</strong> 📊<br><br>ChainSync delivers:<br><br>• <strong>70% faster response times</strong> (minutes instead of hours)<br>• <strong>95% fewer compliance violations</strong><br>• <strong>80% reduction in manual reporting time</strong><br>• Significant reduction in environmental damage & cleanup costs<br>• Improved public trust and transparency<br>• Complete legal protection with audit trails<br><br>For a typical municipality, this translates to <strong>millions in savings annually</strong>.",
          quickReplies: ['Cost savings', 'Government benefits', 'Get started']
        },
        responseTime: {
          keywords: ['fast', 'speed', 'quick', 'response time', 'how long', 'instantly', 'immediate'],
          text: "<strong>Response Speed</strong> ⚡<br><br>ChainSync responds in <strong>seconds</strong>:<br><br>• <strong>< 2 seconds:</strong> Sensor data processing<br>• <strong>Instant:</strong> AI threat analysis<br>• <strong>< 5 seconds:</strong> Team notifications sent<br>• <strong>< 1 minute:</strong> Complete coordination<br><br>Compare to traditional methods: <strong>4-6 hours</strong><br><br>In environmental emergencies, this speed saves lives, ecosystems, and millions in cleanup costs!",
          quickReplies: ['How does it work?', 'Water treatment help', 'Government benefits']
        },
        useCases: {
          keywords: ['use case', 'examples', 'scenarios', 'applications', 'situations'],
          text: "<strong>Environmental Emergencies We Handle</strong> 🚨<br><br>We respond to:<br><br>• <strong>Water Emergencies:</strong> Chemical spills, treatment failures, contamination<br>• <strong>Waste Issues:</strong> Landfill overflow, illegal dumping, hazmat<br>• <strong>Air Quality Events:</strong> Industrial emissions, fire smoke, gas leaks<br>• <strong>Ecosystem Threats:</strong> Wildlife impacts, habitat contamination<br><br>Each scenario gets instant detection, coordinated response, and automated compliance reporting.",
          quickReplies: ['Water treatment help', 'Government benefits', 'Response protocols']
        },
        technology: {
          keywords: ['technology', 'tech stack', 'how is it built', 'architecture', 'platform', 'system'],
          text: "<strong>Enterprise-Grade Technology</strong> 🔧<br><br>Our platform includes:<br><br>• <strong>AI/ML:</strong> Threat analysis & pattern recognition<br>• <strong>Cloud Infrastructure:</strong> 99.99% uptime guarantee<br>• <strong>Real-time Processing:</strong> Instant data analysis<br>• <strong>Security:</strong> Complete data encryption<br>• <strong>Multi-Platform:</strong> Mobile apps & web dashboards<br><br><strong>Integrations:</strong><br>• EPA systems<br>• SCADA<br>• Lab equipment<br>• Emergency management platforms",
          quickReplies: ['Security features', 'Integration process', 'Government benefits']
        },
        pricing: {
          keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'expense', 'investment'],
          text: "<strong>Pricing & Early Access</strong> 💰<br><br>Currently in development with early access launching soon.<br><br><strong>For Governments:</strong><br>• Special public sector pricing<br>• Grant assistance available<br>• ROI within first year<br><br><strong>Cost Savings:</strong><br>• Reduced violations<br>• Faster response times<br>• Automated reporting<br><br>Pricing tailored to your organization's size and needs.<br><br>Would you like to discuss your specific requirements?",
          quickReplies: ['Join early access', 'Government benefits', 'Cost savings']
        },
        contact: {
          keywords: ['contact', 'get started', 'join', 'sign up', 'demo', 'early access', 'talk to', 'reach out'],
          text: "<strong>Let's Get Started!</strong> 🚀<br><br>Join our early access program through our contact page.<br><br><strong>What you'll get:</strong><br>• Personalized demo<br>• Implementation discussion<br>• Custom solution design<br><br>We'd love to hear about your environmental protection needs and show you how ChainSync can help your organization.",
          quickReplies: ['Visit contact page', 'Pricing info', 'Government benefits']
        },
        integration: {
          keywords: ['integrate', 'integration', 'connect', 'compatibility', 'works with', 'scada'],
          text: "<strong>Seamless Integration</strong> 🔗<br><br>Works with:<br><br>• SCADA systems<br>• Lab equipment (LIMS)<br>• EPA reporting tools<br>• Emergency management platforms<br>• GIS mapping systems<br>• Public notification tools<br><br><strong>Setup Process:</strong><br>• Standard APIs<br>• Technical support included<br>• 2-4 weeks implementation<br>• Minimal disruption",
          quickReplies: ['Technology details', 'Government benefits', 'Get started']
        }
      };

      // Multi-word phrase matching (check longer phrases first)
      const phraseMatches = [
        { phrases: ['water treatment', 'treatment plant', 'wastewater'], response: responses.waterTreatment },
        { phrases: ['how it works', 'how does it work'], response: responses.howItWorks },
        { phrases: ['use case', 'use cases'], response: responses.useCases },
        { phrases: ['government', 'governments'], response: responses.government },
        { phrases: ['response time', 'how fast', 'how quick'], response: responses.responseTime }
      ];

      for (const match of phraseMatches) {
        if (match.phrases.some(phrase => msg.includes(phrase))) {
          return match.response;
        }
      }

      // Single keyword matching with relevance scoring + fuzzy matching
      let bestMatch = null;
      let highestScore = 0;
      let bestMatchKey = null;

      for (const [key, response] of Object.entries(responses)) {
        if (key === 'default') continue;

        let score = 0;
        for (const keyword of response.keywords) {
          // Exact match
          if (msg.includes(keyword)) {
            score += keyword.length;
          }
          // Fuzzy match (for typos)
          else if (fuzzyMatch(msg, [keyword])) {
            score += keyword.length * 0.8; // Slightly lower score for fuzzy matches
          }
        }

        if (score > highestScore) {
          highestScore = score;
          bestMatch = response;
          bestMatchKey = key;
        }
      }

      if (bestMatch && highestScore > 0) {
        // Track the topic
        trackQuestion(bestMatchKey || 'unknown');
        return bestMatch;
      }

      // Contextual default responses based on question type
      if (msg.includes('?')) {
        // They asked a question we don't have an answer for
        return {
          text: `Great question! I don't have specific information about "${message.substring(0, 50)}${message.length > 50 ? '...' : ''}" yet, but I can help you with: how ChainSync works, benefits for government agencies, water treatment applications, monitoring capabilities, response times, and integration options. What interests you most?`,
          quickReplies: ['Government benefits', 'Water treatment help', 'How does it work?']
        };
      }

      // Generic fallback
      return {
        text: "I'd be happy to help you learn about ChainSync! I can explain how we help governments and municipalities protect their communities, how we monitor water treatment facilities, our real-time emergency response capabilities, and much more. What would you like to explore?",
        quickReplies: ['Government benefits', 'Water treatment help', 'Show me features']
      };
    }

    // Send button click
    if (chatbotSend) {
      chatbotSend.addEventListener('click', sendMessage);
    }

    // Enter key to send (Shift+Enter for new line)
    if (chatbotInput) {
      chatbotInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      });
    }

    // Quick reply buttons in welcome message
    const quickReplyBtns = chatbotMessages.querySelectorAll('.quick-reply-btn');
    quickReplyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const message = btn.getAttribute('data-message');
        chatbotInput.value = message;
        sendMessage();
      });
    });

    console.log('ChainSync: Chatbot initialized');
  }

  // Expose public API
  window.ChainSync = {
    version: '6.0.0',
    theme: 'clean-smooth',
    refresh: init,
    enableCursorTrail: initCursorTrail,
    chatbot: {
      init: initChatbot
    }
  };

})();
