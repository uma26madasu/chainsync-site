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
    const EMAILJS_CONFIG = {
      publicKey: 'mvRcXt-RUQv_C4hzo',
      serviceID: 'service_6mitzhj',
      templateID: 'template_4579caf'
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

Or visit our website: https://getchainsync.com/

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

Or visit our website: https://getchainsync.com/
Contact us: https://getchainsync.com/contact.html

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

      // Enhanced knowledge base with context awareness and Python agent details
      const responses = {
        greeting: {
          keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'sup', 'yo'],
          text: "Hello! I'm the ChainSync Assistant. 👋<br><br>I'm here to help you understand how we're building intelligent environmental emergency response with Python agents.<br><br>What would you like to know?",
          quickReplies: ['What is ChainSync?', 'Python agents?', 'Development status'],
          topic: 'greeting'
        },
        whatIs: {
          keywords: ['what is chainsync', 'what is this', 'what do you do', 'what does chainsync do', 'tell me about chainsync', 'about chainsync', 'explain chainsync'],
          text: "ChainSync is an <strong>intelligent environmental emergency response platform</strong> built on specialized Python agents.<br><br>🎯 <strong>Our Mission:</strong><br>Protect communities and ecosystems by automating coordination during environmental emergencies<br><br>🔧 <strong>How we're different:</strong><br>Instead of one monolithic system, we use <strong>specialized Python agents</strong> that work together—each handling detection, analysis, coordination, or documentation.<br><br>📍 <strong>Current Status:</strong><br>Active development. Core agent framework is built; multi-agent coordination in progress.",
          quickReplies: ['Python agents?', 'How does it work?', 'Development status'],
          topic: 'whatIs'
        },
        pythonAgents: {
          keywords: ['python', 'agent', 'agents', 'architecture', 'how built', 'modular', 'detection agent', 'analysis agent', 'coordination agent', 'documentation agent'],
          text: "<strong>Our Python Agent Architecture</strong> 🐍<br><br>We're building specialized agents, each with a focused role:<br><br>🔍 <strong>Detection Agent</strong><br>• Monitors sensor streams (water, air, soil)<br>• Analyzes weather patterns<br>• Identifies anomalies in real-time<br>• Built for reliability and speed<br><br>🧠 <strong>Analysis Agent</strong><br>• Evaluates threat severity<br>• Determines response protocols<br>• Makes escalation decisions<br>• Context-aware intelligence<br><br>📡 <strong>Coordination Agent</strong><br>• Orchestrates notifications<br>• Manages stakeholder communication<br>• Handles regulatory reporting<br>• Ensures right info to right people<br><br>📝 <strong>Documentation Agent</strong><br>• Auto-generates compliance reports<br>• Creates audit trails<br>• Tracks all actions<br><br><strong>Why Python?</strong> Reliability, extensive libraries for data science, easy integration, and rapid development.",
          quickReplies: ['Development status', 'How does it work?', 'Integration details'],
          topic: 'pythonAgents'
        },
        development: {
          keywords: ['development', 'status', 'progress', 'timeline', 'when', 'ready', 'launch', 'available', 'release', 'testing'],
          text: "<strong>Development Status - Honest Update</strong> 🛠️<br><br><strong>✅ What's Built:</strong><br>• Core Python agent framework<br>• Sensor integration module<br>• Data processing pipeline<br>• Basic detection algorithms<br><br><strong>🔨 Currently Building:</strong><br>• Multi-agent coordination system<br>• Notification infrastructure<br>• Compliance reporting engine<br>• Testing in controlled environments<br><br><strong>📋 Planned Next:</strong><br>• Public testing program<br>• Pilot partnerships<br>• Regulatory approval pathways<br><br><strong>Timeline?</strong> We don't have a public launch date. We're prioritizing building it right over building it fast. Join early access for updates!",
          quickReplies: ['Join early access', 'Python agents?', 'How can I help?'],
          topic: 'development'
        },
        howItWorks: {
          keywords: ['how does it work', 'how it works', 'process', 'explain', 'workflow', 'mechanism', 'steps'],
          text: "ChainSync coordinates environmental response in <strong>4 automated stages</strong>:<br><br>🔍 <strong>1. DETECT</strong> (< 2 seconds)<br>• Detection Agent monitors sensors<br>• Identifies anomalies in real-time<br>• Enriches with weather/historical data<br><br>🧠 <strong>2. ANALYZE</strong> (< 3 seconds)<br>• Analysis Agent evaluates severity<br>• Determines threat level<br>• Selects appropriate protocol<br><br>📢 <strong>3. COORDINATE</strong> (< 5 seconds)<br>• Coordination Agent notifies teams<br>• Alerts stakeholders automatically<br>• Informs regulators (EPA, state agencies)<br><br>🛡️ <strong>4. PROTECT</strong> (continuous)<br>• Documentation Agent records everything<br>• Generates compliance reports<br>• Tracks resolution progress<br><br><strong>Total time:</strong> Complete coordination in under 10 seconds vs. 4-6 hours manually!",
          quickReplies: ['Python agents?', 'Response time details', 'Government benefits'],
          topic: 'howItWorks'
        },
        features: {
          keywords: ['features', 'capabilities', 'what can it do', 'show me features', 'feature list', 'functions', 'abilities'],
          text: "ChainSync's <strong>three core capabilities</strong>:<br><br>📊 <strong>Real-time Environmental Monitoring</strong><br>• Multi-sensor integration (water, air, soil)<br>• Weather data fusion<br>• Instant anomaly detection<br>• Pattern analysis with AI<br><br>🤝 <strong>Intelligent Coordination</strong><br>• Automated team alerts (SMS, email, app)<br>• Stakeholder notifications<br>• Regulatory reporting (EPA compliance)<br>• Multi-agency coordination<br><br>📝 <strong>Automated Documentation</strong><br>• Auto-generated incident reports<br>• Complete audit trails<br>• Compliance tracking<br>• Timeline reconstruction<br><br>All powered by specialized Python agents working together!",
          quickReplies: ['Python agents?', 'Monitoring details', 'Government use'],
          topic: 'features'
        },
        government: {
          keywords: ['government', 'governments', 'public sector', 'municipal', 'city', 'county', 'federal', 'state', 'regulatory', 'agencies', 'EPA', 'environmental agency', 'public'],
          text: "<strong>ChainSync for Government & Public Agencies</strong> 🏛️<br><br><strong>Key Benefits:</strong><br>• <strong>Regulatory Compliance:</strong> Automatic EPA reporting<br>• <strong>Multi-Agency Coordination:</strong> Utilities, health dept, emergency services<br>• <strong>Public Transparency:</strong> Real-time incident dashboards<br>• <strong>Legal Protection:</strong> Complete audit trails<br>• <strong>Cost Savings:</strong> 70% faster response = millions saved<br>• <strong>Political Benefits:</strong> Demonstrate environmental stewardship<br><br><strong>Who uses it:</strong><br>• Environmental protection agencies<br>• Water/wastewater utilities<br>• Emergency management departments<br>• Public health departments<br><br><strong>Integration:</strong> Works with existing EPA systems, SCADA, and emergency management platforms.",
          quickReplies: ['Compliance features', 'Cost savings', 'Implementation time'],
          topic: 'government'
        },
        waterTreatment: {
          keywords: ['water treatment', 'water plant', 'wastewater', 'treatment plant', 'drinking water', 'water system', 'water quality', 'water contamination', 'water safety', 'utility'],
          text: "<strong>ChainSync for Water Treatment Facilities</strong> 💧<br><br><strong>What we monitor:</strong><br>• pH, turbidity, chlorine levels<br>• Bacterial contamination<br>• Chemical concentrations<br>• Flow rates and pressure<br>• Equipment performance<br><br><strong>Automatic responses:</strong><br>• Operator alerts when parameters exceed limits<br>• Management notifications for major incidents<br>• Public health department coordination<br>• EPA incident reporting<br>• Public notification system activation<br><br><strong>Integration:</strong><br>• SCADA systems<br>• Lab information management (LIMS)<br>• Existing sensor networks<br>• Emergency notification systems<br><br><strong>Result:</strong> 24/7 protection of community drinking water with instant incident response.",
          quickReplies: ['SCADA integration', 'Response protocols', 'Compliance tracking'],
          topic: 'waterTreatment'
        },
        waterUseCases: {
          keywords: ['water', 'chemical spill', 'contamination', 'pollution', 'runoff', 'discharge', 'leak'],
          text: "<strong>Water Emergency Scenarios</strong> 💧<br><br>ChainSync handles:<br><br>🚨 <strong>Chemical Spills:</strong><br>• Industrial discharge into waterways<br>• Transportation accidents<br>• Storage tank failures<br><br>🌾 <strong>Agricultural Runoff:</strong><br>• Pesticide contamination<br>• Nutrient pollution<br>• Sediment transport<br><br>🏭 <strong>Treatment Plant Issues:</strong><br>• Equipment failures<br>• Process upsets<br>• Distribution system breaks<br><br><strong>Our Response:</strong><br>• Instant detection from sensors<br>• Severity analysis (drinking water impact?)<br>• Coordinate utilities, health dept, EPA<br>• Public notifications if needed<br>• Track remediation<br>• Generate compliance reports",
          quickReplies: ['Water treatment', 'Response time', 'Government coordination'],
          topic: 'waterUseCases'
        },
        monitoring: {
          keywords: ['monitoring', 'sensors', 'detection', 'surveillance', 'tracking', 'real-time', 'iot', 'data'],
          text: "<strong>Our Monitoring System</strong> 📡<br><br><strong>Sensor Integration:</strong><br>• Water quality meters<br>• Air quality monitors<br>• Soil sensors<br>• Weather stations<br>• Industrial equipment<br>• Flow meters<br><br><strong>Detection Agent Capabilities:</strong><br>• Processes data streams in < 2 seconds<br>• Identifies anomalies with AI<br>• Cross-references historical patterns<br>• Incorporates weather impacts<br>• Predicts escalation risk<br><br><strong>Data Processing:</strong><br>• 24/7 continuous monitoring<br>• Redundant systems<br>• Cloud-based reliability<br>• Handles thousands of sensors<br><br><strong>Intelligence:</strong> Our Python Detection Agent learns normal patterns and spots deviations instantly.",
          quickReplies: ['Python agents?', 'AI analysis', 'Sensor types'],
          topic: 'monitoring'
        },
        benefits: {
          keywords: ['benefits', 'advantages', 'why use', 'why chainsync', 'value', 'roi', 'return', 'results', 'outcomes'],
          text: "<strong>Measurable Impact</strong> 📊<br><br><strong>Target Performance:</strong><br>• <strong>70% faster response</strong> (minutes vs. 4-6 hours)<br>• <strong>95% reduction in compliance violations</strong><br>• <strong>80% less manual reporting time</strong><br>• Complete legal protection via audit trails<br><br><strong>Cost Savings:</strong><br>• Reduced environmental damage<br>• Lower cleanup costs<br>• Fewer fines and penalties<br>• Automated compliance = staff efficiency<br><br><strong>Intangible Benefits:</strong><br>• Community trust<br>• Political goodwill<br>• Environmental stewardship<br>• Public safety assurance<br><br><strong>ROI:</strong> Most municipalities see return within first year through avoided violations and faster response.",
          quickReplies: ['Cost breakdown', 'Government benefits', 'Success stories'],
          topic: 'benefits'
        },
        responseTime: {
          keywords: ['fast', 'speed', 'quick', 'response time', 'how long', 'instantly', 'immediate', 'seconds', 'minutes'],
          text: "<strong>Response Speed Breakdown</strong> ⚡<br><br><strong>ChainSync Agent Coordination:</strong><br>• <strong>< 2 sec:</strong> Detection Agent processes sensor data<br>• <strong>< 3 sec:</strong> Analysis Agent evaluates threat<br>• <strong>< 5 sec:</strong> Coordination Agent sends alerts<br>• <strong>< 10 sec:</strong> Full multi-agency notification<br>• <strong>< 1 min:</strong> Complete incident documentation started<br><br>🐌 <strong>Traditional Manual Process:</strong><br>• Operator notices issue: ~15-30 minutes<br>• Calls supervisor: +15 minutes<br>• Supervisor calls agencies: +30-60 minutes<br>• Agencies coordinate: +2-4 hours<br>• Total: <strong>4-6 hours</strong><br><br>⚡ <strong>The Difference:</strong><br>ChainSync's automated agents eliminate phone tag, email chains, and manual coordination—cutting 4-6 hours down to seconds!",
          quickReplies: ['Python agents?', 'How does it work?', 'Real-world impact'],
          topic: 'responseTime'
        },
        useCases: {
          keywords: ['use case', 'examples', 'scenarios', 'applications', 'situations', 'emergency', 'incident'],
          text: "<strong>Environmental Emergencies We Handle</strong> 🚨<br><br>💧 <strong>Water Emergencies:</strong><br>• Chemical spills<br>• Treatment failures<br>• Contamination events<br>• Infrastructure breaks<br><br>🗑️ <strong>Waste Issues:</strong><br>• Landfill overflow<br>• Illegal dumping<br>• Hazmat incidents<br><br>🌫️ <strong>Air Quality Events:</strong><br>• Industrial emissions<br>• Fire smoke<br>• Gas leaks<br><br>🌳 <strong>Ecosystem Threats:</strong><br>• Wildlife impacts<br>• Habitat contamination<br>• Soil pollution<br><br><strong>Common Thread:</strong><br>Each needs instant detection, coordinated response, and regulatory compliance—exactly what our Python agents automate!",
          quickReplies: ['Water emergencies', 'Waste response', 'Air quality'],
          topic: 'useCases'
        },
        technology: {
          keywords: ['technology', 'tech stack', 'how is it built', 'architecture', 'platform', 'system', 'infrastructure'],
          text: "<strong>Technology Stack</strong> 🔧<br><br><strong>Core Platform:</strong><br>• Python agent framework (modular architecture)<br>• Cloud infrastructure (99.99% uptime target)<br>• Real-time data processing<br>• Machine learning for pattern recognition<br><br><strong>Security:</strong><br>• End-to-end encryption<br>• SOC 2 compliance (planned)<br>• Secure sensor communication<br>• Complete audit logging<br><br><strong>Integrations:</strong><br>• EPA reporting systems<br>• SCADA platforms<br>• LIMS (lab systems)<br>• Emergency management<br>• GIS mapping<br><br><strong>Deployment:</strong><br>• Cloud-based (AWS/Azure)<br>• Mobile apps (iOS/Android)<br>• Web dashboards<br>• API access for custom integration",
          quickReplies: ['Python agents?', 'Security details', 'Integration process'],
          topic: 'technology'
        },
        pricing: {
          keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'expense', 'investment', 'afford'],
          text: "<strong>Pricing & Early Access</strong> 💰<br><br><strong>Current Status:</strong><br>We're in active development. Pricing will be announced when we approach testing phase.<br><br><strong>Expected Model:</strong><br>• Subscription-based (SaaS)<br>• Tiered by organization size<br>• Government/public sector pricing<br>• Grant assistance available<br><br><strong>Cost Factors:</strong><br>• Number of sensors monitored<br>• Number of facilities/sites<br>• Number of users<br>• Integration complexity<br><br><strong>ROI Expectation:</strong><br>Most municipalities save more in avoided violations and faster response than the platform costs.<br><br>Join early access to be notified when pricing is available!",
          quickReplies: ['Join early access', 'ROI details', 'Government grants'],
          topic: 'pricing'
        },
        contact: {
          keywords: ['contact', 'get started', 'join', 'sign up', 'demo', 'early access', 'talk to', 'reach out', 'email'],
          text: "<strong>Let's Connect!</strong> 🚀<br><br><strong>Early Access Program:</strong><br>Join through our contact page to:<br>• Get development updates<br>• Influence feature priorities<br>• Be first for testing opportunities<br>• Discuss your specific needs<br><br><strong>We're especially interested in:</strong><br>• Environmental agencies<br>• Water treatment facilities<br>• Municipalities with environmental monitoring<br>• Anyone dealing with emergency response coordination<br><br><strong>What you'll get:</strong><br>Regular updates on our Python agent development and opportunities to provide input!",
          quickReplies: ['Visit contact page', 'Development status', 'Learn more'],
          topic: 'contact'
        },
        integration: {
          keywords: ['integrate', 'integration', 'connect', 'compatibility', 'works with', 'scada', 'api', 'setup'],
          text: "<strong>Integration Capabilities</strong> 🔗<br><br><strong>Systems we connect to:</strong><br>• SCADA/HMI systems<br>• Laboratory equipment (LIMS)<br>• EPA reporting tools<br>• Emergency management platforms<br>• GIS mapping systems<br>• Public notification tools<br>• Existing sensor networks<br><br><strong>Integration Methods:</strong><br>• RESTful APIs<br>• Direct sensor protocols<br>• Database connections<br>• File-based transfers<br><br><strong>Setup Process:</strong><br>• Technical assessment (1 week)<br>• Custom integration development<br>• Testing & validation<br>• Training & documentation<br><br><strong>Timeline:</strong> Estimated 2-4 weeks for typical implementation.",
          quickReplies: ['SCADA details', 'API documentation', 'Technical requirements'],
          topic: 'integration'
        },
        thanks: {
          keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'awesome', 'great'],
          text: "You're very welcome! 😊<br><br>I'm here whenever you have more questions about ChainSync, our Python agent architecture, or how we're building intelligent environmental protection.<br><br>Is there anything else you'd like to know?",
          quickReplies: ['Development status', 'Join early access', 'Python agents?'],
          topic: 'thanks'
        },
        team: {
          keywords: ['who made', 'who created', 'who built', 'who develop', 'who is behind', 'who are you', 'your team', 'your creator', 'made you', 'built you', 'behind you', 'developing you', 'founder', 'creators'],
          text: "<strong>About the Team Behind ChainSync</strong> 👥<br><br>I'm the ChainSync Assistant, and I was built by a team passionate about using technology to protect communities and ecosystems.<br><br><strong>Our Team:</strong><br>We're a group bringing together expertise in:<br>• Environmental systems & emergency response<br>• AI/ML and Python development<br>• Enterprise software architecture<br>• Public health and regulatory compliance<br><br><strong>What drives us:</strong><br>We believe clean water, safe air, and healthy ecosystems shouldn't depend on luck or perfect timing. Every member of our team wakes up thinking about how to make environmental protection faster, smarter, and more effective.<br><br><strong>Currently:</strong><br>We're in development mode, building our Python agent platform. Team details will be shared as we approach launch, but know that we're people who genuinely care about protecting what matters most.<br><br>Made with love towards the environment 💚",
          quickReplies: ['Our mission', 'Python agents?', 'Join our mission'],
          topic: 'team'
        },
        apiDocumentation: {
          keywords: ['api documentation', 'api docs', 'api reference', 'developer documentation', 'api guide', 'rest api', 'api endpoints', 'api access', 'developer api'],
          text: "<strong>API Documentation & Developer Access</strong> 📚<br><br><strong>Current Status:</strong><br>We're still building our API layer as part of active development. Comprehensive API documentation will be released during our beta testing phase.<br><br><strong>Planned API Capabilities:</strong><br>• <strong>RESTful endpoints</strong> for sensor data integration<br>• <strong>Webhook notifications</strong> for real-time alerts<br>• <strong>Data export APIs</strong> for reporting and analytics<br>• <strong>Configuration APIs</strong> for system management<br>• <strong>Status & health endpoints</strong> for monitoring<br><br><strong>Authentication:</strong><br>• OAuth 2.0 / API key authentication<br>• Role-based access control<br>• Rate limiting for stability<br><br><strong>Documentation Format:</strong><br>• OpenAPI/Swagger specification<br>• Interactive API explorer<br>• Code examples (Python, JavaScript, curl)<br>• Sandbox environment for testing<br><br>Join early access to be notified when API docs are available!",
          quickReplies: ['Join early access', 'Integration details', 'Technical requirements'],
          topic: 'apiDocumentation'
        },
        technicalRequirements: {
          keywords: ['technical requirements', 'system requirements', 'requirements', 'specifications', 'specs', 'hardware requirements', 'software requirements', 'minimum requirements', 'what do i need'],
          text: "<strong>Technical Requirements</strong> 💻<br><br><strong>For Organizations Using ChainSync:</strong><br><br><strong>Sensor/Data Sources:</strong><br>• Internet-connected sensors (IP-based or cellular)<br>• SCADA/HMI systems with data export capability<br>• Laboratory systems (LIMS) with API or file export<br>• Existing database systems (SQL, NoSQL)<br><br><strong>Network Requirements:</strong><br>• Stable internet connection (10+ Mbps recommended)<br>• Static IP or VPN for SCADA integration<br>• Firewall configuration for outbound HTTPS (port 443)<br>• Optional: VPN for secure sensor communication<br><br><strong>User Access:</strong><br>• Modern web browser (Chrome, Firefox, Safari, Edge)<br>• Mobile devices (iOS 12+, Android 8+)<br>• No special hardware required for end users<br><br><strong>Integration Prep:</strong><br>• Sensor documentation & specs<br>• Network topology diagram<br>• List of systems to integrate<br>• User access requirements<br><br><strong>Our team handles:</strong> Cloud infrastructure, platform maintenance, security updates, and scaling!",
          quickReplies: ['Integration process', 'Security details', 'Setup timeline'],
          topic: 'technicalRequirements'
        },
        security: {
          keywords: ['security', 'secure', 'encryption', 'data protection', 'privacy', 'compliance', 'hipaa', 'soc2', 'safe', 'protected', 'data security', 'cybersecurity'],
          text: "<strong>Security & Compliance</strong> 🔒<br><br><strong>Data Security:</strong><br>• <strong>End-to-end encryption</strong> (TLS 1.3 for data in transit)<br>• <strong>AES-256 encryption</strong> for data at rest<br>• <strong>Encrypted sensor communication</strong> with certificate validation<br>• <strong>Secure cloud infrastructure</strong> (AWS/Azure with security best practices)<br><br><strong>Access Control:</strong><br>• Multi-factor authentication (MFA)<br>• Role-based access control (RBAC)<br>• Audit logs for all user actions<br>• Session management & timeout<br><br><strong>Compliance Targets:</strong><br>• <strong>SOC 2 Type II</strong> (planned certification)<br>• <strong>FISMA moderate</strong> (for government agencies)<br>• <strong>EPA data standards</strong> compliance<br>• <strong>GDPR & CCPA</strong> privacy compliance<br><br><strong>Infrastructure Security:</strong><br>• Regular penetration testing<br>• 24/7 security monitoring<br>• Automated vulnerability scanning<br>• Incident response procedures<br>• Regular security audits<br><br><strong>Your Data:</strong><br>You own your data. We never sell or share environmental data with third parties.",
          quickReplies: ['Data ownership', 'Compliance details', 'Technical requirements'],
          topic: 'security'
        },
        support: {
          keywords: ['support', 'training', 'help', 'assistance', 'onboarding', 'implementation support', 'customer support', 'technical support', 'learn', 'documentation'],
          text: "<strong>Support & Training</strong> 🎓<br><br><strong>Implementation Support:</strong><br>• <strong>Dedicated onboarding specialist</strong> for each organization<br>• <strong>Custom integration assistance</strong> with your systems<br>• <strong>On-site or remote training</strong> for your team<br>• <strong>Technical documentation & guides</strong><br><br><strong>Training Program:</strong><br>• <strong>Administrator training:</strong> System configuration, user management, integrations<br>• <strong>Operator training:</strong> Daily monitoring, alert response, incident documentation<br>• <strong>Executive overview:</strong> Dashboards, reporting, compliance tracking<br>• <strong>Custom workshops</strong> for your specific needs<br><br><strong>Ongoing Support:</strong><br>• <strong>24/7 critical incident support</strong> (for emergency environmental events)<br>• <strong>Email & phone support</strong> during business hours<br>• <strong>Online knowledge base</strong> with FAQs and guides<br>• <strong>Regular product updates</strong> and feature releases<br>• <strong>Quarterly business reviews</strong> for optimization<br><br><strong>Community:</strong><br>• User forums for peer learning<br>• Webinars on environmental response best practices<br>• Early access to new features",
          quickReplies: ['Implementation time', 'Training details', 'Join early access'],
          topic: 'support'
        }
      };

      // Conversation context tracking
      if (!window.chatbotContext) {
        window.chatbotContext = {
          lastTopic: null,
          questionCount: 0,
          topics: []
        };
      }

      // Multi-word phrase matching (check longer phrases first)
      const phraseMatches = [
        { phrases: ['api documentation', 'api docs', 'api reference', 'developer documentation', 'rest api'], response: responses.apiDocumentation },
        { phrases: ['technical requirements', 'system requirements', 'minimum requirements', 'hardware requirements', 'software requirements'], response: responses.technicalRequirements },
        { phrases: ['data security', 'security compliance', 'encryption'], response: responses.security },
        { phrases: ['customer support', 'technical support', 'implementation support'], response: responses.support },
        { phrases: ['python agent', 'python agents'], response: responses.pythonAgents },
        { phrases: ['water treatment', 'treatment plant', 'wastewater'], response: responses.waterTreatment },
        { phrases: ['development status', 'development progress', 'when ready', 'when available'], response: responses.development },
        { phrases: ['how it works', 'how does it work'], response: responses.howItWorks },
        { phrases: ['use case', 'use cases'], response: responses.useCases },
        { phrases: ['response time', 'how fast', 'how quick'], response: responses.responseTime },
        { phrases: ['early access', 'join', 'sign up'], response: responses.contact }
      ];

      for (const match of phraseMatches) {
        if (match.phrases.some(phrase => msg.includes(phrase))) {
          window.chatbotContext.lastTopic = match.response.topic;
          window.chatbotContext.questionCount++;
          window.chatbotContext.topics.push(match.response.topic);
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
        // Track the topic and context
        trackQuestion(bestMatchKey || 'unknown');
        window.chatbotContext.lastTopic = bestMatch.topic;
        window.chatbotContext.questionCount++;
        window.chatbotContext.topics.push(bestMatch.topic);
        return bestMatch;
      }

      // Context-aware fallback - suggest related topics based on conversation history
      if (window.chatbotContext.questionCount > 0 && window.chatbotContext.lastTopic) {
        const contextSuggestions = {
          'pythonAgents': ['Development status', 'How does it work?', 'Integration details'],
          'development': ['Python agents?', 'Join early access', 'Timeline details'],
          'government': ['Compliance features', 'Cost savings', 'Implementation'],
          'waterTreatment': ['SCADA integration', 'Response protocols', 'Monitoring details']
        };

        const suggestions = contextSuggestions[window.chatbotContext.lastTopic] || ['Python agents?', 'Development status', 'How does it work?'];

        if (msg.includes('?')) {
          return {
            text: `Great question! I don't have specific information about "${message.substring(0, 50)}${message.length > 50 ? '...' : ''}" yet.<br><br>Based on our conversation, you might be interested in:`,
            quickReplies: suggestions,
            topic: 'contextual_fallback'
          };
        }
      }

      // Generic fallback
      return {
        text: "I'd be happy to help you learn about ChainSync! I can explain:<br><br>🐍 Our Python agent architecture<br>🛠️ Development status (honest updates)<br>🚨 How emergency response works<br>🏛️ Benefits for government agencies<br>💧 Water treatment applications<br><br>What interests you most?",
        quickReplies: ['Python agents?', 'Development status', 'How does it work?'],
        topic: 'generic_fallback'
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
